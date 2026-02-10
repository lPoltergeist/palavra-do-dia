import { VerseDTO } from '@/DTO/verseDTO';
import { unstable_cache } from 'next/cache';

async function fetchValidVerse() {
    let verse = {} as VerseDTO;
    let isValid = false;
    const invalidEndings = [':', '—', '-'];

    while (!isValid) {
        const res = await fetch('https://www.abibliadigital.com.br/api/verses/acf/random', {
            headers: { 'Authorization': `Bearer ${process.env.BIBLE_API_KEY}` },
            cache: 'no-store'
        });

        verse = await res.json();

        const isLongEnough = verse.text.length >= 30;
        const hasGoodEnding = !invalidEndings.some(e => verse.text.trim().endsWith(e));

        if (isLongEnough && hasGoodEnding) isValid = true;
    }

    return verse;
}

export const getVerseOfTheDay = unstable_cache(
    async () => {
        return await fetchValidVerse();
    },
    ['daily-verse-key'],
    {
        revalidate: 86400,
        tags: ['verse-of-the-day']
    }
);