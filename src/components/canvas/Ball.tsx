import { Canvas, useLoader } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';

import { TextureLoader } from 'three';

interface BallProps {
  map: string;
  imgUrl: string;
}

interface BallCanvasProps {
  map: string;
  icon: string;
}
const Ball = (props: BallProps) => {
  const [map] = useLoader(TextureLoader, [props.map]);
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
        <meshPhongMaterial map={map} />
      </mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon, map }: BallCanvasProps) => {
  return (
    <Canvas dpr={[1, 2]}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} map={map} />

      <Preload all />
    </Canvas>
  );
};
