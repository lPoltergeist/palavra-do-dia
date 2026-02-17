'use client'
import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Loader2 } from 'lucide-react'

export default function PlayVerseAudio({ audioUrl }: { audioUrl: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const togglePlay = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            setIsLoading(true)
            audioRef.current.play().catch(() => setIsLoading(false))
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="flex items-center gap-3">
            {/* Elemento de áudio invisível */}
            <audio
                ref={audioRef}
                src={audioUrl}
                onEnded={() => setIsPlaying(false)}
                onWaiting={() => setIsLoading(true)}
                onPlaying={() => setIsLoading(false)}
                preload="none"
            />

            <button
                onClick={togglePlay}
                disabled={!audioUrl}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 transition-all active:scale-95 disabled:opacity-50"
            >
                {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                ) : (
                    <Play className="w-5 h-5 fill-current ml-1" />
                )}
            </button>

            <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">
                {isPlaying ? 'Ouvindo...' : 'Ouvir Versículo'}
            </span>
        </div>
    )

}