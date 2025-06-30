import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md text-white p-4 shadow-lg w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-cyan-400 transition-colors duration-300 tracking-wider">
          作业平台
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:text-cyan-400 transition-colors duration-300">首页</Link>
          <Link href="/archive" className="hover:text-cyan-400 transition-colors duration-300">归档</Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--accent)] text-[var(--primary-dark)] items-center overflow-hidden relative">
      {/* 水墨晕染背景 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{background:'url(/public/ink-bg.svg) center/cover no-repeat', opacity:0.12, zIndex:0}}></div>
      {/* 祥云渐变背景 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-10 -z-10 bg-gradient-to-b from-[var(--secondary)] via-[var(--accent)] to-transparent rounded-full blur-3xl"></div>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 pt-28 w-full z-10">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--primary-dark)] mb-6 drop-shadow-lg" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif', letterSpacing:'4px'}}>
            《中式前端美学》
          </h1>
          <p className="text-lg md:text-xl text-[var(--primary)] max-w-3xl mx-auto tracking-wide" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>
            以代码为笔，绘中式之韵。<br/>感受技术与美学的交融。
          </p>
        </header>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>
      <WakaTimeStats />
    </div>
  );
}
