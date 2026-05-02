"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useInView } from "framer-motion";
import * as THREE from "three";
import { Html } from "@react-three/drei";

function FloatingCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#c9a227" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#c9a227"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.03, 16, 100]} />
        <meshStandardMaterial color="#e8c547" emissive="#e8c547" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = new Float32Array(150);
  for (let i = 0; i < 50; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#c9a227" transparent opacity={0.6} />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#c9a227" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#e8c547" />
      <FloatingCrystal />
      <Particles />
    </>
  );
}

export function Hero3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="absolute inset-0 z-0"
    >
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Scene />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}