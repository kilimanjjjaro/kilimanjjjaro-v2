export const DISTORTED_IMAGE_SHADERS = {
  fragmentShader: `
    float PI = 3.141592653589793238;

    uniform float uTime;
    uniform sampler2D uTexture;
    uniform sampler2D uDistortionTexture;
    uniform float uDistortionStrength;

    varying vec2 vUv;

    const float distortionCoef = 0.24;

    void main()	{
      vec4 distortionTexture = texture2D(uDistortionTexture, vUv);
      float distortion = (distortionTexture.r  * uDistortionStrength * distortionCoef) - uTime;
      vec2 distortedPosition = vec2(vUv.x + distortion, vUv.y + distortion);
      
      vec4 color = texture2D(uTexture, distortedPosition);

      // color.r = texture2D(uTexture, distortedPosition + vec2(0., 5. * 0.0) * uDistortionStrength * distortionCoef).r;
      // color.g = texture2D(uTexture, distortedPosition + vec2(0., 5. * 0.01) * uDistortionStrength * distortionCoef).g;
      // color.b = texture2D(uTexture, distortedPosition + vec2(0., 5. * 0.02) * uDistortionStrength * distortionCoef).b;

      gl_FragColor = color;
    }
  `,
  vertexShader: `
    float PI = 3.141592653589793238;

    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `
}
