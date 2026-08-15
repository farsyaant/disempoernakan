import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic({ shouldPlay }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {
        // browser kadang block autoplay sebelum ada interaksi user
      });
    }
  }, [shouldPlay]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(audioRef.current.muted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/cinta.mp3" loop />
      <button className="music-toggle" onClick={toggleMute}>
        {muted ? "🔇" : "🎵"}
      </button>
    </>
  );
}