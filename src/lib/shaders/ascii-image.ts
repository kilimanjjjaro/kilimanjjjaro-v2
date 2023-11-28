export const ASCII_IMAGE_SHADERS = {
  fragmentShader: `
    uniform float u_time;
    uniform sampler2D t_texture;
    uniform sampler2D t_chars;
    
    varying vec2 vUv;
    varying float vScale;
    
    void main() {
      float size = 66.0;
    
      vec2 newUv = vUv;
      newUv.x = vUv.x / size + floor(vScale * size) / size;
    
      vec4 charsMap = texture2D(t_chars, newUv);
      vec4 color = vec4(vUv, 0.0, 1.0);
    
      gl_FragColor = charsMap;
    }
  `,
  vertexShader: `
    varying vec2 vUv;
    varying float vScale;
    
    attribute float a_instanceScale;
    
    void main() {
      vUv = uv;
      vScale = a_instanceScale;
      gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    }
  `
}
