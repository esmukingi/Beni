"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

// Manual function to generate random points in a sphere
const generateSpherePoints = (count: number, radius: number): Float32Array => {
  const points = new Float32Array(count * 3); // 3 floats per point (x, y, z)
  for (let i = 0; i < count; i++) {
    // Generate random point in unit sphere using rejection sampling
    let x, y, z;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
    } while (x * x + y * y + z * z > 1); // Ensure point is inside unit sphere

    // Scale by radius and store
    const scale = radius * Math.cbrt(Math.random()); // Distribute points evenly
    points[i * 3] = x * scale;
    points[i * 3 + 1] = y * scale;
    points[i * 3 + 2] = z * scale;
  }
  return points;
};

const StarBackground = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const points = generateSpherePoints(1666, 1.2); // ~5000 floats = 1666 points
    // Log and validate points
    console.log("Generated points:", points);
    for (let i = 0; i < points.length; i++) {
      if (!isFinite(points[i])) {
        console.error(`Invalid value at index ${i}: ${points[i]}`);
        points[i] = 0; // Replace invalid values with 0
      }
    }
    return points;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={new THREE.BufferAttribute(sphere, 3)} // Explicitly set BufferAttribute
        stride={3}
        frustumCulled={false} // Disable frustum culling
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;