import { ElevenLabsClient, play } from '@elevenlabs/elevenlabs-js';
import { put } from '@vercel/blob';
import { Readable } from 'stream';

async function streamToBuffer(stream: ReadableStream): Promise<Buffer> {
    const reader = stream.getReader();
    const chunks: Uint8Array[] = [];

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
    }

    return Buffer.concat(chunks);
}

export async function textToSpeech(verse: any, datakey: string) {
    const elevenlabs = new ElevenLabsClient({
        apiKey: process.env.ELEVEN_LABS_KEY || '',
    });
    const audio = await elevenlabs.textToSpeech.convert('JBFqnCBsd6RMkjVDRZzb', {
        text: verse,
        modelId: 'eleven_multilingual_v2',
        outputFormat: 'mp3_44100_128',
        voiceSettings: {
            stability: 0.35,
            similarityBoost: 0.80,
            style: 0.0,
            useSpeakerBoost: true
        }
    });

    const audioBuffer = await streamToBuffer(audio as any);

    const blob = await put(`verse/audio-${datakey}.mp3`, audioBuffer, {
        access: 'public',
        contentType: 'audio/mpeg',
        addRandomSuffix: false,
    });

    return blob.url;
}

