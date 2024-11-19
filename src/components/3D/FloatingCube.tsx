import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, MeshWobbleMaterial } from '@react-three/drei';

function AnimatedCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.3;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]} scale={1.5}>
      <MeshWobbleMaterial
        color="#EC4899"
        factor={0.4}
        speed={2}
        roughness={0.3}
        metalness={0.8}
      />
    </Box>
  );
}

export function FloatingCube() {
  return (
    <div className="w-24 h-24">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedCube />
      </Canvas>
    </div>
  );
}