import { useRef, useEffect, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import img from "../assets/home/ad-skip.png";

/* ===================== CUBE ===================== */
function QuaternionCube({ textures, targetQuaternion }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current || !targetQuaternion) return;

    // Smooth rotation
    ref.current.quaternion.slerp(targetQuaternion, 0.1);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.8, 1.8, 1.8]} />
      {textures.map((tex, i) => (
        <meshStandardMaterial
          key={i}
          attach={`material-${i}`}
          map={tex}
          metalness={0.3}
          roughness={0.4}
        />
      ))}
    </mesh>
  );
}

/* ===================== VIEWER ===================== */
export default function CubeViewer({
  faces = [img, img, img, img, img, img],
  className = "h-96 w-full",
}) {
  const textures = useLoader(THREE.TextureLoader, faces);

  const rotations = useMemo(
    () => [
      new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0)), // Front
      new THREE.Quaternion().setFromEuler(new THREE.Euler(0, -Math.PI / 2, 0)), // Right
      new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI, 0)), // Back
      new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)), // Left
      new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)), // Top
      new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)), // Bottom
    ],
    []
  );

  const [currentFace, setCurrentFace] = useState(0);
  const [targetQuaternion, setTargetQuaternion] = useState(
    rotations[0].clone()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => {
        const next = (prev + 1) % rotations.length;
        setTargetQuaternion(rotations[next].clone());
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [rotations]);

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 🔥 REQUIRED */}
        <Suspense fallback={null}>
          <QuaternionCube
            textures={textures}
            targetQuaternion={targetQuaternion}
          />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls enablePan={false} enableZoom />
      </Canvas>
    </div>
  );
}
