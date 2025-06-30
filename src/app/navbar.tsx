import Link from "next/link";

export default function DdddddNavbar() {
  return (
    <nav className="bg-[var(--primary-dark)] text-[var(--accent)] p-4 shadow-md border-b-4 border-[var(--primary)] relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-[var(--secondary)] transition-colors tracking-widest" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
          作业平台 <span className="stamp ml-2">印</span>
        </Link>
        <div className="space-x-6 text-lg flex items-center">
          <Link href="/" className="hover:text-[var(--secondary)] transition-colors">首页</Link>
          <Link href="/archive" className="hover:text-[var(--secondary)] transition-colors">归档</Link>
          {/* 祥云SVG装饰 */}
          <span className="ml-4 hidden md:inline-block align-middle">
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12c2-4 8-4 10 0 2 4 8 4 10 0 2-4 8-4 10 0" stroke="#cad3dc" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
} 