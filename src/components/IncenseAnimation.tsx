
import React, { useEffect, useRef } from 'react';

const IncenseAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 400;
    
    // Smoke particles array
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedY: number;
      speedX: number;
      life: number;
      opacity: number;
    }[] = [];
    
    // Add particles
    const createParticles = () => {
      const baseX = canvas.width / 2;
      const baseY = canvas.height - 50;
      
      // Add new particles randomly
      if (Math.random() < 0.3) {
        const radius = Math.random() * 3 + 2;
        const life = Math.random() * 100 + 100;
        
        particles.push({
          x: baseX + (Math.random() * 10 - 5),
          y: baseY,
          radius,
          color: `rgba(230, 215, 185, ${Math.random() * 0.5 + 0.5})`,
          speedY: -Math.random() * 1 - 0.5,
          speedX: Math.random() * 0.4 - 0.2,
          life,
          opacity: 0.8
        });
      }
    };
    
    // Update particles
    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Add some waving motion
        p.x += Math.sin(p.y * 0.03) * 0.2;
        
        // Decrease life and opacity
        p.life--;
        p.opacity = p.life / 100;
        
        // Remove dead particles
        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw incense stick
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height - 50);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Draw smoke particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`);
        ctx.fill();
      }
    };
    
    // Animation loop
    const animate = () => {
      createParticles();
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      particles.length = 0;
    };
  }, []);
  
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="max-w-full"
      />
    </div>
  );
};

export default IncenseAnimation;
