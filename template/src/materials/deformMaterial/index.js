import { extend } from "react-three-fiber";
import { shaderMaterial } from "drei";

import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";

const DeformMaterial = shaderMaterial({ time: 0 }, vertex, fragment);

extend({ DeformMaterial });
