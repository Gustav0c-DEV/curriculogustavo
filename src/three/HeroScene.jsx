import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function HeroScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let renderer
    let frameId
    let cleanupListeners = () => {}

    try {
      const width = canvas.clientWidth || 1
      const height = canvas.clientHeight || 1

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
      camera.position.z = 6

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      if (!renderer.getContext()) throw new Error('WebGL indisponível')

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height)

      const geometry = new THREE.IcosahedronGeometry(2.2, 1)
      const material = new THREE.MeshBasicMaterial({
        color: 0x57BBF6,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      })
      const wireframe = new THREE.Mesh(geometry, material)
      scene.add(wireframe)

      const particleCount = 220
      const positions = new Float32Array(particleCount * 3)
      for (let i = 0; i < positions.length; i += 1) {
        positions[i] = (Math.random() - 0.5) * 14
      }
      const particlesGeometry = new THREE.BufferGeometry()
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.02,
        transparent: true,
        opacity: 0.5,
      })
      const particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      let pointerX = 0
      let pointerY = 0
      const handlePointerMove = (event) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 2
        pointerY = (event.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('pointermove', handlePointerMove)

      const handleResize = () => {
        const { clientWidth, clientHeight } = canvas
        if (!clientWidth || !clientHeight) return
        camera.aspect = clientWidth / clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(clientWidth, clientHeight)
      }
      window.addEventListener('resize', handleResize)

      const renderLoop = () => {
        wireframe.rotation.y += 0.0018
        wireframe.rotation.x += 0.0009
        particles.rotation.y += 0.0004
        camera.position.x += (pointerX * 0.6 - camera.position.x) * 0.03
        camera.position.y += (-pointerY * 0.4 - camera.position.y) * 0.03
        camera.lookAt(scene.position)
        renderer.render(scene, camera)
        frameId = requestAnimationFrame(renderLoop)
      }

      if (reduceMotion) {
        renderer.render(scene, camera)
      } else {
        renderLoop()
      }

      cleanupListeners = () => {
        window.removeEventListener('pointermove', handlePointerMove)
        window.removeEventListener('resize', handleResize)
        geometry.dispose()
        material.dispose()
        particlesGeometry.dispose()
        particlesMaterial.dispose()
      }
    } catch (error) {
      console.warn('Cena 3D desativada:', error)
    }

    return () => {
      cancelAnimationFrame(frameId)
      cleanupListeners()
      renderer?.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__scene" aria-hidden="true" />
}

export default HeroScene
