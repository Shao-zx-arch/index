'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [lastPushDate, setLastPushDate] = useState<string | null>(null);

  useEffect(() => {
    async function getSomething() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('111111');
          resolve();
        }, 2000);
      });
    }
    getSomething().then(
      result => console.log('Async function finished successfully with result:', result)
    );
    console.log('2222222');

    async function getLastPushedDate(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const data = await response.json();
        // pushed_at 字段即为最后一次推送日期
        return data.pushed_at as string;
      } catch (error) {
        console.error('获取推送日期失败:', error);
        return null;
      }
    }

    getLastPushedDate('yangjh-xbmu', 'Web-develop').then(date => {
      console.log('最后一次推送日期:', date);
      setLastPushDate(date);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 信使传书背景装饰 */}
      <div className="absolute top-16 right-16 w-56 h-56 opacity-8" style={{zIndex:0}}>
        <svg width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="60" width="144" height="104" rx="8" fill="var(--primary)" opacity="0.1" stroke="var(--secondary)" strokeWidth="2" opacity="0.2"/>
          <path d="M40 60 L112 120 L184 60" stroke="var(--primary)" strokeWidth="3" fill="none" opacity="0.3"/>
          <circle cx="112" cy="32" r="12" fill="var(--secondary)" opacity="0.2"/>
          <path d="M100 32 L124 32 M112 20 L112 44" stroke="var(--primary)" strokeWidth="2" opacity="0.3"/>
        </svg>
      </div>
      
      {/* 信息流装饰 */}
      <div className="absolute bottom-12 left-12 w-64 h-32 opacity-6" style={{zIndex:0}}>
        <svg width="256" height="128" viewBox="0 0 256 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 64 Q80 20 140 64 T240 64" stroke="var(--secondary)" strokeWidth="2" fill="none" opacity="0.4"/>
          <circle cx="60" cy="50" r="4" fill="var(--primary)" opacity="0.3"/>
          <circle cx="120" cy="78" r="4" fill="var(--primary)" opacity="0.3"/>
          <circle cx="180" cy="50" r="4" fill="var(--primary)" opacity="0.3"/>
          <text x="20" y="100" fontSize="12" fill="var(--secondary)" opacity="0.4">API</text>
          <text x="200" y="100" fontSize="12" fill="var(--secondary)" opacity="0.4">Data</text>
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
            Fetch API雅韵
          </h1>
          <p className="text-lg text-[var(--primary)] max-w-3xl mx-auto mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            fetch API如信使传书，异步数据获取实践，远程调用，信息流转如诗。
          </p>
          <div className="stamp">传书</div>
        </header>

        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Fetch API 基础概念 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">基础</div>
            
            {/* 信使装饰线 */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] opacity-50"></div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--primary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              Fetch之道
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  基本用法
                </h3>
                <p className="text-[var(--primary)] mb-4 leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  如信使出发，携带请求，远赴目标，获取信息。
                </p>
                <div className="p-4 bg-[var(--primary)]/10 rounded-lg text-sm">
                  <code style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    fetch('/api/data')
                    <br />
                    .then(response =&gt; response.json())
                    <br />
                    .then(data =&gt; console.log(data));
                  </code>
                </div>
              </div>
              
              <div className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  请求配置
                </h3>
                <p className="text-[var(--primary)] mb-4 leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  如信函格式，方法、头部、内容，一一配置。
                </p>
                <div className="p-4 bg-[var(--secondary)]/10 rounded-lg text-sm">
                  <code style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    fetch(url, {'{'}
                    <br />
                    &nbsp;&nbsp;method: 'POST',
                    <br />
                    &nbsp;&nbsp;headers: {'{'}...{'}'},
                    <br />
                    &nbsp;&nbsp;body: JSON.stringify(data)
                    <br />
                    {'}'})
                  </code>
                </div>
              </div>
              
              <div className="bg-[var(--primary)]/10 p-6 rounded-lg border border-[var(--primary)]/30">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  错误处理
                </h3>
                <p className="text-[var(--primary)] mb-4 leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  如信使遇险，需有应对，异常捕获，优雅处理。
                </p>
                <div className="p-4 bg-[var(--primary)]/10 rounded-lg text-sm">
                  <code style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                    .catch(error =&gt; {'{'}
                    <br />
                    &nbsp;&nbsp;console.error('传书失败:', error);
                    <br />
                    {'}'})
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* API 调用演示区 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">演示</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-8 text-center border-b-2 border-[var(--secondary)] pb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              API调用实战演示
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 模拟API调用 */}
              <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  模拟数据获取
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 rounded-lg min-h-[120px]">
                    <div id="api-result" className="text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      点击按钮开始数据获取之旅...
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-colors flex-1"
                      style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                      onClick={async () => {
                        const result = document.getElementById('api-result');
                        if (result) {
                          result.innerHTML = '📤 信使出发中...<br/>';
                          
                          try {
                            // 模拟API调用
                            await new Promise(resolve => setTimeout(resolve, 1500));
                            
                            const mockData = {
                              message: '数据获取成功',
                              timestamp: new Date().toLocaleString('zh-CN'),
                              data: {
                                title: '前端开发之美',
                                content: '如诗如画的代码艺术',
                                author: '匠心开发者'
                              }
                            };
                            
                            result.innerHTML = `
                              📥 信使归来，携带数据：<br/>
                              <div class="mt-2 p-2 bg-green-100 rounded text-sm">
                                <strong>消息：</strong>${mockData.message}<br/>
                                <strong>时间：</strong>${mockData.timestamp}<br/>
                                <strong>标题：</strong>${mockData.data.title}<br/>
                                <strong>内容：</strong>${mockData.data.content}<br/>
                                <strong>作者：</strong>${mockData.data.author}
                              </div>
                            `;
                          } catch (error) {
                            result.innerHTML = '❌ 信使传书失败，请稍后重试...';
                          }
                        }
                      }}
                    >
                      获取数据
                    </button>
                    <button 
                      className="bg-[var(--secondary)] text-[var(--primary-dark)] px-4 py-2 rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors"
                      style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                      onClick={() => {
                        const result = document.getElementById('api-result');
                        if (result) {
                          result.textContent = '点击按钮开始数据获取之旅...';
                        }
                      }}
                    >
                      重置
                    </button>
                  </div>
                </div>
              </div>
              
              {/* 状态码演示 */}
              <div className="bg-[var(--secondary)]/20 p-6 rounded-lg border border-[var(--secondary)]/30">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  状态码含义
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-green-100 rounded">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      <strong>200</strong> - 成功如愿，信息到达
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-yellow-100 rounded">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      <strong>404</strong> - 路径迷失，目标不存
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-red-100 rounded">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      <strong>500</strong> - 服务器忙，暂时无法应答
                    </span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button 
                    className="bg-[var(--secondary)] text-[var(--primary-dark)] px-4 py-2 rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors w-full"
                    style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                    onClick={() => {
                      const statusCodes = [200, 404, 500];
                      const messages = ['✅ 传书成功', '❓ 地址不明', '❌ 服务繁忙'];
                      const randomIndex = Math.floor(Math.random() * statusCodes.length);
                      alert(`状态码: ${statusCodes[randomIndex]} - ${messages[randomIndex]}`);
                    }}
                  >
                    模拟状态码
                  </button>
                </div>
              </div>
            </div>
        </section>

          {/* 实际API集成 */}
          <section className="bg-white/85 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--primary-dark)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">实战</div>
            
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6 border-l-4 border-[var(--secondary)] pl-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              真实API调用
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-[var(--accent)]/30 p-6 rounded-lg border border-[var(--primary)]/20">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  随机诗词获取
                </h3>
                <p className="text-[var(--primary)] mb-4 leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  从诗词宝库中随机获取一首诗词，如开启一卷古籍。
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 rounded-lg min-h-[100px]">
                    <div id="poem-result" className="text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      点击按钮获取随机诗词...
                    </div>
                  </div>
                  <button 
                    className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-colors w-full"
                    style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                    onClick={async () => {
                      const result = document.getElementById('poem-result');
                      if (result) {
                        result.innerHTML = '📚 正在翻阅诗词宝库...<br/>';
                        
                        try {
                          // 模拟诗词API调用（实际项目中可以调用真实的诗词API）
                          await new Promise(resolve => setTimeout(resolve, 1000));
                          
                          const poems = [
                            {
                              title: '静夜思',
                              author: '李白',
                              content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。'
                            },
                            {
                              title: '春晓',
                              author: '孟浩然', 
                              content: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。'
                            },
                            {
                              title: '登鹳雀楼',
                              author: '王之涣',
                              content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。'
                            }
                          ];
                          
                          const randomPoem = poems[Math.floor(Math.random() * poems.length)];
                          
                          result.innerHTML = `
                            📜 获取到诗词：<br/>
                            <div class="mt-2 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                              <div class="font-bold text-lg">${randomPoem.title}</div>
                              <div class="text-sm text-gray-600 mb-2">作者：${randomPoem.author}</div>
                              <div class="leading-relaxed">${randomPoem.content}</div>
                            </div>
                          `;
                        } catch (error) {
                          result.innerHTML = '❌ 诗词获取失败，请稍后重试...';
                        }
                      }
                    }}
                  >
                    获取诗词
                  </button>
                </div>
              </div>
              
              <div className="bg-[var(--primary)]/10 p-6 rounded-lg border border-[var(--primary)]/30">
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  天气信息查询
                </h3>
                <p className="text-[var(--primary)] mb-4 leading-relaxed" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  查询天气信息，如观天象，知晴雨。
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 rounded-lg min-h-[100px]">
                    <div id="weather-result" className="text-[var(--primary-dark)]" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                      点击按钮查询天气信息...
                    </div>
                  </div>
                  <button 
                    className="bg-[var(--secondary)] text-[var(--primary-dark)] px-4 py-2 rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors w-full"
                    style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
                    onClick={async () => {
                      const result = document.getElementById('weather-result');
                      if (result) {
                        result.innerHTML = '🌤️ 正在观测天象...<br/>';
                        
                        try {
                          // 模拟天气API调用
                          await new Promise(resolve => setTimeout(resolve, 1200));
                          
                          const weatherData = {
                            city: '北京',
                            temperature: Math.floor(Math.random() * 30) + 5,
                            weather: ['晴', '多云', '小雨', '阴'][Math.floor(Math.random() * 4)],
                            humidity: Math.floor(Math.random() * 40) + 40,
                            wind: ['微风', '轻风', '和风'][Math.floor(Math.random() * 3)]
                          };
                          
                          const weatherIcons = {
                            '晴': '☀️',
                            '多云': '⛅',
                            '小雨': '🌧️',
                            '阴': '☁️'
                          };
                          
                          result.innerHTML = `
                            🌍 天气信息：<br/>
                            <div class="mt-2 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                              <div class="flex items-center gap-2 mb-2">
                                <span class="text-2xl">${weatherIcons[weatherData.weather]}</span>
                                <span class="font-bold">${weatherData.city}</span>
                              </div>
                              <div class="space-y-1 text-sm">
                                <div>温度：${weatherData.temperature}°C</div>
                                <div>天气：${weatherData.weather}</div>
                                <div>湿度：${weatherData.humidity}%</div>
                                <div>风力：${weatherData.wind}</div>
                              </div>
                            </div>
                          `;
                        } catch (error) {
                          result.innerHTML = '❌ 天气信息获取失败，请稍后重试...';
                        }
                      }
                    }}
                  >
                    查询天气
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 信使格言区 */}
          <section className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[var(--secondary)] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 stamp">格言</div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                API调用箴言
              </h3>
              <blockquote className="text-xl text-[var(--primary)] italic leading-relaxed mb-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                &ldquo;API如信使，传书千里外。<br/>
                Fetch如鸿雁，载信往来快。<br/>
                数据流转间，编程见真章。&rdquo;
              </blockquote>
              
              {/* 装饰性信使元素 */}
              <div className="flex justify-center items-center gap-8">
                <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="8" width="30" height="20" rx="2" fill="var(--primary)" opacity="0.2" stroke="var(--secondary)" strokeWidth="1"/>
                  <path d="M10 8 L25 18 L40 8" stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.4"/>
                </svg>
                <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white text-xs font-bold transform rotate-6" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                  信使<br/>传书
                </div>
                <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="8" width="30" height="20" rx="2" fill="var(--secondary)" opacity="0.2" stroke="var(--primary)" strokeWidth="1"/>
                  <path d="M10 8 L25 18 L40 8" stroke="var(--secondary)" strokeWidth="2" fill="none" opacity="0.4"/>
                </svg>
              </div>
          </div>
        </section>

        </div>
      </main>
    </div>
  );
} 