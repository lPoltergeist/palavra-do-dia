'use client'
import { shareVerse } from '@/lib/share'
import { Heart, Share2 } from 'lucide-react'

const VerseActions = ({ verse }: any) => {
    return (
        <div className="flex items-center justify-center gap-6 mt-10">
            <button className="flex items-center justify-center w-14 h-14 rounded-full border border-red-600 text-red-500 hover:bg-red-50 transition-all duration-300 shadow-sm cursor-pointer">
                <Heart size={22} strokeWidth={1.5} />
            </button>

            <button className="flex items-center gap-2 px-8 py-4 bg-[#262626] text-white rounded-full font-medium hover:bg-black transition-all duration-300 shadow-xl shadow-black/20 group cursor-pointer">
                <span>Novo Versículo</span>
            </button>

            <button onClick={() => shareVerse(verse)} className="flex items-center justify-center w-14 h-14 rounded-full border text-blue-500 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm cursor-pointer">
                <Share2 size={22} strokeWidth={1.5} />
            </button>
        </div>
    )
}

export default VerseActions