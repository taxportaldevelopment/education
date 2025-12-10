import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import img from "../assets/img-1.png";

function QuaternionCube({ textures, targetQuaternion }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // Smoothly slerp to target quaternion
    ref.current.quaternion.slerp(targetQuaternion, 0.1);
  });

  const materials = textures.map((tex, i) => (
    <meshStandardMaterial
      attach={`material-${i}`}
      map={tex}
      key={i}
      metalness={0.3}
      roughness={0.3}
    />
  ));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.8, 1.8, 1.8]} />
      {materials}
    </mesh>
  );
}

export default function CubeViewer({ faces = [img, img, img, img, img, img], className = "h-80 w-full" }) {
  const textures = useLoader(THREE.TextureLoader, faces);

  // Define quaternions for each face
  const rotations = [
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0)),                  // Front
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -Math.PI / 2, 0)),       // Right
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI, 0)),            // Back
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)),        // Left
    new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)),       // Top
    new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)),        // Bottom
  ];

  const [currentFace, setCurrentFace] = useState(0);
  const [targetQuaternion, setTargetQuaternion] = useState(rotations[0]);

  // Change face every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentFace + 1) % rotations.length;
      setCurrentFace(next);
      setTargetQuaternion(rotations[next]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentFace, rotations]);

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 4]} intensity={1} />
        <QuaternionCube textures={textures} targetQuaternion={targetQuaternion} />
        <Environment preset="city" />
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}
