import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';
import { TextureLoader } from 'three';

interface BallProps {
  map: string;
  imgUrl: string;
}
const Ball = (props: BallProps) => {
  const [map] = useLoader(TextureLoader, [props.map]);
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // @ts-expect-error needed for shading
          flatShading={true}
        />
        <meshPhongMaterial map={map} />
      </mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon, map }: { map: string; icon: string }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} map={map} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
