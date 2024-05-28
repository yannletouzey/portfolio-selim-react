import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei';

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
}

const NotFound = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const header = document.querySelector('.header');
      const footer = document.querySelector('.footer');
      sectionRef.current.style.marginTop = `${header.offsetHeight}px`;
      sectionRef.current.style.height = `${window.innerHeight - header.offsetHeight - footer.offsetHeight}px`;
    }
  }, []);

  return (
    <section className="section" ref={sectionRef}>
      <Canvas className="section__canvas">
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <Model url="/404.gltf" />
      <OrbitControls />
      </Canvas>
    </section>
  );
};
export default NotFound;