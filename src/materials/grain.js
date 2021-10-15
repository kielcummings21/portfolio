import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Texture } from "three";

const GrainMaterial = shaderMaterial(
  {
    map: new Texture(),
    delta: 0,
  },
  `
  varying vec2 vUv;

    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vUv = uv;
    }
`,
  `
    uniform sampler2D map;

    varying vec2 vUv;

    void main() {
      vec4 textureColor = texture2D(map, vUv);

      gl_FragColor = textureColor;
    }
`
);

extend({ GrainMaterial });
