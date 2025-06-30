'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  useEffect(() => {
    const a = 100;
    // alert(a)
    console.log(a);
    const api_key = 'ssssx-=-dddd';
    console.log(api_key);
    console.log(typeof a, typeof api_key, typeof true);
    const b = '1';
    console.log(a + b);
    console.log(a + Number(b));
    const c = '100';
    console.log(typeof a, typeof c);
    console.log(a == c);
    console.log(a === c);
    // 分支语句
    const current_time = '12:20';
    if (current_time == '12:20') {
      console.log('冲啊！');
    } else {
      console.log('假装学习……');
    }
    // for循环
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
    // while循环
    let hug = 60;
    while (hug > 0) {
      console.log('继续干饭……');
      hug = hug - 10;
    }
    // 函数
    function intro() {
      console.log('你好，我是一个脚本！');
    }
    intro();
    function intro2(content: any) {
      console.log('以下是我介绍的内容： ' + String(content));
    }
    console.log(typeof intro2('这是传入的参数'));
    function intro3(content1: any, content2: any) {
      console.log('以下是我介绍的内容： ' + String(content1) + String(content2));
    }
    intro3('参数1', '参数2', 444);
    function intro4(content: any) {
      console.log(content);
      return content + '这是返回值';
    }
    intro4('带返回值的函数');
    const result = intro4('带返回值的函数');
    console.log(result);
    alert('页面加载完成，查看控制台输出！');
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 古典花纹背景 */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{zIndex:0}}>
        <svg width="384" height="384" viewBox="0 0 384 384" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="flower" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="24" cy="24" r="8" fill="var(--primary)" opacity="0.3"/>
            <path d="M24 16 L32 24 L24 32 L16 24 Z" fill="var(--secondary)" opacity="0.2"/>
          </pattern>
          <rect width="384" height="384" fill="url(#flower)"/>
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
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STSong, SimSun, serif', letterSpacing:'4px'}}>
            古韵新闻
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            以古典之美，传今日之音。HTML与CSS构建的静态新闻页面。
          </p>
          <div className="stamp">新闻</div>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* 主新闻 */}
          <article className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">头条</div>
            
            {/* 古典花边装饰 */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-30"></div>
            
            <header className="mb-6">
              <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-3" style={{fontFamily:'Noto Serif SC, STSong, SimSun, serif', letterSpacing:'2px'}}>
                前端技术日新月异，古韵与现代并存
              </h2>
              <div className="flex items-center gap-4 text-[var(--primary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                <span>发布时间：2024年春</span>
                <span>•</span>
                <span>作者：技术小生</span>
              </div>
            </header>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-[var(--primary-dark)] leading-relaxed mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                在这个数字化的时代，前端技术如春花秋月，日新月异。从最初的HTML静态页面，到如今的React、Vue等现代框架，技术的演进如长河奔流，永不停息。
              </p>
              <p className="text-[var(--primary-dark)] leading-relaxed mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                CSS的发展更是令人叹为观止，从简单的样式定义，到如今的Grid、Flexbox等布局利器，再到CSS-in-JS的新理念，每一次变革都带来了全新的可能。
              </p>
              <blockquote className="border-l-4 border-[var(--secondary)] pl-4 italic text-[var(--primary)] bg-[var(--accent)]/30 p-4 rounded-r-lg" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                "技术如水，因器而形。唯有不断学习，方能与时俱进。"
              </blockquote>
            </div>
          </article>

          {/* 次要新闻列表 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">要闻</div>
            
            <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STSong, SimSun, serif'}}>
              技术要闻
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STSong, SimSun, serif'}}>
                  Next.js 15 正式发布
                </h4>
                <p className="text-[var(--primary)] text-sm mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  新版本带来了更强大的性能优化和开发体验提升...
                </p>
                <div className="text-xs text-[var(--secondary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  2024年春 • 技术资讯
                </div>
              </article>
              
              <article className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STSong, SimSun, serif'}}>
                  CSS Grid 布局最佳实践
                </h4>
                <p className="text-[var(--primary)] text-sm mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  掌握Grid布局的精髓，让页面排版如行云流水...
                </p>
                <div className="text-xs text-[var(--secondary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  2024年春 • 技术教程
                </div>
              </article>
              
              <article className="bg-[var(--primary)]/10 p-6 rounded-lg border border-[var(--primary)]/30 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STSong, SimSun, serif'}}>
                  TypeScript 5.0 新特性
                </h4>
                <p className="text-[var(--primary)] text-sm mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  类型系统的进一步完善，开发效率再次提升...
                </p>
                <div className="text-xs text-[var(--secondary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  2024年春 • 语言更新
                </div>
              </article>
              
              <article className="bg-[var(--accent)]/40 p-6 rounded-lg border border-[var(--primary-dark)]/20 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STSong, SimSun, serif'}}>
                  响应式设计新趋势
                </h4>
                <p className="text-[var(--primary)] text-sm mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  移动优先的设计理念，适配多端的艺术...
                </p>
                <div className="text-xs text-[var(--secondary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  2024年春 • 设计趋势
                </div>
              </article>
            </div>
          </section>

          {/* 底部装饰 */}
          <div className="text-center py-8">
            <div className="flex justify-center items-center gap-6">
              <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 20c4-8 12-8 15 0 4 8 12 8 15 0 4-8 12-8 15 0" stroke="var(--primary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
              <p className="text-[var(--primary)] italic" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                &ldquo;学而时习之，不亦说乎&rdquo;
              </p>
              <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 20c4-8 12-8 15 0 4 8 12 8 15 0 4-8 12-8 15 0" stroke="var(--primary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
} 