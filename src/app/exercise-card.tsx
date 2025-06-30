import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 rounded-t-lg overflow-hidden border-b-4 border-[var(--primary)]" style={{boxShadow:'0 4px 24px #0a153322'}}>
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover', filter: 'grayscale(0.2) contrast(1.1)' }}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          {/* 水墨角标 */}
          <div className="absolute top-2 right-2 stamp">作业</div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow bg-[var(--accent)] border-l-4 border-[var(--primary-dark)] rounded-b-lg" style={{boxShadow:'0 2px 12px #1a336b22'}}>
        <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-3" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>{title}</h3>
        <p className="text-[var(--primary)] text-sm mb-4 h-20 overflow-y-auto flex-grow" style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}>{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-[var(--secondary)] text-[var(--primary-dark)] text-xs font-medium mr-2 px-3 py-1 rounded-full border border-[var(--primary)]"
                style={{fontFamily:'Noto Serif SC, STKaiti, KaiTi, serif'}}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
           <div className="font-medium text-[var(--primary)] group-hover:text-[var(--primary-dark)] transition-colors duration-300">
             查看练习 &rarr;
           </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group rounded-lg overflow-hidden border-2 border-[var(--primary-dark)] bg-white/60" style={{boxShadow:'0 6px 32px #0a153322'}}>
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
          {cardContent}
        </Link>
      ) : (
        <div className="flex flex-col h-full">{cardContent}</div>
      )}
    </div>
  );
} 