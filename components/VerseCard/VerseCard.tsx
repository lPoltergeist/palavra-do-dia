import { cn } from '@/lib/utils'
import { getVerseOfTheDay } from '@/lib/bibleVerse'
import VerseActions from '../VerseActions/VerseActions'
import PlayVerseAudio from '../PlayVerseAudio/PlayVerseAudio'

interface VerseCardProps {
    className?: string
}

const VerseCard = async ({ className }: VerseCardProps) => {
    const { audioUrl, ...verse }: any = await getVerseOfTheDay()

    return (
        <div className="flex flex-col items-center gap-6">
            <section className={cn(
                "relative max-w-2xl w-full p-10 md:p-16 mx-auto text-center",
                "bg-[#e5e2db] backdrop-blur-md rounded-[40px]",
                "border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
                "transition-all duration-700 animate-in fade-in zoom-in",
                "border border-white/100",
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
                <div className="flex items-center justify-center mt-6">
                    <PlayVerseAudio audioUrl={audioUrl} />
                </div>
            </section>

            <VerseActions verse={verse} />

        </div>
    )
}

export default VerseCard