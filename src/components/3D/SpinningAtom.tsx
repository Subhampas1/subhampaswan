import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Trail } from '@react-three/drei';
import * as THREE from 'three';

function Electron({ radius = 2.5, speed = 1, rotationAxis = [1, 1, 0] }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed;
      const x = Math.cos(t) * radius;
      const y = Math.sin(t) * radius;
      const z = Math.sin(t) * radius;
      
      ref.current.position.set(
        x * rotationAxis[0],
        y * rotationAxis[1],
        z * rotationAxis[2]
      );
    }
  });

  return (
    <Trail
      width={2}
      length={5}
      color={new THREE.Color(0x8b5cf6)}
      attenuation={(t) => t * t}
    >
      <Sphere ref={ref} args={[0.1, 16, 16]}>
        <meshBasicMaterial color="#8b5cf6" />
      </Sphere>
    </Trail>
  );
}

function Nucleus() {
  return (
    <Sphere args={[0.5, 32, 32]}>
      <meshStandardMaterial
        color="#ec4899"
        roughness={0.4}
        metalness={0.8}
        emissive="#ec4899"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

function Atom() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <Nucleus />
      <Electron radius={2.5} speed={1.5} rotationAxis={[1, 1, 0]} />
      <Electron radius={2.5} speed={2} rotationAxis={[0, 1, 1]} />
      <Electron radius={2.5} speed={1} rotationAxis={[1, 0, 1]} />
    </group>
  );
}

export function SpinningAtom() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Atom />
    </Canvas>
  );
}