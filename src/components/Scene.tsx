'use client'

import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three-stdlib'

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 20, 120)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(10, 20, 10)
    scene.add(ambientLight, directionalLight)

    const loader = new GLTFLoader()

    let lidPart1: THREE.Object3D | null = null
    let lidPart2: THREE.Object3D | null = null
    let model: THREE.Group | null = null

    loader.load('/laptop.glb', (gltf) => {
      model = gltf.scene

      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)

      const size = box.getSize(new THREE.Vector3())
      const scale = 100 / Math.max(size.x, size.y, size.z)
      model.scale.setScalar(scale)

      model.rotation.y = Math.PI / 3

      const screenTexture = new THREE.TextureLoader().load('/screen.png')
      screenTexture.wrapS = screenTexture.wrapT = THREE.RepeatWrapping
      screenTexture.flipY = false
      screenTexture.repeat.set(-1.95, 3)
      screenTexture.offset.set(-0.11, 0.26)

      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.name === 'LaptopLid_LaptopScreen_0') {
            child.material = new THREE.MeshStandardMaterial({
              map: screenTexture,
              side: THREE.DoubleSide,
            })
            lidPart2 = child
          }
          if (child.name === 'LaptopLid_LaptopLid_0') {
            lidPart1 = child
          }
        }
      })

      scene.add(model)
    })

    const initialZ = 120
    const targetZ = 40
    const scrollMax = 300
    const startAngle = -Math.PI / 2.5 
    const endAngle = 0

    function animate() {
      requestAnimationFrame(animate)

      const scrollY = Math.min(window.scrollY, scrollMax)
      const t = scrollY / scrollMax

      camera.position.z = initialZ - (initialZ - targetZ) * t

      if (model) {
        camera.lookAt(new THREE.Vector3(0, 10, 0))
      }

      const lidRotation = startAngle * (1 - t) + endAngle * t

      if (lidPart1) lidPart1.rotation.x = lidRotation
      if (lidPart2) lidPart2.rotation.x = lidRotation

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
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
        overflow: 'hidden',
        zIndex: -1, 
      }}
    />
  )
}
