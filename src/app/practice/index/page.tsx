"use client";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 祥云背景装饰 */}
      <div className="absolute top-8 right-8 w-48 h-48 opacity-10" style={{zIndex:0}}>
        <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 80 Q40 60 60 80 T100 80 T140 80 T180 80" stroke="var(--primary)" strokeWidth="3" fill="none" opacity="0.3"/>
          <path d="M20 100 Q40 80 60 100 T100 100 T140 100 T180 100" stroke="var(--secondary)" strokeWidth="2" fill="none" opacity="0.2"/>
          <path d="M20 120 Q40 100 60 120 T100 120 T140 120 T180 120" stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.25"/>
        </svg>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>返回首页</span>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* 标题区域 */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif', letterSpacing:'4px'}}>
              蜡笔小新之雅集
            </h1>
            <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              蜡笔小新是一部非常受欢迎的日本动漫，讲述了野原新之助一家的日常生活趣事，如古时雅集，趣味横生。
            </p>
            <div className="stamp">雅集</div>
          </header>

          {/* 图片展示 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">图像</div>
            
            <div className="text-center">
              <img 
                src="https://tse2-mm.cn.bing.net/th/id/OIP-C.TzebNo2no8VI9HrkEKQndAHaFj?w=202&h=152&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
                alt="蜡笔小新" 
                className="mx-auto rounded-lg shadow-lg border-2 border-[var(--primary)]/30 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>

          {/* 角色列表 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">角色</div>
            
            <h2 className="text-2xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              主要角色
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  主要人物（有序列表）
                </h3>
                <ol className="text-[var(--primary)] space-y-2 list-decimal list-inside" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  <li>野原新之助</li>
                  <li>野原美冴</li>
                  <li>野原广志</li>
                </ol>
              </div>
              
              <div className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  经典动作（无序列表）
                </h3>
                <ul className="text-[var(--primary)] space-y-2 list-disc list-inside" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  <li>动感光波</li>
                  <li>屁屁舞</li>
                  <li>大象歌</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 逻辑区块 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary-dark)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">知识</div>
            
            <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
              <h2 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                有趣小知识
              </h2>
              <p className="text-[var(--primary)] leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                这里是关于蜡笔小新的一些有趣小知识，如古时雅集论道，趣味横生。
              </p>
              <div className="mt-4">
                <a 
                  href="https://baike.baidu.com/item/%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0/29538" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--secondary)] hover:text-[var(--primary-dark)] transition-colors underline"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                >
                  了解更多关于蜡笔小新的信息
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          </section>

          {/* 视频展示 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">视频</div>
            
            <h2 className="text-2xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              请欣赏小新的视频~
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.bilibili.com/video/BV1fb4y1h7QF/?spm_id_from=333.337.search-card.all.click&vd_source=87910d5ab7535fb40ccc452f9e9271c9" 
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg shadow-lg border-2 border-[var(--primary)]/30"
                />
              </div>
              <div className="lg:w-64 bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
                <h3 className="text-lg font-semibold text-[var(--primary-dark)] mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  视频说明
                </h3>
                <p className="text-[var(--primary)] text-sm leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  这里可以添加视频右侧想要显示的内容，如古时雅集之旁白。
                </p>
              </div>
            </div>
          </section>

          {/* SVG图形 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">图形</div>
            
            <h2 className="text-2xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              嵌入内容元素 - SVG图形
            </h2>
            
            <div className="text-center">
              <svg width="100" height="100" className="mx-auto">
                <circle cx="50" cy="50" r="40" stroke="var(--primary)" strokeWidth="4" fill="var(--accent)" />
              </svg>
              <p className="text-[var(--primary)] mt-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                这是一个简单的SVG圆形图形，如古时印章之形。
              </p>
            </div>
          </section>

          {/* 角色表格 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">表格</div>
            
            <h2 className="text-2xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              角色信息表
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-2 border-[var(--primary)] rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-[var(--primary)] text-white">
                    <th className="border border-[var(--primary)] p-3 text-left" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>角色</th>
                    <th className="border border-[var(--primary)] p-3 text-left" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>年龄</th>
                    <th className="border border-[var(--primary)] p-3 text-left" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>特点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[var(--accent)]/20 hover:bg-[var(--accent)]/40 transition-colors">
                    <td className="border border-[var(--primary)] p-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>野原新之助</td>
                    <td className="border border-[var(--primary)] p-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>5岁</td>
                    <td className="border border-[var(--primary)] p-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>调皮可爱</td>
                  </tr>
                  <tr className="bg-[var(--secondary)]/20 hover:bg-[var(--secondary)]/40 transition-colors">
                    <td className="border border-[var(--primary)] p-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>野原美冴</td>
                    <td className="border border-[var(--primary)] p-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>29岁</td>
                    <td className="border border-[var(--primary)] p-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>爱唠叨</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 留言表单 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary-dark)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">留言</div>
            
            <h2 className="text-2xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary-dark)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              留言雅集
            </h2>
            
            <form className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-[var(--primary-dark)] font-semibold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  你的名字:
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full p-3 border-2 border-[var(--primary)]/30 rounded-lg bg-white/80 focus:border-[var(--primary)] focus:outline-none transition-colors"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-[var(--primary-dark)] font-semibold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  留言:
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full p-3 border-2 border-[var(--primary)]/30 rounded-lg bg-white/80 focus:border-[var(--primary)] focus:outline-none transition-colors resize-vertical"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="favorite" className="block text-[var(--primary-dark)] font-semibold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  最喜欢的角色:
                </label>
                <select 
                  id="favorite" 
                  name="favorite"
                  className="w-full p-3 border-2 border-[var(--primary)]/30 rounded-lg bg-white/80 focus:border-[var(--primary)] focus:outline-none transition-colors"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                >
                  <option value="shinchan">野原新之助</option>
                  <option value="misaeko">野原美冴</option>
                  <option value="hiroshi">野原广志</option>
                </select>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg hover:bg-[var(--primary-dark)] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                >
                  提交留言
                </button>
              </div>
            </form>
          </section>

          {/* 古典诗句 */}
          <section className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">诗韵</div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                蜡笔小新雅集诗韵
              </h3>
              <blockquote className="text-xl text-[var(--primary)] italic leading-relaxed mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                &ldquo;童心未泯，趣味横生。<br/>
                蜡笔小新如古时雅集，<br/>
                欢声笑语，其乐融融。&rdquo;
              </blockquote>
              
              {/* 装饰性元素 */}
              <div className="flex justify-center items-center gap-8">
                <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-xs font-bold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  童心<br/>未泯
                </div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="var(--secondary)" opacity="0.2"/>
                  <path d="M20 2 A18 18 0 0 1 20 38 A9 9 0 0 1 20 20 A9 9 0 0 0 20 2" fill="var(--secondary)" opacity="0.4"/>
                  <circle cx="20" cy="11" r="3" fill="var(--accent)"/>
                  <circle cx="20" cy="29" r="3" fill="var(--secondary)" opacity="0.6"/>
                </svg>
                <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center text-white text-xs font-bold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  趣味<br/>横生
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
} 