export default function CardModal({ flower, onClose }) {
  if (!flower) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="card-frame" onClick={(e) => e.stopPropagation()}>
        <button className="card-close" onClick={onClose} aria-label="Tutup">
          ×
        </button>
        <img
          src={flower.photoImg}
          alt={flower.id}
          className="card-photo"
        />
      </div>
    </div>
  );
}