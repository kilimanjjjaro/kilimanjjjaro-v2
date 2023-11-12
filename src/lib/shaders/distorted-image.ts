export const DISTORTED_IMAGE_SHADERS = {
  fragmentShader: `
    float PI = 3.141592653589793238;

    uniform sampler2D uTexture;
    uniform sampler2D uDistortionTexture;

    varying vec2 vUv;

    void main()	{
      vec4 displaceMap = texture2D(uDistortionTexture, vUv.yx);

      vec2 displacedUV = vec2(vUv.x, vUv.y);

      displacedUV.y = mix(vUv.y, displaceMap.r - 0.2, 0.3);

      vec4 color = texture2D(uTexture, displacedUV);

      color.r = texture2D(uTexture, displacedUV + vec2(0.,10.*0.0) * 0.3).r;
      color.g = texture2D(uTexture, displacedUV + vec2(0.,10.*0.01) * 0.3).g;
      color.b = texture2D(uTexture, displacedUV + vec2(0.,10.*0.02) * 0.3).b;

      gl_FragColor = color;
    }
  `,
  vertexShader: `
    float PI = 3.141592653589793238;

    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `
}
