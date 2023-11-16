export const DISTORTED_TEXT_SHADERS = {
  fragmentShader: `
    uniform float uTime;

    varying vec2 vUv;
    varying vec3 vPosition;

    void main()	{
      gl_FragColor = vec4(vUv, 0.0, 1.0);
    }
  `,
  vertexShader: `
    uniform float uTime;

    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `
}
