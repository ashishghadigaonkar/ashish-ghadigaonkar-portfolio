"use client";

import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Build particle geometry once
  const { positions, geometry, material } = useMemo(() => {
    const count = 2000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.08,
      color: "#8b5cf6",
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    });
    return { positions: pos, geometry: geo, material: mat };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 20;

    // Particles
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Timer instead of deprecated Clock
    let startTime = performance.now();
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) / 1000;
      points.rotation.y = elapsed * 0.02;
      points.rotation.x = elapsed * 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      {/* Three.js Particle Canvas — no @react-three/fiber to avoid THREE.Clock warning */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />

      {/* CSS Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"
          style={{ animation: "pulse 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"
          style={{ animation: "pulse 10s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute top-[30%] right-[-5%] w-[30%] h-[30%] bg-cyan-600/10 blur-[120px] rounded-full"
          style={{ animation: "pulse 12s ease-in-out infinite 4s" }}
        />
      </div>
    </div>
  );
}
