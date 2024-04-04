import EarthMap from '../../assets/planets/earth/00_earthmap1k.jpg';
import SpecMap from '../../assets/planets/earth/02_earthspec1k.jpg';
import BumpMap from '../../assets/planets/earth/01_earthbump1k.jpg';
import LightMap from '../../assets/planets/earth/03_earthlights1k.jpg';
import CloudMap from '../../assets/planets/earth/04_earthcloudmap.jpg';
import CloudTransMap from '../../assets/planets/earth/05_earthcloudmaptrans.jpg';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { MutableRefObject, useRef } from 'react';
import { getFresnelMat } from '../../utils/earth';

export function Earth() {
  const [earthMap, specMap, bumpMap, lightMap, cloudMap, cloudTransMap] =
    useLoader(TextureLoader, [
      EarthMap,
      SpecMap,
      BumpMap,
      LightMap,
      CloudMap,
      CloudTransMap,
    ]);
  const earthRef: MutableRefObject<THREE.Mesh | null> = useRef(null);
  const cloudsRef: MutableRefObject<THREE.Mesh | null> = useRef(null);
  const lightRef: MutableRefObject<THREE.Mesh | null> = useRef(null);
  const fresnelRef: MutableRefObject<THREE.Mesh | null> = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef?.current) {
      earthRef.current.rotation.y = elapsedTime / 6;
    }

    if (cloudsRef?.current) {
      cloudsRef.current.rotation.y = elapsedTime / 6;
    }

    if (lightRef?.current) {
      lightRef.current.rotation.y = elapsedTime / 6;
    }

    if (fresnelRef?.current) {
      fresnelRef.current.rotation.y = elapsedTime / 6;
    }
  });

  return (
    <>
      <directionalLight color='#fff' position={[-2, 0.5, 1.5]} />
      <Stars
        radius={250}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
      />

      <mesh ref={earthRef} position={[0, 0, 2.5]}>
        <icosahedronGeometry args={[1, 12]} />
        <meshPhongMaterial
          map={earthMap}
          specularMap={specMap}
          bumpMap={bumpMap}
          bumpScale={0.01}
        />
      </mesh>
      <mesh ref={lightRef} position={[0, 0, 2.5]}>
        <icosahedronGeometry args={[1, 12]} />
        <meshBasicMaterial map={lightMap} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh ref={cloudsRef} position={[0, 0, 2.5]} scale={1.003}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial
          map={cloudMap}
          blending={THREE.AdditiveBlending}
          transparent
          opacity={0.4}
          alphaMap={cloudTransMap}
        />
      </mesh>
      <mesh
        ref={fresnelRef}
        position={[0, 0, 2.5]}
        scale={1.01}
        material={getFresnelMat()}
      >
        <icosahedronGeometry args={[1, 12]} />
      </mesh>

      <OrbitControls
        enableZoom
        enablePan
        enableRotate
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
    </>
  );
}
