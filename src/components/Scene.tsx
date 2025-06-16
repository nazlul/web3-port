'use client'

import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three-stdlib';
import { DRACOLoader } from 'three-stdlib';

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 20, 120)
    camera.lookAt(new THREE.Vector3(-50, 10, 0))

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(10, 20, 10)
    scene.add(ambientLight, directionalLight)

    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')
    loader.setDRACOLoader(dracoLoader)

    let model: THREE.Group
    let laptopTopPivot: THREE.Object3D | null = null

    loader.load('/laptop.glb', (gltf: { scene: THREE.Group<THREE.Object3DEventMap> }) => {
      model = gltf.scene

      // Center the model
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)

      // Scale
      const size = box.getSize(new THREE.Vector3())
      const scale = 100 / Math.max(size.x, size.y, size.z)
      model.scale.setScalar(scale)

      model.rotation.y = Math.PI / 3

      // Load screen texture
      const textureLoader = new THREE.TextureLoader()
      const screenTexture = textureLoader.load('/screen.png')
      screenTexture.wrapS = screenTexture.wrapT = THREE.RepeatWrapping
      screenTexture.flipY = false
      screenTexture.repeat.set(-1.95, 3)
      screenTexture.offset.set(-0.11, 0.26)

      model.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name === 'LaptopLid_LaptopScreen_0') {
          child.material = new THREE.MeshStandardMaterial({ map: screenTexture, side: THREE.DoubleSide })
        }
      })

      const lid = model.getObjectByName('LaptopLid')
      if (lid) {
        const pivot = new THREE.Object3D()
        pivot.position.set(0, 14.5, 0)
        lid.position.sub(pivot.position)
        pivot.add(lid)
        model.add(pivot)

        // ✅ Semi-closed lid (like a real laptop at rest)
        pivot.rotation.x = Math.PI / 2.2 // ~80 degrees open

        laptopTopPivot = pivot
      }

      scene.add(model)
    })

    const initialZ = 120
    const targetZoomZ = 40
    const scrollThreshold = 300
    const initialLidAngle = Math.PI / 2.2 // ~80°
    const finalLidAngle = 0 // fully open

    const animate = () => {
      requestAnimationFrame(animate)

      const scrollY = Math.min(window.scrollY, scrollThreshold)
      const t = scrollY / scrollThreshold

      camera.position.z = initialZ - (initialZ - targetZoomZ) * t

      if (laptopTopPivot) {
        laptopTopPivot.rotation.x = initialLidAngle * (1 - t) + finalLidAngle * t
      }

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  )
}
