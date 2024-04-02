// import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import map from '../../assets/universe-bg.jpg';
import nucleus from '../../assets/nuclueus.jpg';
import star from '../../assets/star0.png';
import star1 from '../../assets/star1.png';
import star2 from '../../assets/star2.png';
import texture from '../../assets/texture.png';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import { MutableRefObject, useEffect, useRef } from 'react';

export function Universe() {
  const [universeMap, nucleusMap, starMap, star1Map, star2Map, textureMap] =
    useLoader(TextureLoader, [map, nucleus, star, star1, star2, texture]);
  const cameraRef: MutableRefObject<THREE.PerspectiveCamera> = useRef(
    new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    )
  );

  const sceneRef: MutableRefObject<THREE.Scene | null> = useRef(null);

  useEffect(() => {
    nucleusMap.anisotropy = 16;
    universeMap.anisotropy = 16;
  }, []);

  //   const [starMap] = useLoader(THREE.TextureLoader, [star]);

  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    size: 5,
    color: '#ffffff',
    transparent: true,
    opacity: 0.8,
    map: starMap,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const stars = new THREE.Points();

  // eslint-disable-next-line
  function randomPointSphere(radius: number): any {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const dx = 0 + radius * Math.sin(phi) * Math.cos(theta);
    const dy = 0 + radius * Math.sin(phi) * Math.sin(theta);
    const dz = 0 + radius * Math.cos(phi);
    return new THREE.Vector3(dx, dy, dz);
  }

  useEffect(() => {
    const particleStar = randomPointSphere(150);

    particleStar.velocity = THREE.MathUtils.randInt(50, 200);

    particleStar.startX = particleStar.x;
    particleStar.startY = particleStar.y;
    particleStar.startZ = particleStar.z;

    if (starsGeometry.attributes.position) {
      starsGeometry.attributes.position?.setXYZ(
        1,
        particleStar.x,
        particleStar.y,
        particleStar.z
      );
      starsGeometry.attributes.position.needsUpdate = true;

      // starsGeometry.vertices.push(particleStar);

      // starsMaterial.depthWrite = false;
      stars.geometry = starsGeometry;
      stars.material = starsMaterial;

      // if (sceneRef.current) sceneRef.current.add(stars);
    }
  }, [starsGeometry, stars, starsMaterial]);

  return (
    <div className='universe'>
      <Canvas>
        <scene ref={sceneRef}>
          <perspectiveCamera
            args={[55, window.innerWidth / window.innerHeight, 0.01, 1000]}
            position={[0, 0, 230]}
            ref={cameraRef}
          />
          <directionalLight
            color='#fff'
            intensity={2}
            position={[0, 50, -20]}
          />
          <ambientLight color='#fff' intensity={1} position={[0, 20, 20]} />

          {/* <Stars
            radius={250}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade
          /> */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={4}
            maxDistance={350}
            minDistance={150}
            enablePan={false}
            camera={cameraRef.current}
          />
          <mesh>
            <icosahedronGeometry args={[30, 10]} />
            <meshPhongMaterial map={nucleusMap} />
          </mesh>
          <mesh>
            <sphereGeometry args={[150, 40, 40]} />
            <meshBasicMaterial side={THREE.BackSide} map={universeMap} />
          </mesh>

          {/* <meshBasicMaterial map={universeMap} /> */}
        </scene>
      </Canvas>
    </div>
  );
}
