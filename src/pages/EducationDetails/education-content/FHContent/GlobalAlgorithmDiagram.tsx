export default function AlgorithmDiagram() {
  return (
    <svg 
      viewBox="0 0 800 600" 
      xmlns="http://www.w3.org/2000/svg" 
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        {/* Паттерн фоновой сетки (Grid) */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e5ea" strokeWidth="1" />
        </pattern>

        {/* Наконечник стрелки для обычного A* */}
        <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff3b30" />
        </marker>

        {/* Наконечник стрелки для Hybrid A* */}
        <marker id="arrowBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0071e3" />
        </marker>
      </defs>

      {/* Фон с сеткой */}
      <rect width="100%" height="100%" fill="url(#grid)" rx="20" />

      {/* Док (П-образный карман) */}
      <g transform="translate(560, 40)">
        {/* Пирсы */}
        <rect x="0" y="20" width="20" height="140" fill="#d2d2d7" rx="4" />
        <rect x="100" y="20" width="20" height="140" fill="#d2d2d7" rx="4" />
        <rect x="0" y="0" width="120" height="20" fill="#d2d2d7" rx="4" />
        {/* Ворота дока (пунктир) */}
        <line x1="20" y1="160" x2="100" y2="160" stroke="#34c759" strokeWidth="3" strokeDasharray="6, 6" />
        <text x="0" y="185" fontFamily="system-ui, sans-serif" fontSize="14" fill="#34c759" fontWeight="600" textAnchor="middle">Dock Gates</text>
      </g>

      {/* Препятствие (Мель или другое судно) */}
      <rect x="280" y="280" width="160" height="120" rx="16" fill="#ffffff" stroke="#d2d2d7" strokeWidth="2" />
      <text x="360" y="345" fontFamily="system-ui, sans-serif" fontSize="16" fill="#86868b" fontWeight="500" textAnchor="middle">Obstacle</text>

      {/* Плохой путь: Стандартный A* (Угловатый, красный) */}
      <polyline 
        points="160,520 160,240 620,240 620,160" 
        stroke="#ff3b30" 
        strokeWidth="4" 
        fill="none" 
        strokeDasharray="8, 8" 
        markerEnd="url(#arrowRed)" 
      />
      
      {/* Хороший путь: Hybrid A* (Плавная дуга + Прямая линия, синий) */}
      <path 
        d="M 160 520 C 160 360, 620 520, 620 280 L 620 160" 
        stroke="#0071e3" 
        strokeWidth="6" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        markerEnd="url(#arrowBlue)" 
      />

      {/* Лодка на старте */}
      <g transform="translate(160, 520)">
        <polygon points="-15,20 0,-20 15,20" fill="#1d1d1f" />
      </g>

      {/* Текстовые аннотации к путям */}
      <g fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">
        {/* Подпись A* */}
        <text x="175" y="230" fill="#ff3b30">Standard A* (Grid Path)</text>
        
        {/* Подпись Hybrid A* */}
        <text x="400" y="480" fill="#0071e3">Hybrid A* (Kinematic Arc)</text>
        
        {/* Подпись Path Stitching */}
        <text x="640" y="230" fill="#1d1d1f">Path Stitching</text>
        <line x1="635" y1="225" x2="625" y2="225" stroke="#1d1d1f" strokeWidth="2" />
      </g>
    </svg>
  );
}