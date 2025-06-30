export default function MyAppHello() {
  return (
    <div className="bg-gradient-to-r from-[var(--accent)]/60 to-[var(--secondary)]/30 backdrop-blur-md rounded-lg border border-[var(--primary)]/40 p-5 m-4 shadow-md relative" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
      {/* 扇形装饰 */}
      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5 L5 25 L25 25 Z" fill="var(--primary)" opacity="0.3"/>
        </svg>
      </div>
      
      {/* 古典花边 */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="4" r="2" fill="var(--secondary)" opacity="0.6"/>
          <circle cx="20" cy="4" r="2" fill="var(--primary)" opacity="0.6"/>
          <circle cx="32" cy="4" r="2" fill="var(--secondary)" opacity="0.6"/>
        </svg>
      </div>
      
      <p className="text-[var(--primary-dark)] text-center font-medium leading-relaxed">
        这是来自自定义组件中的内容
        <br/>
        <small className="text-[var(--primary)] italic">如诗如画，组件之美</small>
      </p>
    </div>
  );
} 