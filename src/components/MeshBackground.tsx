export default function MeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Radial gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,153,255,0.15) 0%, transparent 70%)',
      }} />
      {/* Mesh SVG */}
      <svg
        className="absolute inset-0 w-full h-full mesh-animate"
        viewBox="0 0 1200 800"
        fill="none"
        style={{ opacity: 0.06 }}
      >
        <circle cx="200" cy="150" r="3" fill="#0099FF" />
        <circle cx="400" cy="300" r="2.5" fill="#0099FF" />
        <circle cx="600" cy="100" r="3" fill="#0099FF" />
        <circle cx="800" cy="250" r="2" fill="#0099FF" />
        <circle cx="1000" cy="150" r="3" fill="#0099FF" />
        <circle cx="300" cy="500" r="2.5" fill="#0099FF" />
        <circle cx="500" cy="600" r="3" fill="#0099FF" />
        <circle cx="700" cy="450" r="2" fill="#0099FF" />
        <circle cx="900" cy="550" r="3" fill="#0099FF" />
        <circle cx="150" cy="350" r="2" fill="#0099FF" />
        <circle cx="1050" cy="400" r="2.5" fill="#0099FF" />
        <line x1="200" y1="150" x2="400" y2="300" stroke="#0099FF" strokeWidth="0.8" />
        <line x1="400" y1="300" x2="600" y2="100" stroke="#0099FF" strokeWidth="0.8" />
        <line x1="600" y1="100" x2="800" y2="250" stroke="#0099FF" strokeWidth="0.8" />
        <line x1="800" y1="250" x2="1000" y2="150" stroke="#0099FF" strokeWidth="0.8" />
        <line x1="200" y1="150" x2="300" y2="500" stroke="#0099FF" strokeWidth="0.5" />
        <line x1="300" y1="500" x2="500" y2="600" stroke="#0099FF" strokeWidth="0.5" />
        <line x1="500" y1="600" x2="700" y2="450" stroke="#0099FF" strokeWidth="0.8" />
        <line x1="700" y1="450" x2="900" y2="550" stroke="#0099FF" strokeWidth="0.5" />
        <line x1="400" y1="300" x2="500" y2="600" stroke="#0099FF" strokeWidth="0.5" />
        <line x1="600" y1="100" x2="700" y2="450" stroke="#0099FF" strokeWidth="0.5" />
        <line x1="800" y1="250" x2="900" y2="550" stroke="#0099FF" strokeWidth="0.5" />
        <line x1="150" y1="350" x2="300" y2="500" stroke="#0099FF" strokeWidth="0.5" />
        <line x1="1000" y1="150" x2="1050" y2="400" stroke="#0099FF" strokeWidth="0.5" />
        <line x1="150" y1="350" x2="200" y2="150" stroke="#0099FF" strokeWidth="0.5" />
        <line x1="1050" y1="400" x2="900" y2="550" stroke="#0099FF" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
