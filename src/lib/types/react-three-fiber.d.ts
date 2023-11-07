import type { Object3DNode } from '@react-three/fiber'
import type { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

declare module '@react-three/fiber' {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>
  }
}
