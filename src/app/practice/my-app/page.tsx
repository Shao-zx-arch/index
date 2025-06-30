import Link from 'next/link';
import Image from 'next/image';
import MyAppDemo from "../my-app-demo";
import MyAppHello from "../my-app-hello";

export default function MyAppHome() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] relative">
      {/* 水墨背景 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-6 bg-gradient-to-br from-[var(--secondary)]/15 to-[var(--accent)]" style={{zIndex:0}}></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 rounded-xl border-2 border-[var(--primary)] shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
          {/* 印章角标 */}
          <div className="absolute top-4 right-4 stamp">应用</div>
          
          <div className="flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="My App 示例" 
              width={220} 
              height={140} 
              className="rounded-lg shadow-lg border-2 border-[var(--secondary)]/40" 
              style={{filter:'grayscale(0.1) contrast(1.1)'}}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--primary-dark)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>My App 示例</h2>
            <p className="text-[var(--primary)] mb-2" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>一个简单的 React 应用页面，如初学者之作，展示组件化开发的基础。</p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-[var(--secondary)]/30 text-[var(--primary-dark)] px-3 py-1 rounded-full text-xs border border-[var(--primary)]/30" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>React</span>
              <span className="bg-[var(--primary)]/20 text-[var(--primary-dark)] px-3 py-1 rounded-full text-xs border border-[var(--primary)]/30" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>入门</span>
            </div>
          </div>
        </section>
        
        <section className="max-w-3xl mx-auto bg-white/85 rounded-xl border-2 border-[var(--secondary)] shadow-2xl p-8 relative overflow-hidden">
          {/* 祥云装饰 */}
          <div className="absolute top-4 left-4 opacity-20">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15c3-6 8-6 10 0 3 6 8 6 10 0 3-6 8-6 10 0" stroke="var(--secondary)" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-6 text-[var(--primary-dark)] text-center" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif', letterSpacing:'3px'}}>
            组件演示区
          </h1>
          <p className="text-center text-[var(--primary)] mb-6 italic" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            "积土成山，风雨兴焉；积水成渊，蛟龙生焉"
          </p>
          
          <div className="space-y-6">
            <MyAppDemo />
            <MyAppHello />
          </div>
          
          {/* 底部装饰 */}
          <div className="text-center mt-8">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15c3-6 8-6 10 0 3 6 8 6 10 0 3-6 8-6 10 0 3 6 8 6 10 0" stroke="var(--primary)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </section>
      </main>
    </div>
  );
} 