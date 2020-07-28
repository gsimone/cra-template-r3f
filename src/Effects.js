import { useMemo, useEffect } from "react";
import { HalfFloatType } from "three";
import { useLoader, useThree, useFrame } from "react-three-fiber";
import {
  SMAAImageLoader,
  BlendFunction,
  KernelSize,
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  SSAOEffect,
  NormalPass,
} from "postprocessing";

export default function Effects({
  smaa = true,
  ao = true,
  bloom = true,
  edgeDetection = 0.1,
  bloomOpacity = 1,
  effects,
}) {
  const { gl, scene, camera, size } = useThree();
  const smaaProps = useLoader(SMAAImageLoader, "");
  const composer = useMemo(() => {

    const composer = new EffectComposer(gl, { frameBufferType: HalfFloatType });
    composer.addPass(new RenderPass(scene, camera));
    
    const smaaEffect = new SMAAEffect(...smaaProps);
    smaaEffect.colorEdgesMaterial.setEdgeDetectionThreshold(edgeDetection);
    
    const normalPass = new NormalPass(scene, camera);
    const ssaoEffect = new SSAOEffect(camera, normalPass.renderTarget.texture, {
      blendFunction: BlendFunction.MULTIPLY,
      samples: 21,
      rings: 4,
      distanceThreshold: 1.0,
      distanceFalloff: 0.0,
      rangeThreshold: 0.015,
      rangeFalloff: 0.002,
      luminanceInfluence: 0.9,
      radius: 20,
      scale: 1.0,
      bias: 0.05,
      ...ao,
    });

    const bloomEffect = new BloomEffect({
      opacity: 1,
      blendFunction: BlendFunction.SCREEN,
      kernelSize: KernelSize.VERY_LARGE,
      luminanceThreshold: 0.9,
      luminanceSmoothing: 0.07,
      height: 600,
      ...bloom,
    });

    bloomEffect.blendMode.opacity.value = bloomOpacity;
    let effectsArray = [];

    if (effects) {
      effectsArray = effects([smaaEffect, ssaoEffect, bloomEffect]);
    } else {
      if (smaa) effectsArray.push(smaaEffect);
      if (ao) effectsArray.push(ssaoEffect);
      if (bloom) effectsArray.push(bloomEffect);
    }

    const effectPass = new EffectPass(camera, ...effectsArray);
    effectPass.renderToScreen = true;
    composer.addPass(normalPass);
    composer.addPass(effectPass);
    return composer;
  }, [camera, gl, scene, smaa, ao, bloom, edgeDetection, bloomOpacity]);

  useEffect(() => void composer.setSize(size.width, size.height), [
    composer,
    size,
  ]);

  return useFrame((_, delta) => composer.render(delta), 1);
}
