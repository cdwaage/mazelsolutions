'use client';

const techs = [
  'Cisco', 'Palo Alto', 'AWS', 'Azure', 'React', 'Python', 'Docker', 'Kubernetes',
  'Cisco', 'Palo Alto', 'AWS', 'Azure', 'React', 'Python', 'Docker', 'Kubernetes',
];

function TechLogo({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-32 h-12 flex items-center justify-center px-4 opacity-50 hover:opacity-80 transition-opacity">
      <span className="text-sm font-medium text-text-secondary whitespace-nowrap tracking-wider uppercase">
        {name}
      </span>
    </div>
  );
}

export default function TechStrip() {
  return (
    <div className="py-16 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-text-muted text-sm uppercase tracking-widest mb-8">
          Technologies We Work With
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-dark to-transparent z-10" />
          <div className="flex logo-scroll" style={{ width: 'max-content' }}>
            {techs.map((tech, i) => (
              <TechLogo key={`${tech}-${i}`} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
