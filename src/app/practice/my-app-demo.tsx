export default function MyAppDemo() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl border-2 border-[var(--primary)] p-6 m-4 shadow-lg relative overflow-hidden" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
      {/* 印章角标 */}
      <div className="absolute top-2 right-2 stamp text-xs">练习</div>
      
      {/* 祥云装饰 */}
      <div className="absolute top-1 left-1 opacity-20">
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 9c2-3 5-3 6 0 2 3 5 3 6 0 2-3 5-3 6 0" stroke="var(--primary)" strokeWidth="1" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      
      <h2 className="text-xl font-bold text-[var(--primary-dark)] mb-3 border-l-4 border-[var(--secondary)] pl-3">
        一个练习卡片
      </h2>
      <p className="text-[var(--primary)] leading-relaxed">
        这是我的第一个React组件！如初学书法，一笔一划皆有意。
      </p>
      
      {/* 底部装饰 */}
      <div className="mt-4 text-center">
        <div className="inline-block bg-[var(--secondary)]/20 px-3 py-1 rounded-full text-xs text-[var(--primary)]">
          React 组件
        </div>
      </div>
    </div>
  );
} 