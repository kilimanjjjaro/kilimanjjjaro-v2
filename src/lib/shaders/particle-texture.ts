export const PARTICLE_TEXTURE_SHADERS = {
  fragmentShader: `
    uniform sampler2D uImageTexture;
    uniform sampler2D uParticleTexture;
    
    varying vec2 vUv;
    varying vec2 vCoordinates;
    varying vec3 vPosition;

    void main()	{
      vec2 newUV = vec2(vCoordinates.x / 1600.0, vCoordinates.y / 300.0);
      
      vec4 imageColor = texture2D(uImageTexture, newUV);
      vec4 particleColor = texture2D(uParticleTexture, gl_PointCoord);

      
      gl_FragColor = imageColor;
      gl_FragColor.a *= particleColor.a;
    }
  `,
  vertexShader: `
    uniform float uTime;
    uniform vec2 uPointer;

    attribute vec3 aCoordinates;
    attribute float aSpeed;
    attribute float aOffset;
    attribute float aDirection;
    attribute float aPress;
    
    varying vec2 vUv;
    varying vec2 vCoordinates;
    varying vec3 vPosition;

    void main() {
      vUv = uv;

      // vPosition = position;

      // STABLE POSITION
      vec3 stable = position;
      float dist = distance(stable.xy, uPointer);
      float area = 1.0 - smoothstep(0.0, 500.0, dist);

      stable.x += 50.0 * sin(0.1 * uTime * aPress) * aDirection * area;
      stable.y += 50.0 * sin(0.1 * uTime * aPress) * aDirection * area;
      stable.z += 200.0 * cos(0.1 * uTime * aPress) * aDirection * area;

      vec4 modelViewPosition = modelViewMatrix * vec4(stable, 1.0);
      gl_PointSize = 1000.0 * (1.0 / - modelViewPosition.z);
      gl_Position = projectionMatrix * modelViewPosition;

      vCoordinates = aCoordinates.xy;
    }
  `
}
