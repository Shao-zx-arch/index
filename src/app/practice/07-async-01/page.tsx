'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [tableHtml, setTableHtml] = useState('');

  useEffect(() => {
    setTimeout(() => {
      console.log('111');
    }, 2000);
    console.log('222');

    function getSomething() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('1111');
          resolve();
        }, 1000);
      });
    }
    getSomething().then(() => {
      console.log('2222');
    });

    async function getSomething2() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('111111');
          resolve();
        }, 1000);
      });
    }
    (async () => {
      await getSomething2();
      console.log('222222');
    })();

    async function getAllCommitDates(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const commits = await response.json();
        // 提取每个提交的日期
        const dates = commits.map((commit: any) => commit.commit.author.date);
        return dates;
      } catch (error) {
        console.error('获取提交日期失败:', error);
        return [];
      }
    }

    function showCommitDatesTable(dates: string[]) {
      let html = '<table class="w-full text-left border-collapse border border-cyan-700 text-slate-200">';
      html += '<thead><tr class="bg-cyan-900/60"><th class="p-2 border border-cyan-700">序号</th><th class="p-2 border border-cyan-700">提交日期</th></tr></thead><tbody>';
      dates.forEach((date, idx) => {
        html += `<tr><td class="p-2 border border-cyan-700">${idx + 1}</td><td class="p-2 border border-cyan-700">${date}</td></tr>`;
      });
      html += '</tbody></table>';
      setTableHtml(html);
    }

    getAllCommitDates('yangjh-xbmu', 'Web-develop')
      .then(dates => {
        console.log('所有提交日期:', JSON.stringify(dates));
        showCommitDatesTable(dates);
      });
  }, []);

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
      
      {/* 流水装饰 */}
      <div className="absolute bottom-16 left-16 w-48 h-12 opacity-6" style={{zIndex:0}}>
        <svg width="192" height="48" viewBox="0 0 192 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24 Q48 12 96 24 T192 24" stroke="var(--secondary)" strokeWidth="3" fill="none" opacity="0.4"/>
          <path d="M0 30 Q48 18 96 30 T192 30" stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.3"/>
          <path d="M0 18 Q48 6 96 18 T192 18" stroke="var(--secondary)" strokeWidth="1" fill="none" opacity="0.2"/>
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
            异步编程初探
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            Promise与async/await如太极阴阳，异步有序，静待花开，编程之禅意。
          </p>
          <div className="stamp">异步</div>
        </header>

        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Promise基础概念 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">承诺</div>
            
            {/* 太极装饰线 */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] opacity-50"></div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              Promise之道
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  承诺三态
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <span className="text-[var(--primary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      <strong>Pending</strong> - 待定如花蕾
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <span className="text-[var(--primary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      <strong>Fulfilled</strong> - 成功如花开
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <span className="text-[var(--primary)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      <strong>Rejected</strong> - 失败如花落
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-[var(--primary)]/10 rounded-lg">
                  <code className="text-sm text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    const promise = new Promise((resolve, reject) => {'{'}
                    <br />
                    &nbsp;&nbsp;// 如种子待发芽
                    <br />
                    {'}'});
                  </code>
                </div>
              </div>
              
              <div className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  链式调用
                </h3>
                <p className="text-[var(--primary)] mb-4 leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  如流水相连，一环扣一环，then与catch相伴，构成异步之美。
                </p>
                
                <div className="p-4 bg-[var(--secondary)]/10 rounded-lg">
                  <code className="text-sm text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    promise
                    <br />
                    &nbsp;&nbsp;.then(result =&gt; {'{'}...{'}'})
                    <br />
                    &nbsp;&nbsp;.catch(error =&gt; {'{'}...{'}'})
                    <br />
                    &nbsp;&nbsp;.finally(() =&gt; {'{'}...{'}'});
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* 异步演示区 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">演示</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-8 text-center border-b-2 border-[var(--secondary)] pb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              异步之美演示
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* 延迟执行 */}
              <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20 text-center">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  延迟之美
                </h4>
                <div className="text-2xl mb-4" id="delay-result" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  ⏳
                </div>
                <button 
                  className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                  onClick={() => {
                    const result = document.getElementById('delay-result');
                    if (result) {
                      result.textContent = '等待中...';
                      setTimeout(() => {
                        result.textContent = '🌸 花开了';
                      }, 2000);
                    }
                  }}
                >
                  静待花开
                </button>
              </div>
              
              {/* Promise状态 */}
              <div className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30 text-center">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  承诺状态
                </h4>
                <div className="text-2xl mb-4" id="promise-status" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  🌱
                </div>
                <button 
                  className="bg-[var(--secondary)] text-[var(--primary-dark)] px-4 py-2 rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors mr-2"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                  onClick={() => {
                    const status = document.getElementById('promise-status');
                    if (status) {
                      status.textContent = '⏳';
                      const promise = new Promise((resolve) => {
                        setTimeout(() => resolve('success'), 1500);
                      });
                      promise.then(() => {
                        status.textContent = '✅ 成功';
                      });
                    }
                  }}
                >
                  成功
                </button>
                <button 
                  className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                  onClick={() => {
                    const status = document.getElementById('promise-status');
                    if (status) {
                      status.textContent = '❌ 失败';
                    }
                  }}
                >
                  失败
                </button>
              </div>
              
              {/* 链式调用 */}
              <div className="bg-[var(--primary)]/10 p-6 rounded-lg border border-[var(--primary)]/30 text-center">
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  链式流水
                </h4>
                <div className="text-sm mb-4 space-y-1" id="chain-result" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  <div>🌊 准备开始</div>
                </div>
                <button 
                  className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
                  style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                  onClick={() => {
                    const result = document.getElementById('chain-result');
                    if (result) {
                      result.innerHTML = '<div>🌊 第一步...</div>';
                      
                      Promise.resolve('第一步完成')
                        .then(data => {
                          result.innerHTML += '<div>🌊 第二步...</div>';
                          return '第二步完成';
                        })
                        .then(data => {
                          result.innerHTML += '<div>🌊 第三步...</div>';
                          return '第三步完成';
                        })
                        .then(data => {
                          result.innerHTML += '<div>✨ 流水完成</div>';
                        });
                    }
                  }}
                >
                  开始流水
                </button>
              </div>
            </div>
          </section>

          {/* Async/Await 概念 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary-dark)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">同步</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              Async/Await 之雅
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
                  <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    同步之美
                  </h3>
                  <p className="text-[var(--primary)] leading-relaxed mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    async/await 让异步代码如同步般优雅，如行云流水，自然而然。
                  </p>
                  <div className="p-4 bg-[var(--primary)]/10 rounded-lg">
                    <code className="text-sm text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      async function 等待花开() {'{'}
                      <br />
                      &nbsp;&nbsp;const 结果 = await 承诺();
                      <br />
                      &nbsp;&nbsp;return 结果;
                      <br />
                      {'}'}
                    </code>
                  </div>
                </div>
                
                <div className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30">
                  <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    异常处理
                  </h3>
                  <p className="text-[var(--primary)] leading-relaxed mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    try/catch 如护花使者，守护异步执行的每一步。
                  </p>
                  <div className="p-4 bg-[var(--secondary)]/10 rounded-lg">
                    <code className="text-sm text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      try {'{'}
                      <br />
                      &nbsp;&nbsp;await 可能失败的操作();
                      <br />
                      {'}'} catch (错误) {'{'}
                      <br />
                      &nbsp;&nbsp;处理错误();
                      <br />
                      {'}'}
                    </code>
                  </div>
                </div>
              </div>
              
              <div className="bg-[var(--primary)]/10 p-6 rounded-lg border border-[var(--primary)]/30">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  实时演示
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 rounded-lg min-h-[100px]">
                    <div id="async-demo" className="text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      点击按钮开始异步之旅...
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-colors flex-1"
                      style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                      onClick={async () => {
                        const demo = document.getElementById('async-demo');
                        if (demo) {
                          demo.innerHTML = '🌱 开始异步旅程...<br/>';
                          
                          try {
                            await new Promise(resolve => {
                              setTimeout(() => {
                                demo.innerHTML += '🌿 第一阶段完成...<br/>';
                                resolve('success');
                              }, 1000);
                            });
                            
                            await new Promise(resolve => {
                              setTimeout(() => {
                                demo.innerHTML += '🌸 第二阶段完成...<br/>';
                                resolve('success');
                              }, 1000);
                            });
                            
                            demo.innerHTML += '✨ 异步之旅圆满结束！';
                          } catch (error) {
                            demo.innerHTML += '❌ 旅程中遇到了困难...';
                          }
                        }
                      }}
                    >
                      开始旅程
                    </button>
                    <button 
                      className="bg-[var(--secondary)] text-[var(--primary-dark)] px-4 py-2 rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors"
                      style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                      onClick={() => {
                        const demo = document.getElementById('async-demo');
                        if (demo) {
                          demo.textContent = '点击按钮开始异步之旅...';
                        }
                      }}
                    >
                      重置
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </section>

          {/* 禅意格言区 */}
          <section className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">禅意</div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                异步编程禅语
              </h3>
              <blockquote className="text-xl text-[var(--primary)] italic leading-relaxed mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                &ldquo;异步如流水，不争先后，自有其序。<br/>
                Promise如种子，await如静待，花开自有时。<br/>
                编程之道，在于顺应自然，不急不躁。&rdquo;
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
                  异步<br/>之道
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