declare namespace Audio {
    interface Mp3Module {
        content: string;
    }
}

// Define MP3 file type
declare module '*.mp3' {
    const content: Audio.Mp3Module['content'];
    export default content;
}

// Environment type definitions
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
    }
}