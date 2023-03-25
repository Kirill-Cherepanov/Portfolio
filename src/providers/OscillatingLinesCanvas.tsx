import { useContext, useRef, useEffect } from 'react';

import { useResizeObserver } from '@/hooks';
import { OscillatingLinesContext } from '@/providers';

const VARS = {
  oscillationWidth: 100,
  gap: 10,
  viscosity: 50,
  mouseDist: 40,
  damping: 0.035,
  showIndicators: false,
  lineColor: '#040404',
  lineWidth: 2,
};

export function OscillatingLineCanvas() {
  const pageSize = useResizeObserver();
  const [lines] = useContext(OscillatingLinesContext);
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const rafID = useRef<number>();

  useEffect(() => {
    if (rafID.current) cancelAnimationFrame(rafID.current);

    const canvas = canvasRef.current;
    const points: Point[][] = [];
    const context = canvas.getContext('2d')!;

    // Resize canvas, otherwise it doesn't work
    canvas.width = pageSize.w;
    canvas.height = pageSize.h;

    // Add points
    for (let j = 0; j < lines.length; j++) {
      const totalPoints = Math.floor(lines[j].length / VARS.gap) + 1;

      points.push([]);
      for (let i = 0; i <= totalPoints - 1; i++) {
        points[j].push(new Point(lines[j].x + i * VARS.gap, lines[j].y, VARS.gap));
      }
      points[j].push(new Point(lines[j].x + lines[j].length, lines[j].y, VARS.gap));
    }

    // Mouse handler
    const mousePos = { x: 0, y: 0 };
    const mousePosHandler = (e: MouseEvent) => {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    };
    document.addEventListener('mousemove', mousePosHandler);

    renderer();
    function renderer() {
      // rAF
      rafID.current = requestAnimationFrame(renderer);

      // Clear scene
      context.clearRect(0, 0, canvas.width, canvas.height);

      // For each line
      for (let j = 0; j < lines.length; j++) {
        const totalPoints = Math.floor(lines[j].length / VARS.gap) + 1;

        // Move points
        for (let i = 0; i < points[j].length; i++) {
          points[j][i].move(mousePos.x, mousePos.y);
        }

        // Draw shape
        context.strokeStyle = VARS.lineColor;
        context.lineWidth = lines[j].width;

        context.beginPath();
        context.moveTo(points[j][0].x, points[j][0].y);

        for (let i = 0; i <= totalPoints - 1; i++) {
          const p = points[j][i];
          const nextP = points[j][i + 1];

          if (nextP) {
            p.controlX = (p.x + nextP.x) / 2 - 0.0001; // - 0.0001 hack to fix a 1px offset bug on Chrome
            p.controlY = (p.y + nextP.y) / 2;
          } else {
            p.controlX = p.x + VARS.gap / 2 - 0.0001; // - 0.0001 hack to fix a 1px offset bug on Chrome
            p.controlY = p.initialY;
          }

          context.bezierCurveTo(p.x, p.y, p.controlX, p.controlY, p.controlX, p.controlY);
        }

        context.stroke();
      }
    }

    return () => {
      if (rafID.current) cancelAnimationFrame(rafID.current);
      document.removeEventListener('mousemove', mousePosHandler);
    };
  }, [pageSize.w, pageSize.h, lines]);

  // Don't set width and height here. It's done dynamically in useEffect
  return (
    <canvas
      className="absolute pointer-events-none transition-all duration-300 dark:invert"
      ref={canvasRef}
    />
  );
}

class Point {
  x: number;
  controlX: number;
  y: number;
  initialY: number;
  finalY: number;
  controlY: number;
  velocityY: number;
  static gap: number;

  constructor(x: number, y: number, gap: number) {
    this.x = x;
    this.controlX = 0;
    this.y = y;
    this.initialY = y;
    this.finalY = y;
    this.controlY = 0;
    this.velocityY = 0;
    Point.gap = gap;
  }

  move(mouseX: number, mouseY: number) {
    const dx = Math.abs(this.x - mouseX);
    const dy = Math.abs(this.initialY - mouseY);

    const direction = -Math.sign(mouseY - this.initialY);

    let moveDy =
      (VARS.mouseDist - Math.abs(VARS.mouseDist - dy)) * (1 - (dx / VARS.oscillationWidth) ** 2);
    moveDy = moveDy < 0 ? 0 : moveDy * direction;

    if (dx < VARS.oscillationWidth) {
      this.finalY = this.initialY + moveDy;
    } else {
      this.finalY = this.initialY;
    }

    this.velocityY += (this.finalY - this.y) / VARS.viscosity;
    this.velocityY *= 1 - VARS.damping;
    this.y += this.velocityY;
  }
}
