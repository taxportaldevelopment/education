import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import img from "../assets/img-1.png";

function Cube({ faces }) {
  const ref = useRef();
  const textures = useLoader(THREE.TextureLoader, faces);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.6;
  });

  const materials = textures.map((tex, i) => (
    <meshStandardMaterial
      attach={`material-${i}`}
      map={tex}
      metalness={0.3}
      roughness={0.3}
      key={i}
    />
  ));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.8, 1.8, 1.8]} />
      {materials}
    </mesh>
  );
}

export default function ThreeDBoxViewer({
  
  imageFaces = [img, img, img, img, img, img], // Must be array of 6 images
  className = "h-96 w-full",
}) {
  // auto-fix if someone passes less than 6 images
  const fixedFaces = [...imageFaces];
  for (let i = 0; i < 6; i++) {
    if (!fixedFaces[i]) fixedFaces[i] = imageFaces[0];
  }

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 1.2, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Cube faces={fixedFaces} />
        <Environment preset="city" />
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}
