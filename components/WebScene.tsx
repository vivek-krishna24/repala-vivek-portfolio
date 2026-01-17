"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function WebNetwork({ scroll }: { scroll: number }) {
  const ref = useRef<THREE.Group>(null);

  const NODE_COUNT = 120;
  const AREA = 18;
  const MAX_DIST = 3.2;

  const { positions, vectors } = useMemo(() => {
    const vecs: THREE.Vector3[] = [];
    const pos: number[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * AREA,
        (Math.random() - 0.5) * AREA,
        (Math.random() - 0.5) * AREA
      );
      vecs.push(v);
      pos.push(v.x, v.y, v.z);
    }

    return {
      vectors: vecs,
      positions: new Float32Array(pos),
    };
  }, []);

  const lines = useMemo(() => {
    const segs: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        if (vectors[i].distanceTo(vectors[j]) < MAX_DIST) {
          segs.push([vectors[i], vectors[j]]);
        }
      }
    }
    return segs;
  }, [vectors]);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();

    // ✨ Scroll-reactive motion
    ref.current.rotation.y = t * 0.03 + scroll * 2.0;
    ref.current.rotation.x = t * 0.02 + scroll * 1.2;
    ref.current.position.z = scroll * -4; // push web slightly back
  });

  return (
    <group ref={ref}>
      {/* Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.05}
          transparent
          opacity={0.9}
        />
      </points>

      {/* Web lines */}
      {lines.map((pair, i) => (
        <Line
          key={i}
          points={pair}
          color="white"
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
}

export default function WebScene() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? doc.scrollTop / max : 0;
      setScroll(progress);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
        <ambientLight intensity={0.6} />
        <WebNetwork scroll={scroll} />
      </Canvas>
    </div>
  );
}
