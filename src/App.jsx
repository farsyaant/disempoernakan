import { useMemo, useState } from "react";
import flowers from "./data/flowers";
import FloatingFlower from "./components/FloatingFlower";
import CardModal from "./components/CardModal";
import BackgroundMusic from "./components/BackgroundMusic";
import "./App.css";

// Zona terlarang (dalam %) supaya bunga gak nutupin tulisan
// "ambil bunganya, baca pesannya!" yang ada di gambar lobby-bg kamu.
// Sesuaikan angka ini kalau posisi tulisan di gambar kamu beda.
const FORBIDDEN_ZONE = { top: 0, bottom: 22, left: 22, right: 78 };

function isInsideForbidden(left, top) {
  return (
    top >= FORBIDDEN_ZONE.top &&
    top <= FORBIDDEN_ZONE.bottom &&
    left >= FORBIDDEN_ZONE.left &&
    left <= FORBIDDEN_ZONE.right
  );
}

function randomPosition() {
  let left, top;
  do {
    left = 4 + Math.random() * 90; // 4% - 94%
    top = 4 + Math.random() * 88; // 4% - 92%
  } while (isInsideForbidden(left, top));
  return { left, top };
}

export default function App() {
  const [enteredLobby, setEnteredLobby] = useState(false);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [openedIds, setOpenedIds] = useState(new Set());

  const positions = useMemo(() => {
    return flowers.map((f) => ({ id: f.id, ...randomPosition() }));
  }, []);

  const handleFlowerClick = (flower) => {
    setSelectedFlower(flower);
  };

  const handleClose = () => {
    if (selectedFlower) {
      setOpenedIds((prev) => new Set(prev).add(selectedFlower.id));
    }
    setSelectedFlower(null);
  };

  if (!enteredLobby) {
    return (
      <div className="landing">
        <div className="landing-box">
          <h1>hi, poerby 🌸</h1>
          <button className="enter-btn" onClick={() => setEnteredLobby(true)}>
            masuk taman
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lobby">
      <BackgroundMusic shouldPlay={enteredLobby} />
      <div className="flower-field">
        {flowers.map((flower) => {
          const pos = positions.find((p) => p.id === flower.id);
          return (
            <FloatingFlower
              key={flower.id}
              flower={flower}
              initialPos={pos}
              opened={openedIds.has(flower.id)}
              onClick={handleFlowerClick}
            />
          );
        })}
      </div>

      <CardModal flower={selectedFlower} onClose={handleClose} />
    </div>
  );
}