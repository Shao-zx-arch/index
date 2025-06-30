"use client";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 太极背景装饰 */}
      <div className="absolute top-12 right-12 w-64 h-64 opacity-8" style={{zIndex:0}}>
        <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="128" cy="128" r="120" fill="var(--primary)" opacity="0.1"/>
          <path d="M128 8 A120 120 0 0 1 128 248 A60 60 0 0 1 128 128 A60 60 0 0 0 128 8" fill="var(--primary)" opacity="0.15"/>
          <circle cx="128" cy="68" r="15" fill="var(--accent)"/>
          <circle cx="128" cy="188" r="15" fill="var(--primary)" opacity="0.3"/>
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
            盒模型与布局之美
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            方寸之间，乾坤自有。CSS核心概念如古建之法，层次井然，美轮美奂。
          </p>
          <div className="stamp">布局</div>
        </header>

        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* 背景概念 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">背景</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              背景之道
            </h2>
            
            <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
              <p className="text-[var(--primary)] mb-4 leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                CSS 背景属性可以为元素设置各种漂亮的背景效果，如画师为画作添彩。
              </p>
              
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                常用背景属性：
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[var(--secondary)]/20 p-4 rounded-lg border border-[var(--secondary)]/30">
                  <ul className="text-[var(--primary)] space-y-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">background-color</code> - 设置背景颜色</li>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">background-image</code> - 设置背景图片</li>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">background-repeat</code> - 控制背景图片是否重复</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--primary)]/10 p-4 rounded-lg border border-[var(--primary)]/30">
                  <ul className="text-[var(--primary)] space-y-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">background-position</code> - 设置背景图片位置</li>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">background-size</code> - 控制背景图片尺寸</li>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">background-attachment</code> - 控制背景图片是否随页面滚动</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 盒模型概念 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">盒模型</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              盒模型之妙
            </h2>
            
            <div className="space-y-6">
              <p className="text-[var(--primary)] leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                CSS 盒模型是网页布局的基础，每个元素都被视为一个矩形盒子，如古建筑之基石。
              </p>
              
              {/* 盒模型演示 */}
              <div className="flex justify-center gap-6 flex-wrap">
                <div className="w-48 h-48 border-4 border-dotted border-[var(--primary)] p-6 m-5 rounded-[50px_10px_50px_10px] bg-[var(--accent)]/30 flex items-center justify-center text-center transition-all duration-300 hover:rotate-5 hover:scale-105 hover:bg-[var(--primary)] hover:text-white hover:border-solid hover:border-[var(--secondary)] shadow-lg" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  盒模型示例 1
                </div>
                <div className="w-48 h-48 border-4 border-dotted border-[var(--primary)] p-6 m-5 rounded-[50px_10px_50px_10px] bg-[var(--accent)]/30 flex items-center justify-center text-center transition-all duration-300 hover:rotate-5 hover:scale-105 hover:bg-[var(--primary)] hover:text-white hover:border-solid hover:border-[var(--secondary)] shadow-lg" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  盒模型示例 2
                </div>
              </div>
              
              <div className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  盒模型相关属性：
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-[var(--primary)] space-y-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">width</code>/<code className="bg-[var(--primary)]/10 px-2 py-1 rounded">height</code> - 内容区域宽高</li>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">padding</code> - 内边距</li>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">border</code> - 边框</li>
                  </ul>
                  <ul className="text-[var(--primary)] space-y-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">margin</code> - 外边距</li>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">box-sizing</code> - 控制盒模型计算方式</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 布局概念 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary-dark)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">布局</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary-dark)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              布局之术
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  display 的不同取值
                </h3>
                <p className="text-[var(--primary)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  display 属性决定了元素如何显示在页面上，如棋局布子，各有其位：
                </p>
                
                <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[var(--secondary)] text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--accent)] hover:scale-110 hover:rotate-5 font-bold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>inline</span>
                    <span className="bg-[var(--secondary)] text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--accent)] hover:scale-110 hover:rotate-5 font-bold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>block</span>
                    <span className="bg-[var(--secondary)] text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--accent)] hover:scale-110 hover:rotate-5 font-bold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>inline-block</span>
                    <span className="bg-[var(--secondary)] text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--accent)] hover:scale-110 hover:rotate-5 font-bold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>flex</span>
                    <span className="bg-[var(--secondary)] text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--accent)] hover:scale-110 hover:rotate-5 font-bold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>grid</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  Flexbox 弹性布局
                </h3>
                <p className="text-[var(--primary)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  Flexbox 是一种现代的布局方式，可以轻松实现各种复杂布局，如流水行云：
                </p>
                
                <div className="flex flex-wrap justify-around gap-4 mb-6">
                  <div className="flex-1 min-w-[150px] border-2 border-dashed border-[var(--primary)] p-4 rounded-xl bg-[var(--primary)]/10 transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-5px] hover:scale-105 hover:border-solid text-center" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>项目1</div>
                  <div className="flex-1 min-w-[150px] border-2 border-dashed border-[var(--primary)] p-4 rounded-xl bg-[var(--primary)]/10 transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-5px] hover:scale-105 hover:border-solid text-center" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>项目2</div>
                  <div className="flex-1 min-w-[150px] border-2 border-dashed border-[var(--primary)] p-4 rounded-xl bg-[var(--primary)]/10 transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-5px] hover:scale-105 hover:border-solid text-center" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>项目3</div>
                  <div className="flex-1 min-w-[150px] border-2 border-dashed border-[var(--primary)] p-4 rounded-xl bg-[var(--primary)]/10 transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:translate-y-[-5px] hover:scale-105 hover:border-solid text-center" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>项目4</div>
                </div>
                
                <div className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30">
                  <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    常用 Flexbox 属性：
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-[var(--primary)] space-y-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">display: flex</code> - 创建 flex 容器</li>
                      <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">flex-direction</code> - 主轴方向</li>
                      <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">justify-content</code> - 主轴对齐方式</li>
                    </ul>
                    <ul className="text-[var(--primary)] space-y-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">align-items</code> - 交叉轴对齐方式</li>
                      <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">flex-wrap</code> - 是否换行</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 动画概念 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">动画</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              动画之韵
            </h2>
            
            <div className="space-y-6">
              <p className="text-[var(--primary)] leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                CSS 动画可以为网页添加生动的交互效果，提升用户体验，如诗画之灵动。
              </p>
              
              <p className="text-[var(--primary)] leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                动画三要素：起始状态、结束状态、持续时间。
              </p>
              
              <p className="text-[var(--primary)] leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                将鼠标悬停在下面的盒子上查看动画效果：
              </p>
              
              {/* 动画演示 */}
              <div className="flex justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white text-center leading-[160px] m-8 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hover:bg-gradient-to-br hover:from-[var(--accent)] hover:to-[var(--primary)] hover:scale-110 hover:rotate-15 hover:shadow-xl font-bold cursor-pointer" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  悬停动画
                </div>
              </div>
              
              <div className="bg-[var(--primary)]/10 p-6 rounded-lg border border-[var(--primary)]/30">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  常用动画属性：
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-[var(--primary)] space-y-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">transition</code> - 过渡效果</li>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">@keyframes</code> - 关键帧动画</li>
                  </ul>
                  <ul className="text-[var(--primary)] space-y-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">animation</code> - 动画简写属性</li>
                    <li>• <code className="bg-[var(--primary)]/10 px-2 py-1 rounded">transform</code> - 变形效果</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 古典诗句 */}
          <section className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">诗韵</div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                CSS布局诗韵
              </h3>
              <blockquote className="text-xl text-[var(--primary)] italic leading-relaxed mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                &ldquo;静如处子，动如脱兔。<br/>
                盒模型如古建之基，布局如棋局之妙。<br/>
                动画如诗画之韵，CSS如艺术之道。&rdquo;
              </blockquote>
              
              {/* 装饰性太极元素 */}
              <div className="flex justify-center items-center gap-8">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="var(--primary)" opacity="0.2"/>
                  <path d="M20 2 A18 18 0 0 1 20 38 A9 9 0 0 1 20 20 A9 9 0 0 0 20 2" fill="var(--primary)" opacity="0.4"/>
                  <circle cx="20" cy="11" r="3" fill="var(--accent)"/>
                  <circle cx="20" cy="29" r="3" fill="var(--primary)" opacity="0.6"/>
                </svg>
                <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-xs font-bold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  CSS<br/>之美
                </div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="var(--secondary)" opacity="0.2"/>
                  <path d="M20 2 A18 18 0 0 1 20 38 A9 9 0 0 1 20 20 A9 9 0 0 0 20 2" fill="var(--secondary)" opacity="0.4"/>
                  <circle cx="20" cy="11" r="3" fill="var(--accent)"/>
                  <circle cx="20" cy="29" r="3" fill="var(--secondary)" opacity="0.6"/>
                </svg>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
} 