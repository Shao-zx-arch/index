"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function EmbedDemoPage() {
  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    // 2秒后隐藏说明区域
    const timer = setTimeout(() => {
      setShowDescription(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      <main className="flex-grow w-full h-full relative z-10">
        {/* 固定顶部导航 */}
        <div className="fixed top-0 left-0 w-full z-20 bg-white/90 backdrop-blur-md border-b border-[var(--primary)]/20 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-[var(--primary)] hover:text-[var(--primary-dark)] text-xl font-bold transition-colors" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                ← 返回首页
              </Link>
              <span className="text-lg md:text-2xl font-bold text-[var(--primary-dark)] tracking-wide" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
                智能问答雅集
              </span>
            </div>
            <div className="stamp text-sm">雅集</div>
          </div>
        </div>

        {/* 说明区域 - 2秒后自动隐藏 */}
        {showDescription && (
          <section className="max-w-3xl mx-auto mt-24 mb-6 bg-white/90 backdrop-blur-md border-2 border-[var(--primary)] rounded-xl shadow-lg p-6 relative z-20 transform transition-all duration-500 ease-in-out animate-fade-in">
            <div className="absolute top-4 right-4 stamp">说明</div>
            <h2 className="text-xl font-bold text-[var(--primary-dark)] mb-3 border-l-4 border-[var(--primary)] pl-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              雅集说明
            </h2>
            <ul className="text-[var(--primary)] space-y-2 mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              <li className="hover:text-[var(--primary-dark)] transition-colors duration-200">本雅集演示了如何在Next.js页面中嵌入第三方智能问答服务，如古人雅集论道。</li>
              <li className="hover:text-[var(--primary-dark)] transition-colors duration-200">顶部采用中式美学设计，iframe区域提供全屏沉浸式体验。</li>
              <li className="hover:text-[var(--primary-dark)] transition-colors duration-200">如需体验交互，请直接在下方问答区输入问题，如与智者对话。</li>
            </ul>
            <div className="text-xs text-[var(--secondary)] italic" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
              说明区域将在2秒后自动隐藏...
            </div>
          </section>
        )}

        {/* 全屏iframe */}
        <iframe
          src="https://ai.youdao.com/saas/qanything/#/home"
          title="智能问答系统"
          width="100%"
          height="100%"
          className="fixed left-0 w-full z-10"
          style={{
            top: showDescription ? 112 : 60, // 根据说明区域显示状态调整位置
            height: showDescription ? 'calc(100vh - 112px)' : 'calc(100vh - 60px)',
            border: '2px solid var(--primary)',
            borderRadius: '8px',
            background: 'white',
            transition: 'all 0.5s ease-in-out',
          }}
          allowFullScreen
        />
      </main>

      {/* 添加一些装饰性元素 */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
} 