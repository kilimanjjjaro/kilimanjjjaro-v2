uniform float time;
uniform vec4 resolution;
uniform sampler2D uTexture;
uniform sampler2D uDataTexture;

varying vec2 vUv;

void main() {
  // vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
  vec4 color = texture2D(uTexture, vUv);
  vec4 offset = texture2D(uDataTexture, vUv);

  gl_FragColor = vec4(vUv, 0.0, 1.0);
  gl_FragColor = vec4(offset.r, 0.0, 0.0, 1.0);
  gl_FragColor = color;
  gl_FragColor = texture2D(uTexture, vUv - 0.5 * offset.rg);
}