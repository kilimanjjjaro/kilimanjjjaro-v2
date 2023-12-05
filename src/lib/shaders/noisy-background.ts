export const NOISY_BACKGROUND_SHADERS = {
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uBaseFirstColor;
    uniform vec3 uBaseSecondColor;
    uniform vec3 uAccentColor;
    uniform float uVelocity;

    varying vec2 vUv;
    varying vec3 vPosition;

    // NOISE FUNCTION VARIABLES
    float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

    // NOISE FUNCTION
    float noise(vec3 p){
      vec3 a = floor(p);
      vec3 d = p - a;
      d = d * d * (3.0 - 2.0 * d);

      vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
      vec4 k1 = perm(b.xyxy);
      vec4 k2 = perm(k1.xyxy + b.zzww);

      vec4 c = k2 + a.zzzz;
      vec4 k3 = perm(c);
      vec4 k4 = perm(c + 1.0);

      vec4 o1 = fract(k3 * (1.0 / 41.0));
      vec4 o2 = fract(k4 * (1.0 / 41.0));

      vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
      vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

      return o4.y * d.y + o4.x * (1.0 - d.y);
    }

    float lines(vec2 uv, float offset) {
      float numberOfLines = 30.0;

      return smoothstep(0.0, 0.5 + offset * 0.5, abs(0.5 * (sin(uv.x * numberOfLines) + offset * 1.0)));
    }

    mat2 rotate2d(float angle) {
      return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    }

    void main()	{
      float n = noise(vPosition + uTime);

      vec2 baseUV = rotate2d(n) * vPosition.xy * 0.1;

      float basePattern = lines(baseUV, 0.1);
      float secondBasePattern = lines(baseUV, 0.1);

      vec3 baseColor = mix(uBaseFirstColor, uBaseSecondColor, basePattern);
      vec3 secondBaseColor = mix(baseColor, uAccentColor, secondBasePattern);

	    gl_FragColor = vec4(vec3(secondBaseColor), 1);
    }
  `,
  vertexShader: `
    uniform float uTime;

    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      vUv = uv;

      vPosition = position;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `
}
