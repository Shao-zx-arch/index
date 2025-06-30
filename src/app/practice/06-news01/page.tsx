'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 类和对象
    class Student {
      name: string;
      age: number;
      school: string;
      grade: number;
      constructor(name: string, age: number, school: string, grade: number) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.grade = grade;
      }
      learn(subject = '语文') {
        console.log(`${this.name}正在学习${subject}，真棒！`);
      }
      exam() {
        console.log(`${this.name} 正在考试`);
      }
    }
    const xiaoming = new Student('小明', 7, '实验小学', 1);
    xiaoming.learn('英语');
    xiaoming.exam();

    class Undergraduate extends Student {
      major: string;
      experience: number;
      constructor(name: string, age: number, school: string, grade: number, major: string, experience: number) {
        super(name, age, school, grade);
        this.major = major;
        this.experience = experience;
      }
      intern(corp: string) {
        console.log(`${this.name}在${corp}实习，获得经验值1000`);
        console.log(super.exam());
      }
    }
    const xiaoming2 = new Undergraduate('小明', 17, '科技大学', 1, '新闻学', 0);
    xiaoming2.intern('腾讯');

    // 回调函数，函数作为参数传递给另一个函数
    console.log('111111');
    setTimeout(function () { console.log('222222'); }, 1000);
    console.log('333333');

    // DOM 操作
    if (h1Ref.current) {
      console.log(h1Ref.current);
      h1Ref.current.innerHTML = '这是来自脚本的动态内容（可点击）';
      h1Ref.current.style.color = '#38bdf8';
    }
    if (pRef.current) {
      pRef.current.onclick = function () {
        alert('你好啊！你点击了段落！');
      };
    }
    alert('页面加载完成');
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 古琴背景装饰 */}
      <div className="absolute top-10 right-10 w-48 h-48 opacity-8" style={{zIndex:0}}>
        <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="60" width="152" height="72" rx="36" fill="var(--primary)" opacity="0.1"/>
          <line x1="30" y1="96" x2="162" y2="96" stroke="var(--secondary)" strokeWidth="2" opacity="0.3"/>
          <line x1="30" y1="106" x2="162" y2="106" stroke="var(--secondary)" strokeWidth="1" opacity="0.2"/>
          <line x1="30" y1="86" x2="162" y2="86" stroke="var(--secondary)" strokeWidth="1" opacity="0.2"/>
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
            交互新闻雅韵
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            JavaScript赋予页面灵动之美，如古琴弹奏，动静相宜，交互自然。
          </p>
          <div className="stamp">交互</div>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* 互动新闻区 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">灵动</div>
            
            {/* 琴弦装饰 */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent opacity-40"></div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              今日要闻
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  前端技术春风化雨
                </h3>
                <p className="text-[var(--primary)] mb-4 leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  新技术如春风化雨，润物无声。React、Vue等框架的发展，为前端开发带来了新的生机...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--secondary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    2024年春 • 技术观察
                  </span>
                  <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm hover:bg-[var(--primary-dark)] transition-colors" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    详阅
                  </button>
                </div>
              </article>
              
              <article className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  CSS艺术之道
                </h3>
                <p className="text-[var(--primary)] mb-4 leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  CSS如画家之笔，能绘出千变万化的页面之美。从简单的样式到复杂的动画，皆有其妙...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--secondary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    2024年春 • 设计美学
                  </span>
                  <button className="bg-[var(--secondary)] text-[var(--primary-dark)] px-4 py-2 rounded-full text-sm hover:bg-[var(--primary)] hover:text-white transition-colors" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    品读
                  </button>
                </div>
              </article>
            </div>
          </section>

          {/* 交互演示区 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">演示</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              JavaScript交互演示
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* 点击计数器 */}
              <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20 text-center">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  点击计数
                </h4>
                <div className="text-3xl font-bold text-[var(--primary)] mb-4" id="counter" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  0
                </div>
                <button 
                  className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                  onClick={() => {
                    const counter = document.getElementById('counter');
                    if (counter) {
                      const current = parseInt(counter.textContent || '0');
                      counter.textContent = (current + 1).toString();
                    }
                  }}
                >
                  点击增加
                </button>
              </div>
              
              {/* 颜色变换 */}
              <div className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30 text-center">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  色彩变幻
                </h4>
                <div 
                  className="w-24 h-24 mx-auto mb-4 rounded-full transition-colors duration-500 cursor-pointer border-2 border-[var(--primary)]"
                  id="colorBox"
                  style={{backgroundColor: 'var(--primary)'}}
                  onClick={() => {
                    const box = document.getElementById('colorBox');
                    if (box) {
                      const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)', 'var(--primary-dark)'];
                      const current = box.style.backgroundColor;
                      const currentIndex = colors.findIndex(color => current.includes(color.slice(4, -1)));
                      const nextIndex = (currentIndex + 1) % colors.length;
                      box.style.backgroundColor = colors[nextIndex];
                    }
                  }}
                ></div>
                <p className="text-[var(--primary)] text-sm" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  点击圆圈变色
                </p>
              </div>
              
              {/* 文字动画 */}
              <div className="bg-[var(--primary)]/10 p-6 rounded-lg border border-[var(--primary)]/30 text-center">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  文字律动
                </h4>
                <div 
                  className="text-xl font-bold text-[var(--primary)] mb-4 transition-all duration-300 cursor-pointer"
                  id="animText"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                  onMouseEnter={() => {
                    const text = document.getElementById('animText');
                    if (text) {
                      text.style.transform = 'scale(1.2) rotate(5deg)';
                      text.style.color = 'var(--secondary)';
                    }
                  }}
                  onMouseLeave={() => {
                    const text = document.getElementById('animText');
                    if (text) {
                      text.style.transform = 'scale(1) rotate(0deg)';
                      text.style.color = 'var(--primary)';
                    }
                  }}
                >
                  诗韵悠扬
                </div>
                <p className="text-[var(--primary)] text-sm" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  悬停观其变
                </p>
              </div>
            </div>
          </section>

          {/* 古典诗句区 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary-dark)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">诗韵</div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                技术诗韵
              </h3>
              <blockquote className="text-lg text-[var(--primary)] italic leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                &ldquo;代码如诗，逻辑如韵。<br/>
                JavaScript舞动，页面生辉。<br/>
                交互之美，在于心与技的完美融合。&rdquo;
              </blockquote>
              
              {/* 装饰性古典元素 */}
              <div className="flex justify-center items-center mt-8 gap-6">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15c3-6 8-6 10 0 3 6 8 6 10 0 3-6 8-6 10 0" stroke="var(--primary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-xs font-bold" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  JS
                </div>
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15c3-6 8-6 10 0 3 6 8 6 10 0 3-6 8-6 10 0" stroke="var(--primary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
          </div>
        </section>

        </div>
      </main>
    </div>
  );
} 