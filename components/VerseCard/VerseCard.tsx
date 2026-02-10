import { cn } from '@/lib/utils'
import { getVerseOfTheDay } from '@/lib/bibleVerse'

interface VerseCardProps {
    className?: string
}

const VerseCard = async ({ className }: VerseCardProps) => {
    const verse: any = await getVerseOfTheDay()

    console.log(verse)
    return (
        <section className={cn(
            "relative max-w-2xl w-full p-10 md:p-16 mx-auto text-center",
            "bg-white/40 backdrop-blur-md rounded-[40px]",
            "border border-white/20 shadow-2xl shadow-stone-200/50",
            "transition-all duration-700 animate-in fade-in zoom-in",
            className
        )}>
            <div className="mb-10 flex flex-col items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                    {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </span>
                <div className="w-6 h-[1px] bg-stone-200" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans">
                    {verse.book.group}
                </span>
            </div>
            <p className="text-stone-800 font-serif text-[clamp(1.25rem, 5vw,2.5rem)] md:text-4xl italic leading-relaxed mb-8">
                {verse.text}
            </p>
            <h2 className="text-stone-500 font-sans text-xs md:text-sm tracking-[0.3em] uppercase">
                — {verse.book.name} {verse.chapter}:{verse.number}
            </h2>

        </section>
    )
}

export default VerseCard