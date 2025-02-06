import React, { useEffect, useRef } from 'react';
import '../assets/style/hero.css'
import bg from '../assets/images/bg.mp4'
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(37, 99, 235, 0.5)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.5)');

      ctx.fillStyle = gradient;
      ctx.beginPath();

      for (let i = 0; i < Math.PI * 2; i += 0.1) {
        const x = canvas.width / 2 + Math.cos(i) * (100 + Math.sin(time + i) * 20);
        const y = canvas.height / 2 + Math.sin(i) * (100 + Math.sin(time + i) * 20);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="bg-customDark relative min-h-screen flex items-center justify-center overflow-hidden">
     <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-black"
      >
        <source src={bg} type="video/mp4" />
      </video>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-100">
          From Great Ideas
          <br />
          to a Great Future
        </h1>
      </div>
    </section>
  );
}