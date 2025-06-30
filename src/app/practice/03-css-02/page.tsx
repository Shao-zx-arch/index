import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 淡雅背景纹理 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-6 bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]" style={{zIndex:0}}></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif', letterSpacing:'4px'}}>
            样式三法
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            内外兼修，层次分明。CSS引入之法，如古人治学，各有门径。
          </p>
          <div className="stamp">引入</div>
        </header>

        <div className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] relative overflow-hidden">
          {/* 印章角标 */}
          <div className="absolute top-4 right-4 stamp">法</div>
          
          <div className="p-6 border-b-2 border-[var(--secondary)]">
            <h3 className="text-xl font-semibold text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>三法演示</h3>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-[var(--primary)] text-center mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>下列各项展示CSS样式引入的三种门径：</p>
            
            <div className="p-6 bg-[var(--secondary)]/10 rounded-md border border-[var(--primary)]/20">
              <ul className="space-y-6 text-lg">
                <li className="flex items-start gap-4 p-4 bg-white/60 rounded-lg border-l-4 border-[var(--primary)]">
                  {/* 祥云图标 */}
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                    <path d="M2 12c2-4 6-4 8 0 2 4 6 4 8 0 2-4 6-4 8 0" stroke="var(--primary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>【外部样式表】:</span>
                    <p className="text-[var(--primary)] mt-1" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>如藏书于外库，统一调用。此行样式源自全局 `globals.css` 文件，一处定义，处处可用。</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 p-4 bg-[var(--accent)]/40 rounded-lg border-l-4 border-[var(--secondary)]">
                  {/* 印章图标 */}
                  <div className="mt-1 w-6 h-6 bg-[var(--primary)] rounded-sm flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>内</div>
                  <div>
                    <span className="font-semibold text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif', textDecoration:'underline', textDecorationStyle:'wavy'}}>【内部样式表】:</span>
                    <p className="text-[var(--primary)] mt-1" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>如文内注释，就近而治。此行样式通过页面级定义（在React中常用CSS-in-JS或Tailwind类实现）。</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 p-4 rounded-lg border-l-4 border-[var(--primary-dark)]" style={{ backgroundColor: '#f0f8ff', color: '#8A2BE2', fontWeight: 'bold' }}>
                  {/* 扇形图标 */}
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                    <path d="M12 2 L4 14 L20 14 Z" fill="var(--primary)" opacity="0.6"/>
                  </svg>
                  <div>
                    <span style={{ color: '#FBBF24', textDecoration: 'none', fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif' }}>【内联样式】:</span>
                    <p style={{ color: '#8A2BE2', marginTop: '4px', fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif' }}>如随身佩印，即时生效。此行样式直接通过 `style` 属性定义，优先级最高，如君王诏令。</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* 古典装饰 */}
            <div className="text-center pt-6">
              <div className="flex justify-center items-center gap-4">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15c3-6 8-6 10 0 3 6 8 6 10 0 3-6 8-6 10 0" stroke="var(--secondary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                <div className="stamp text-xs">样式</div>
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15c3-6 8-6 10 0 3 6 8 6 10 0 3-6 8-6 10 0" stroke="var(--secondary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 