import React, { useMemo, useRef } from "react";
import { Icosahedron } from "drei";
import { useFrame } from "react-three-fiber";
import glsl from "babel-plugin-glsl/macro";

const frag = glsl`
  uniform float time;
  uniform vec2 resolution;

  varying vec3 vNormal;

  void main()	{
      gl_FragColor = vec4(vNormal, 1.);
  }
`;

const vert = glsl`
  uniform float time;
  uniform vec2 resolution;

  varying vec3 vNormal;

  #pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

  void main()	{
      vNormal = normal;
      float updateTime = time / 1000.0;

      float noise = snoise3(vec3(position * 0.4 + updateTime * 5.0));
      vec4 mvPosition = modelViewMatrix * vec4(position * (noise * pow(1., 2.0) + 1.0), 1.0);

      gl_Position = projectionMatrix * mvPosition;
  }
`;

function Scene() {
  const uniforms = useMemo(
    () => ({
      time: {
        type: "f",
        value: 0.0,
      },
    }),
    []
  );

  const material = useRef();
  useFrame(() => {
    material.current.uniforms.time.value += 1;
  });

  return (
    <>
      <Icosahedron args={[1, 3]}>
        <shaderMaterial
          attach="material"
          vertexShader={vert}
          fragmentShader={frag}
          ref={material}
          uniforms={uniforms}
          vertexColors
        />
      </Icosahedron>
    </>
  );
}

export default Scene;
