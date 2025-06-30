import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 太极背景装饰 */}
      <div className="absolute top-20 left-20 w-32 h-32 opacity-5" style={{zIndex:0}}>
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="64" fill="var(--primary)"/>
          <path d="M64 0 A64 64 0 0 1 64 128 A32 32 0 0 1 64 64 A32 32 0 0 0 64 0" fill="var(--accent)"/>
          <circle cx="64" cy="32" r="8" fill="var(--primary)"/>
          <circle cx="64" cy="96" r="8" fill="var(--accent)"/>
        </svg>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif', letterSpacing:'4px'}}>
            相对定位之妙
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            如流水绕石，虽有偏移，不失本源。相对定位之道，在于守中有变。
          </p>
          <div className="stamp">相对</div>
        </header>

        <div className="space-y-12">
          
          {/* 基础相对定位 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">基础</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>基础相对定位</h2>
            <p className="text-[var(--primary)] mb-8" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>元素相对于自身原始位置进行偏移，如文人微调笔锋，不失章法。</p>
            
            <div className="bg-[var(--secondary)]/10 p-8 rounded-lg border border-[var(--primary)]/20">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-[var(--accent)]/60 p-4 text-center rounded-lg border border-[var(--primary)]/30" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  元素 1
                </div>
                <div className="bg-[var(--secondary)]/40 p-4 text-center rounded-lg border border-[var(--secondary)]/50 relative transform translate-x-2 -translate-y-1 transition-all duration-500 hover:translate-x-4 hover:-translate-y-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  元素 2 (相对偏移)
                </div>
                <div className="bg-[var(--accent)]/60 p-4 text-center rounded-lg border border-[var(--primary)]/30" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  元素 3
                </div>
              </div>
              <p className="text-[var(--primary)] text-sm text-center italic" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                注意：元素2虽然偏移，但原位置仍占据空间
              </p>
            </div>
          </section>

          {/* 流水动效演示 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">流动</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>流水效果</h2>
            <p className="text-[var(--primary)] mb-8" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>如溪水潺潺，元素依次流动，展现相对定位的连续美感。</p>
            
            <div className="bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--accent)]/20 p-8 rounded-lg border border-[var(--secondary)]/30">
              <div className="flex justify-center items-center space-x-8">
                {[1, 2, 3, 4, 5].map((num, index) => (
                  <div 
                    key={num}
                    className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold relative transition-all duration-1000 hover:bg-[var(--secondary)] hover:text-[var(--primary-dark)]"
                    style={{
                      fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif',
                      transform: `translateY(${Math.sin(index * 0.8) * 20}px)`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <p className="text-center text-[var(--primary)] mt-6 italic" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                悬停圆圈，观察相对位移的韵律
              </p>
            </div>
          </section>

          {/* 层叠效果 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary-dark)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">层叠</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary-dark)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>层叠与深度</h2>
            <p className="text-[var(--primary)] mb-8" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>相对定位配合z-index，如山峦叠嶂，层次分明。</p>
            
            <div className="bg-[var(--accent)]/20 p-12 rounded-lg border border-[var(--primary-dark)]/20 relative min-h-64">
              <div className="absolute top-8 left-8 w-32 h-32 bg-[var(--primary)] rounded-lg shadow-lg flex items-center justify-center text-white font-bold z-10" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                第一层
              </div>
              <div className="absolute top-12 left-12 w-32 h-32 bg-[var(--secondary)] rounded-lg shadow-lg flex items-center justify-center text-[var(--primary-dark)] font-bold z-20" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                第二层
              </div>
              <div className="absolute top-16 left-16 w-32 h-32 bg-[var(--accent)] rounded-lg shadow-lg flex items-center justify-center text-[var(--primary-dark)] font-bold z-30 border-2 border-[var(--primary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                第三层
              </div>
            </div>
            
            {/* 古典诗句 */}
            <div className="text-center pt-8">
              <p className="text-[var(--primary)] italic" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                &ldquo;山重水复疑无路，柳暗花明又一村&rdquo;
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
} 