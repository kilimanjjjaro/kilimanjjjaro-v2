varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// Vertex shader is used to calculate the position of the vertices to create a shape