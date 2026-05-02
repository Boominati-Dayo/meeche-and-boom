"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.4;
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.position.y = Math.sin(t * 0.6) * 0.3;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z = -t * 0.3;
    if (ring2Ref.current) ring2Ref.current.rotation.x = t * 0.2;
  });

  return (
    <group scale={0.7}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.8, 0]} />
        <meshStandardMaterial color="#c9a227" metalness={0.9} roughness={0.1} emissive="#c9a227" emissiveIntensity={0.3} />
      </mesh>
      
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.025, 16, 80]} />
        <meshStandardMaterial color="#e8c547" emissive="#e8c547" emissiveIntensity={0.6} />
      </mesh>
      
      <mesh ref={ring2Ref} rotation={[Math.PI / 5, 0, 0]}>
        <torusGeometry args={[3, 0.02, 16, 80]} />
        <meshStandardMaterial color="#c9a227" emissive="#c9a227" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

function Stars() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 80;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  
  useFrame((state) => {
    if (pointsRef.current) pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#c9a227" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[8, 8, 8]} intensity={1.2} color="#c9a227" />
      <pointLight position={[-8, -8, -8]} intensity={0.6} color="#e8c547" />
      <Crystal />
      <Stars />
    </>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}