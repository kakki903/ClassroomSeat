import { useEffect, useRef } from "react";

interface Traits {
  focus: number;
  observation: number;
  immersion: number;
  sociability: number;
  leadership: number;
  freedom: number;
}

interface RadarChartProps {
  traits: Traits;
}

export default function RadarChart({ traits }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set fixed canvas size
    canvas.width = 300;
    canvas.height = 300;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 110;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const traitLabels = ['집중력', '관찰력', '몰입도', '사교성', '리더십', '자유로움'];
    const traitKeys: (keyof Traits)[] = ['focus', 'observation', 'immersion', 'sociability', 'leadership', 'freedom'];
    const angles = traitKeys.map((_, i) => (i * 2 * Math.PI) / 6 - Math.PI / 2);

    // Draw background grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      const gridRadius = (radius * i) / 5;
      angles.forEach((angle, index) => {
        const x = centerX + gridRadius * Math.cos(angle);
        const y = centerY + gridRadius * Math.sin(angle);
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.stroke();
    }

    // Draw axis lines
    angles.forEach(angle => {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
      ctx.stroke();
    });

    // Draw data polygon
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 3;
    ctx.beginPath();

    angles.forEach((angle, index) => {
      const value = traits[traitKeys[index]] / 100;
      const x = centerX + radius * value * Math.cos(angle);
      const y = centerY + radius * value * Math.sin(angle);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw data points
    ctx.fillStyle = '#ffffff';
    angles.forEach((angle, index) => {
      const value = traits[traitKeys[index]] / 100;
      const x = centerX + radius * value * Math.cos(angle);
      const y = centerY + radius * value * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Draw labels
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px Noto Sans KR';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    angles.forEach((angle, index) => {
      const labelX = centerX + (radius + 25) * Math.cos(angle);
      const labelY = centerY + (radius + 25) * Math.sin(angle);
      ctx.fillText(traitLabels[index], labelX, labelY);
    });
  }, [traits]);

  return (
    <div className="flex justify-center items-center w-full">
      <canvas
        ref={canvasRef}
        className="w-full h-auto max-w-[280px] max-h-[280px]"
        style={{ aspectRatio: '1/1' }}
      />
    </div>
  );
}
