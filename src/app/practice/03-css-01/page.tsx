import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 水墨背景 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-8" style={{background:'url(/public/ink-bg.svg) center/cover no-repeat', zIndex:0}}></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif', letterSpacing:'4px'}}>
            选择器之道
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-2xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            万物有形，皆有其选。CSS选择器如古人识人之法，各有妙用。
          </p>
          <div className="stamp">基础</div>
        </header>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] relative overflow-hidden">
          {/* 印章角标 */}
          <div className="absolute top-4 right-4 stamp">选择</div>
          
          <div className="p-6 border-b-2 border-[var(--secondary)]">
            <h3 className="text-xl font-semibold text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>效果演示</h3>
          </div>
          <div className="p-8 space-y-6">
            {/* 标签选择器演示 */}
            <h1 className="text-3xl font-bold text-[var(--primary)]" style={{ fontFamily: 'Noto Serif SC, STKaiti, KaiTi, serif' }}>CSS选择器演示</h1>
            
            {/* ID 选择器目标 */}
            <h2 id="CSSbase" className="text-2xl font-semibold text-[var(--primary-dark)] bg-[var(--secondary)]/30 p-3 rounded-lg border-l-4 border-[var(--primary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              CSS语法基础 (ID选择器: #CSSbase)
            </h2>
            
            {/* 类选择器目标 */}
            <p className="abstract text-base leading-relaxed border-l-4 border-[var(--secondary)] pl-4 italic bg-[var(--accent)]/50 p-4 rounded-r-lg" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              此为摘要段落 (类选择器: .abstract)，如古人摘录要义，精炼而深刻。通过类选择器设定专属样式。
            </p>
            
            {/* 标签选择器目标 */}
            <p className="leading-relaxed text-[var(--primary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              普通段落如流水，自然而然。下方链接展示伪类选择器之妙用。
            </p>

            <div className="p-4 bg-[var(--secondary)]/20 rounded-md border border-[var(--primary)]/30">
               <p className="text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                段落之中，
                <a href="#" className="mx-2 text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline transition-all font-semibold">链接如桥 (a:link)</a>
                ，连接彼岸，又有
                <a href="#" className="mx-2 text-[var(--secondary)] visited:text-[var(--secondary)] hover:text-[var(--primary-dark)] hover:underline transition-all font-semibold">访问过的路径 (a:visited)</a>
                ，如故人重逢。
              </p>
            </div>
            
            {/* 祥云装饰 */}
            <div className="text-center pt-4">
              <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15c3-6 12-6 15 0 3 6 12 6 15 0 3-6 12-6 15 0" stroke="var(--primary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 