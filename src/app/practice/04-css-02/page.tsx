import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 扇形背景装饰 */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{zIndex:0}}>
        <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M128 0 L0 128 L256 128 Z" fill="var(--secondary)"/>
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
            定位之术
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            如棋盘布子，各有其位。CSS定位如古人排兵布阵，精准制胜。
          </p>
          <div className="stamp">定位</div>
        </header>

        <div className="space-y-12">
          
          {/* 绝对定位演示 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">绝对</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>绝对定位 (Absolute)</h2>
            <p className="text-[var(--primary)] mb-8" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>如君王下令，不受约束，脱离文档流而独立存在。</p>
            
            <div className="relative bg-[var(--secondary)]/10 p-12 rounded-lg border-2 border-[var(--primary)]/20 min-h-64">
              <div className="absolute top-4 left-4 bg-[var(--primary)] text-white p-3 rounded-lg shadow-lg" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                左上角
              </div>
              <div className="absolute top-4 right-4 bg-[var(--secondary)] text-[var(--primary-dark)] p-3 rounded-lg shadow-lg" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                右上角
              </div>
              <div className="absolute bottom-4 left-4 bg-[var(--primary-dark)] text-white p-3 rounded-lg shadow-lg" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                左下角
              </div>
              <div className="absolute bottom-4 right-4 bg-[var(--accent)] text-[var(--primary-dark)] p-3 rounded-lg shadow-lg border-2 border-[var(--primary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                右下角
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white p-4 rounded-full shadow-xl" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                中心点
              </div>
            </div>
          </section>

          {/* 相对定位演示 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">相对</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>相对定位 (Relative)</h2>
            <p className="text-[var(--primary)] mb-8" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>如文人雅士，守本分而有微调，相对原位而偏移。</p>
            
            <div className="bg-[var(--accent)]/20 p-8 rounded-lg border border-[var(--secondary)]/40">
              <div className="flex gap-4 items-center mb-6">
                <div className="bg-[var(--primary)]/20 p-4 rounded-lg border border-[var(--primary)]/30" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  正常位置
                </div>
                <div className="bg-[var(--secondary)]/30 p-4 rounded-lg border border-[var(--secondary)]/50 relative transform translate-x-4 -translate-y-2 transition-all duration-300 hover:translate-x-8 hover:-translate-y-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  相对偏移
                </div>
                <div className="bg-[var(--primary)]/20 p-4 rounded-lg border border-[var(--primary)]/30" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  正常位置
                </div>
              </div>
              <p className="text-[var(--primary)] text-sm italic" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                悬停中间元素，观其微妙变化
              </p>
            </div>
          </section>

          {/* 固定定位演示 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary-dark)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">固定</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary-dark)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>固定定位 (Fixed)</h2>
            <p className="text-[var(--primary)] mb-8" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>如北极星恒定不移，无论页面如何滚动，始终固守一方。</p>
            
            <div className="bg-[var(--secondary)]/10 p-8 rounded-lg border border-[var(--primary-dark)]/20 text-center">
              <p className="text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                页面顶部的导航栏即为固定定位的典型应用
              </p>
              <div className="inline-block bg-[var(--primary-dark)] text-white px-6 py-3 rounded-lg shadow-lg" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                如导航栏般固定
              </div>
            </div>
            
            {/* 古典装饰 */}
            <div className="text-center pt-8">
              <p className="text-[var(--primary)] italic" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                &ldquo;定者，不移之谓也&rdquo;
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
} 