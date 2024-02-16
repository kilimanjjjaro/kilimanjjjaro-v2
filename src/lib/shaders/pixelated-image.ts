export const PIXELATED_IMAGE_SHADERS = {
  fragmentShader: `
    uniform vec4 uResolution;
    uniform sampler2D uImageTexture;
    uniform sampler2D uDataTexture;
    varying vec2 vUv;

    void main() {
      vec2 newUV = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
      vec4 color = texture2D(uImageTexture, newUV);
      vec4 offset = texture2D(uDataTexture, vUv);
      
      gl_FragColor = texture2D(uImageTexture, newUV - 0.02 * offset.rg);
    }
  `,
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `
}
