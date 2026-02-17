export const shareVerse = async (verse: { text: string, book: { name: string }, chapter: number, number: number }) => {
    const shareData = {
        title: 'Versículo do Dia',
        text: `${verse.text}\n\n— ${verse.book.name} ${verse.chapter}:${verse.number}`,
        url: window.location.href
    }

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.error('Erro ao compartilhar:', err);
        }
    } else {
        alert('Compartilhamento não suportado neste navegador.');
    }

}