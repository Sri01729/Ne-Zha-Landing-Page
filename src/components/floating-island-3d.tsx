"use client"

import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls, Environment, Float, PresentationControls, useProgress, Html } from '@react-three/drei'
import * as THREE from 'three'


function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full mx-auto mb-4 animate-spin" />
        <div className="text-muted-foreground text-sm">
          Loading 3D Model... {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  )
}

function NezhaModelInner() {
  const gltf = useLoader(GLTFLoader, '/Nezha3dmodel.glb')
  const meshRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }
  }, [gltf])

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      // Subtle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
    }
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={meshRef} scale={[8, 8, 8]} position={[0, -3, 0]} rotation={[0, 0, 0]}>
        <primitive object={gltf.scene} />
      </group>
    </Float>
  )
}

function NezhaModel() {
  return (
    <Suspense fallback={<Loader />}>
      <NezhaModelInner />
    </Suspense>
  )
}

export function NezhaModel3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 30 }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />

          {/* Environment */}
          <Environment preset="sunset" />

          {/* 3D Model */}
          <NezhaModel />

          {/* Controls */}
          <PresentationControls
            global
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            speed={1.5}
          >
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
            />
          </PresentationControls>
      </Canvas>
    </div>
  )
}
