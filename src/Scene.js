import React, { useMemo, useRef } from "react";
import { Icosahedron } from "drei";

import vert from "./shaders/default.vert";
import frag from "./shaders/default.frag";
import { useFrame } from "react-three-fiber";

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
