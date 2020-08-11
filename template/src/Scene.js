import React, { useMemo, useRef } from "react";
import { Icosahedron } from "drei";
import { useFrame } from "react-three-fiber";

import "./materials/deformMaterial";

function Scene() {
  const material = useRef();
  useFrame(() => {
    material.current.uniforms.time.value += 1;
  });

  return (
    <Icosahedron args={[1, 3]}>
      <deformMaterial ref={material} />
    </Icosahedron>
  );
}

export default Scene;
