'use client'
import { shareVerse } from '@/lib/share'
import { Heart, Share2 } from 'lucide-react'

const VerseActions = ({ verse }: any) => {
    return (
        <div className="flex items-center justify-center gap-6 mt-10">
            <button className="flex items-center justify-center w-14 h-14 rounded-full border border-red-600 text-red-500 hover:bg-red-50 transition-all duration-300 shadow-sm cursor-pointer">
                <Heart size={22} strokeWidth={1.5} />
            </button>

            <button onClick={() => shareVerse(verse)} className="flex items-center justify-center w-14 h-14 rounded-full border text-blue-500 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm cursor-pointer">
                <Share2 size={22} strokeWidth={1.5} />
            </button>
        </div>
    )
}

export default VerseActions