'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

interface Model3DViewerProps {
  modelPath: string;
  scale?: number;
  rotation?: [number, number, number];
}

function Model({ modelPath, scale = 1, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(modelPath)
  return <primitive object={scene} scale={scale} rotation={rotation} />
}

export default function Model3DViewer({ modelPath, scale, rotation }: Model3DViewerProps) {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden bg-black/50">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} scale={scale} rotation={rotation} />
        </Suspense>
        <OrbitControls enableZoom={true} autoRotate={true} />
      </Canvas>
    </div>
  )
} 