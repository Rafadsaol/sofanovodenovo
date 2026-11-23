"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useState, type CSSProperties } from "react";

type ComparisonProps = {
  before: string;
  after: string;
  label: string;
  width: number;
  height: number;
};

export function BeforeAfter({ before, after, label, width, height }: ComparisonProps) {
  const [position, setPosition] = useState(50);

  return (
    <figure className="comparison">
      <div className="comparison-frame" style={{
        "--position": `${position}%`,
        aspectRatio: `${width} / ${height}`,
      } as CSSProperties}>
        <Image src={after} alt={`${label} após a higienização`} fill sizes="(min-width: 48rem) 45vw, 92vw" />
        <Image src={before} alt={`${label} antes da higienização`} className="comparison-before" fill sizes="(min-width: 48rem) 45vw, 92vw" />
        <span className="comparison-label comparison-label-before" aria-hidden="true">Antes</span>
        <span className="comparison-label comparison-label-after" aria-hidden="true">Depois</span>
        <div className="comparison-handle" aria-hidden="true"><MoveHorizontal size={20} /></div>
        <input
          type="range"
          className="comparison-input"
          aria-label={`Comparar antes e depois: ${label}`}
          aria-valuetext={`${position}% da imagem antes da higienização`}
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(event.currentTarget.valueAsNumber)}
        />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
