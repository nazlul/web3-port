import * as THREE from 'three';

declare module 'three' {
  interface WebGLRenderer {
    outputEncoding: number;
  }

  const sRGBEncoding: number;
}
