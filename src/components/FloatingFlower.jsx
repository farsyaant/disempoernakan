import { useMemo } from "react";

// Bikin gerakan "float" acak tapi konsisten per bunga (pakai seed dari id)
function seedFromId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 1000;
  return h;
}

export default function FloatingFlower({ flower, opened, onClick, initialPos }) {
  const seed = useMemo(() => seedFromId(flower.id), [flower.id]);

  // Durasi & delay animasi float sedikit berbeda tiap bunga -> kesannya "bebas"
  const duration = 6 + (seed % 5); // 6-10s
  const delay = (seed % 10) / 2; // 0-4.5s
  const size = 110 + (seed % 40); // base 110-150px

  // atur manual per bunga di sini, 1 = normal, >1 = lebih gede, <1 = lebih kecil
  const SIZE_MULTIPLIER = {
    poerby1: 1.2,
    poerby2: 1.2,
    poerby3: 1.2,
    poerby4: 1.1,
    poerby5: 1.4,
    poerby6: 1.3,
    poerby7: 1.1,
    poerby8: 1.1,
    poerby9: 1.1,
    poerby10: 1.1,
    poerby11: 1.2,
    poerby12: 1.1,
    poerby13: 1.2,
    poerby14: 1.0,
    poerby15: 1.0,
    poerby16: 1.2,
    adamaurel: 1.1,
    teknis: 1.4,
  };

  const finalSize = size * (SIZE_MULTIPLIER[flower.id] ?? 1);
  const driftX = 40 + (seed % 30);

  return (
    <button
      className={`flower-wrapper ${opened ? "flower-opened" : ""}`}
      style={{
        left: `${initialPos.left}%`,
        top: `${initialPos.top}%`,
        width: finalSize,
        height: finalSize,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        "--drift-x": `${driftX}px`,
      }}
      onClick={() => onClick(flower)}
      aria-label={`Buka bunga ${flower.id}`}
    >
      <img
        src={flower.flowerImg}
        alt={flower.id}
        className="flower-img"
        draggable={false}
      />
      {opened && <div className="flower-glow" />}
    </button>
  );
}