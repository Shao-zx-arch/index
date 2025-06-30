'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 工匠工具背景装饰 */}
      <div className="absolute top-8 left-8 w-32 h-32 opacity-8" style={{zIndex:0}}>
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="88" height="8" rx="4" fill="var(--primary)" opacity="0.2"/>
          <rect x="20" y="60" width="88" height="8" rx="4" fill="var(--secondary)" opacity="0.2"/>
          <circle cx="64" cy="80" r="12" fill="var(--primary)" opacity="0.1"/>
          <path d="M52 80 L76 80 M64 68 L64 92" stroke="var(--secondary)" strokeWidth="2" opacity="0.3"/>
        </svg>
      </div>
      
      {/* 右侧装饰 */}
      <div className="absolute bottom-8 right-8 w-40 h-40 opacity-6" style={{zIndex:0}}>
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 80 Q80 20 140 80 Q80 140 20 80" fill="var(--primary)" opacity="0.1"/>
          <circle cx="80" cy="80" r="30" stroke="var(--secondary)" strokeWidth="2" fill="none" opacity="0.2"/>
          <circle cx="80" cy="80" r="15" fill="var(--primary)" opacity="0.15"/>
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
            新闻布局精工
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            更精妙的页面布局与脚本设计，如工匠精雕细琢，每个细节都追求完美。
          </p>
          <div className="stamp">精工</div>
        </header>

        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* 头条新闻区 - 工匠级布局 */}
          <section className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">头条</div>
            
            {/* 顶部装饰线 */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)]"></div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 主要新闻 */}
              <div className="lg:col-span-2">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-full h-full bg-[var(--primary)]/10 rounded-lg"></div>
                  <div className="relative bg-[var(--accent)]/50 p-6 rounded-lg border border-[var(--primary)]/30">
                    <h2 className="text-2xl font-bold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      前端工艺革新：从手工到精工
                    </h2>
                    <p className="text-[var(--primary)] leading-relaxed mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      如古代工匠雕琢美玉，现代前端开发亦需精益求精。从简单的HTML到复杂的组件化架构，每一步都体现着技术的进步与美学的追求。
                      工匠精神不仅体现在代码的优雅，更在于对用户体验的极致追求...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--secondary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                        2024年春 • 技术观察 • 工匠精神
                      </span>
                      <button className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-all hover:scale-105" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                        深度阅读
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 侧边栏新闻 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--primary-dark)] border-b-2 border-[var(--secondary)] pb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  技术要闻
                </h3>
                
                <div className="bg-[var(--secondary)]/20 p-4 rounded-lg border border-[var(--secondary)]/30 hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    CSS Grid 布局艺术
                  </h4>
                  <p className="text-sm text-[var(--primary)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    如棋盘布局，纵横有序...
                  </p>
                  <span className="text-xs text-[var(--secondary)]">1小时前</span>
                </div>
                
                <div className="bg-[var(--primary)]/10 p-4 rounded-lg border border-[var(--primary)]/30 hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    JavaScript 性能优化
                  </h4>
                  <p className="text-sm text-[var(--primary)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    如庖丁解牛，精准高效...
                  </p>
                  <span className="text-xs text-[var(--secondary)]">3小时前</span>
                </div>
                
                <div className="bg-[var(--accent)]/40 p-4 rounded-lg border border-[var(--primary)]/20 hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    响应式设计新思路
                  </h4>
                  <p className="text-sm text-[var(--primary)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    如水随器形，适配万端...
                  </p>
                  <span className="text-xs text-[var(--secondary)]">5小时前</span>
                </div>
              </div>
            </div>
          </section>

          {/* 互动功能展示区 */}
          <section className="bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">互动</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-8 text-center border-b-2 border-[var(--secondary)] pb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              精工互动演示
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 新闻筛选器 */}
              <div className="bg-[var(--accent)]/30 p-6 rounded-xl border border-[var(--primary)]/20 text-center hover:shadow-lg transition-all">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  分类筛选
                </h4>
                <select 
                  className="w-full p-2 rounded-lg border border-[var(--primary)]/30 bg-white/80 text-[var(--primary-dark)]"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                  onChange={(e) => {
                    const articles = document.querySelectorAll('.news-article');
                    articles.forEach(article => {
                      const category = article.getAttribute('data-category');
                      if (e.target.value === 'all' || category === e.target.value) {
                        (article as HTMLElement).style.display = 'block';
                      } else {
                        (article as HTMLElement).style.display = 'none';
                      }
                    });
                  }}
                >
                  <option value="all">全部新闻</option>
                  <option value="tech">技术</option>
                  <option value="design">设计</option>
                  <option value="tools">工具</option>
                </select>
              </div>
              
              {/* 字体大小调节 */}
              <div className="bg-[var(--secondary)]/20 p-6 rounded-xl border border-[var(--secondary)]/30 text-center hover:shadow-lg transition-all">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  字体调节
                </h4>
                <div className="flex justify-center gap-2">
                  <button 
                    className="bg-[var(--primary)] text-white px-3 py-1 rounded text-sm hover:bg-[var(--primary-dark)] transition-colors"
                    onClick={() => {
                      const content = document.getElementById('adjustable-content');
                      if (content) {
                        const current = parseInt(getComputedStyle(content).fontSize);
                        content.style.fontSize = Math.max(12, current - 2) + 'px';
                      }
                    }}
                  >
                    小
                  </button>
                  <button 
                    className="bg-[var(--secondary)] text-[var(--primary-dark)] px-3 py-1 rounded text-sm hover:bg-[var(--primary)] hover:text-white transition-colors"
                    onClick={() => {
                      const content = document.getElementById('adjustable-content');
                      if (content) {
                        const current = parseInt(getComputedStyle(content).fontSize);
                        content.style.fontSize = Math.min(24, current + 2) + 'px';
                      }
                    }}
                  >
                    大
                  </button>
                </div>
              </div>
              
              {/* 主题切换 */}
              <div className="bg-[var(--primary)]/10 p-6 rounded-xl border border-[var(--primary)]/30 text-center hover:shadow-lg transition-all">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  主题切换
                </h4>
                <button 
                  className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                  onClick={() => {
                    const body = document.body;
                    body.classList.toggle('dark-theme');
                    const btn = event?.target as HTMLButtonElement;
                    btn.textContent = body.classList.contains('dark-theme') ? '日间模式' : '夜间模式';
                  }}
                >
                  夜间模式
                </button>
              </div>
              
              {/* 阅读进度 */}
              <div className="bg-[var(--accent)]/40 p-6 rounded-xl border border-[var(--primary)]/20 text-center hover:shadow-lg transition-all">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  阅读进度
                </h4>
                <div className="w-full bg-[var(--primary)]/20 rounded-full h-2 mb-2">
                  <div 
                    className="bg-[var(--primary)] h-2 rounded-full transition-all duration-300"
                    id="progress-bar"
                    style={{width: '0%'}}
                  ></div>
                </div>
                <span className="text-sm text-[var(--secondary)]" id="progress-text">0%</span>
              </div>
            </div>
          </section>

          {/* 新闻文章列表 */}
          <section className="bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-[var(--primary-dark)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">文章</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-8 border-l-4 border-[var(--primary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              精选文章
            </h2>
            
            <div id="adjustable-content" className="space-y-6" style={{fontSize: '16px'}}>
              <article className="news-article bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20 hover:shadow-lg transition-all" data-category="tech">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 bg-[var(--primary)] rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      前端框架演进史：从jQuery到React
                    </h3>
                    <p className="text-[var(--primary)] leading-relaxed mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      如古代文字演进，从甲骨文到楷书，前端技术亦在不断革新。每一次变革都带来新的可能，也考验着开发者的适应能力...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[var(--secondary)]">
                      <span>技术分类</span>
                      <span>•</span>
                      <span>阅读时间：5分钟</span>
                      <span>•</span>
                      <span>2024年春</span>
                    </div>
                  </div>
                </div>
              </article>
              
              <article className="news-article bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30 hover:shadow-lg transition-all" data-category="design">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 bg-[var(--secondary)] rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      UI设计的东方美学
                    </h3>
                    <p className="text-[var(--primary)] leading-relaxed mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      将中式美学融入现代UI设计，如诗画般的界面布局，既有传统韵味，又符合现代审美。留白的艺术，色彩的和谐...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[var(--secondary)]">
                      <span>设计分类</span>
                      <span>•</span>
                      <span>阅读时间：8分钟</span>
                      <span>•</span>
                      <span>2024年春</span>
                    </div>
                  </div>
                </div>
              </article>
              
              <article className="news-article bg-[var(--primary)]/10 p-6 rounded-lg border border-[var(--primary)]/30 hover:shadow-lg transition-all" data-category="tools">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 bg-[var(--primary-dark)] rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      开发工具的匠心之选
                    </h3>
                    <p className="text-[var(--primary)] leading-relaxed mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      好的工具如名匠之器，能事半功倍。从代码编辑器到构建工具，每一个选择都影响着开发效率和代码质量...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[var(--secondary)]">
                      <span>工具分类</span>
                      <span>•</span>
                      <span>阅读时间：6分钟</span>
                      <span>•</span>
                      <span>2024年春</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* 工匠格言区 */}
          <section className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">格言</div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                工匠精神
              </h3>
              <blockquote className="text-xl text-[var(--primary)] italic leading-relaxed mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                &ldquo;精工细作，匠心独运。<br/>
                代码如器，布局如画。<br/>
                每一个像素都有其意义，每一行代码都承载着匠人的心血。&rdquo;
              </blockquote>
              
              {/* 装饰性工匠元素 */}
              <div className="flex justify-center items-center gap-8">
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="40" height="4" rx="2" fill="var(--primary)" opacity="0.6"/>
                  <rect x="10" y="16" width="40" height="4" rx="2" fill="var(--secondary)" opacity="0.6"/>
                  <circle cx="30" cy="15" r="8" stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.4"/>
                </svg>
                <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white text-sm font-bold transform rotate-12" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  工<br/>匠
                </div>
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="40" height="4" rx="2" fill="var(--primary)" opacity="0.6"/>
                  <rect x="10" y="16" width="40" height="4" rx="2" fill="var(--secondary)" opacity="0.6"/>
                  <circle cx="30" cy="15" r="8" stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.4"/>
                </svg>
              </div>
          </div>
        </section>

        </div>
      </main>
      
      {/* 页面滚动进度条脚本 */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            
            if (progressBar) progressBar.style.width = progress + '%';
            if (progressText) progressText.textContent = Math.round(progress) + '%';
          });
        `
      }} />
    </div>
  );
} 