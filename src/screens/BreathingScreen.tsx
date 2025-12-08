
import React from 'react';
import { LungIcon } from '../components/icons/LungIcon';
import { EyeIcon } from '../components/icons/EyeIcon';
import { EyeOffIcon } from '../components/icons/EyeOffIcon';

const BreathingScreen = () => {
    const BREATHING_PATTERNS = {
      coherence: { name: '5-5 Coerenza Cardiaca', inhale: 5, hold: 0, exhale: 5, total: 10 },
      vagotonia: { name: '4-6 Vagotonia', inhale: 4, hold: 0, exhale: 6, total: 10 },
      sleep: { name: '4-7-8 Sonno', inhale: 4, hold: 7, exhale: 8, total: 19 },
      training: { name: '6-6 Allenamento', inhale: 6, hold: 0, exhale: 6, total: 12 },
    };

    // Ordine ripristinato: Relax (432Hz) primo, Introspection ultimo.
    const MUSIC_TRACKS = [
        { label: '🎵 Relax (432Hz Healing)', value: 'audio/432hz_healing.mp3' },
        { label: '🧠 Mind (Attivazione)', value: 'audio/Comunicativita.mp3' },
        { label: '🧘 Introspection (Profondità)', value: 'audio/Perdono.mp3' },
    ];

    const DURATION_OPTIONS = [
        { label: '5 Minuti', value: 300 },
        { label: '10 Minuti', value: 600 },
        { label: '15 Minuti', value: 900 },
        { label: '30 Minuti', value: 1800 },
    ];

    const [duration, setDuration] = React.useState(DURATION_OPTIONS[0].value);
    const [patternKey, setPatternKey] = React.useState('coherence');
    const [musicTrack, setMusicTrack] = React.useState(MUSIC_TRACKS[0].value);
    const [isActive, setIsActive] = React.useState(false);
    const [timeLeft, setTimeLeft] = React.useState(DURATION_OPTIONS[0].value);
    const [cycles, setCycles] = React.useState(0);
    const [instruction, setInstruction] = React.useState('Inizia');
    const [scale, setScale] = React.useState(0.6);
    const [mode, setMode] = React.useState<'open' | 'closed'>('open');
    
    // Nuovi stati per il controllo del volume
    const [musicVolume, setMusicVolume] = React.useState(0.5); // Default 50%
    const [dingVolume, setDingVolume] = React.useState(0.8);   // Default 80%
    
    const mainTimer = React.useRef<any>(null);
    const cycleTimer = React.useRef<any>(null);
    const audioRef = React.useRef<HTMLAudioElement>(null); 
    const audioCtxRef = React.useRef<AudioContext | null>(null);

    // Aggiorna il volume della musica in tempo reale quando lo slider cambia
    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = musicVolume;
        }
    }, [musicVolume]);

    // Gestione cambio traccia musica
    React.useEffect(() => {
        if (audioRef.current) {
            const audioEl = audioRef.current;
            const currentSrc = audioEl.getAttribute('src');
            
            if (currentSrc !== musicTrack) {
                audioEl.pause();
                audioEl.src = musicTrack;
                audioEl.load();
                audioEl.volume = musicVolume;
                
                if (isActive) {
                    audioEl.play().catch(e => console.log("Play error on track change:", e));
                }
            }
        }
    }, [musicTrack, isActive]); 

    const stopExercise = React.useCallback(() => {
        setIsActive(false);
        clearInterval(mainTimer.current);
        clearTimeout(cycleTimer.current);
        setInstruction('Inizia');
        setScale(0.6);
        
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, []);

    React.useEffect(() => {
        return () => {
            clearInterval(mainTimer.current);
            clearTimeout(cycleTimer.current);
            if (audioRef.current) audioRef.current.pause();
            if (audioCtxRef.current) audioCtxRef.current.close();
        };
    }, []);

    React.useEffect(() => {
        if (isActive && timeLeft > 0) {
            mainTimer.current = setInterval(() => {
                setTimeLeft(t => t - 1);
            }, 1000);
        } else if (timeLeft === 0 && isActive) {
            stopExercise();
            alert('Sessione di meditazione completata!');
        }
        return () => clearInterval(mainTimer.current);
    }, [isActive, timeLeft, stopExercise]);

    // --- SYNTH PURO (Volume dinamico) ---
    const playSynthDing = React.useCallback(async () => {
        try {
            let ctx = audioCtxRef.current;
            if (!ctx) {
                ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                audioCtxRef.current = ctx;
            }
            
            if (ctx.state === 'suspended') {
                await ctx.resume();
            }

            const t = ctx.currentTime;

            const osc1 = ctx.createOscillator(); 
            const osc2 = ctx.createOscillator(); 
            const gain = ctx.createGain();

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(ctx.destination);

            osc1.type = 'sine';
            osc2.type = 'sine';
            
            osc1.frequency.setValueAtTime(800, t);
            osc2.frequency.setValueAtTime(1200, t); 

            // Volume Envelope
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(dingVolume, t + 0.05); 
            gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2); 

            osc1.start(t);
            osc2.start(t);
            osc1.stop(t + 1.2);
            osc2.stop(t + 1.2);
            
        } catch (e) {
            console.error("Synth errore:", e);
        }
    }, [dingVolume]);

    const playCue = React.useCallback(async () => {
        if (mode !== 'closed' || !isActive) return;
        // RIMOSSO IL DUCKING
        playSynthDing();
    }, [mode, isActive, playSynthDing]);

    React.useEffect(() => {
        if (!isActive) return;

        const pattern = BREATHING_PATTERNS[patternKey];
        
        const breathingCycle = () => {
            setInstruction('Inspira...');
            setScale(1);
            playCue(); 

            cycleTimer.current = setTimeout(() => {
                if (pattern.hold > 0) {
                    setInstruction('Trattieni');
                }

                cycleTimer.current = setTimeout(() => {
                    setInstruction('...espira');
                    setScale(0.6);
                    playCue(); 

                    cycleTimer.current = setTimeout(() => {
                        setCycles(c => c + 1);
                        if (isActive) breathingCycle();
                    }, pattern.exhale * 1000);
                }, pattern.hold * 1000);
            }, pattern.inhale * 1000);
        };

        breathingCycle();

        return () => clearTimeout(cycleTimer.current);
    }, [isActive, patternKey, playCue]); 

    const handleStartStop = () => {
        if (isActive) {
            stopExercise();
        } else {
            setTimeLeft(duration);
            setCycles(0);
            setIsActive(true);
            
            if (audioRef.current) {
                audioRef.current.volume = musicVolume;
                audioRef.current.play().catch(e => alert("Impossibile riprodurre musica. Verifica i permessi audio."));
            }
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            if (audioCtxRef.current.state === 'suspended') {
                audioCtxRef.current.resume();
            }
        }
    };
    
    const formatTime = (seconds) => {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    };

    const currentPattern = BREATHING_PATTERNS[patternKey];
    const circleTransitionDuration = isActive
        ? (instruction === 'Inspira...' ? currentPattern.inhale : currentPattern.exhale)
        : 1;

    return (
        <div className="p-4 md:p-8 animate-fade-in flex flex-col items-center justify-center min-h-full">
            <div className="w-full max-w-lg">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <LungIcon className="w-8 h-8 text-sky-600" />
                    <h1 className="text-3xl font-bold text-slate-800">Meditazione Guidata</h1>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 mb-8 space-y-4">
                    
                    {/* Mode Selection */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
                        <label className="text-sm font-bold text-slate-600 uppercase flex items-center gap-2 pl-2">
                            👁️ Modalità
                        </label>
                        <div className="flex bg-white rounded-md p-1 border border-slate-200 shadow-sm w-full sm:w-auto">
                            <button
                                onClick={() => setMode('open')}
                                disabled={isActive}
                                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-colors ${mode === 'open' ? 'bg-sky-100 text-sky-700' : 'text-slate-500 hover:bg-slate-50'}`}
                            >
                                <EyeIcon className="w-4 h-4" />
                                Visiva
                            </button>
                            <button
                                onClick={() => setMode('closed')}
                                disabled={isActive}
                                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-colors ${mode === 'closed' ? 'bg-sky-100 text-sky-700' : 'text-slate-500 hover:bg-slate-50'}`}
                            >
                                <EyeOffIcon className="w-4 h-4" />
                                Guidata
                            </button>
                        </div>
                    </div>
                    {mode === 'open' && <p className="text-xs text-slate-400 text-center italic">In modalità Visiva i segnali acustici ("Ding") sono disattivati.</p>}

                    {/* Duration */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label htmlFor="duration-select" className="text-sm font-bold text-slate-600 uppercase flex items-center gap-2">
                            ⏱️ Durata
                        </label>
                        <select 
                            id="duration-select"
                            value={duration} 
                            onChange={e => setDuration(Number(e.target.value))}
                            disabled={isActive}
                            className="w-full sm:w-2/3 p-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 disabled:opacity-50 text-sm font-medium text-slate-700"
                        >
                            {DURATION_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                    </div>

                    {/* Pattern */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label htmlFor="pattern-select" className="text-sm font-bold text-slate-600 uppercase flex items-center gap-2">
                            🫁 Ritmo
                        </label>
                        <select 
                            id="pattern-select"
                            value={patternKey}
                            onChange={e => setPatternKey(e.target.value)}
                            disabled={isActive}
                            className="w-full sm:w-2/3 p-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 disabled:opacity-50 text-sm font-medium text-slate-700"
                        >
                            {Object.entries(BREATHING_PATTERNS).map(([key, pat]) => <option key={key} value={key}>{pat.name}</option>)}
                        </select>
                    </div>

                    {/* Music Selection */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 bg-sky-50 rounded-lg border border-sky-100">
                        <label htmlFor="music-select" className="text-sm font-bold text-sky-700 uppercase flex items-center gap-2">
                            🎵 Frequenza
                        </label>
                        <select 
                            id="music-select"
                            value={musicTrack}
                            onChange={e => setMusicTrack(e.target.value)}
                            disabled={isActive}
                            className="w-full sm:w-2/3 p-2 bg-white border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-500 disabled:opacity-50 text-sm font-medium text-slate-700 shadow-sm"
                        >
                            {MUSIC_TRACKS.map(track => <option key={track.value} value={track.value}>{track.label}</option>)}
                        </select>
                    </div>

                    {/* Volume Controls */}
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                            <label htmlFor="music-vol" className="text-xs font-bold text-slate-600 uppercase w-20">Musica</label>
                            <input 
                                id="music-vol" 
                                type="range" 
                                min="0" max="1" step="0.01" 
                                value={musicVolume} 
                                onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <label htmlFor="ding-vol" className="text-xs font-bold text-slate-600 uppercase w-20">Segnale</label>
                            <input 
                                id="ding-vol" 
                                type="range" 
                                min="0" max="1" step="0.01" 
                                value={dingVolume} 
                                onChange={(e) => setDingVolume(parseFloat(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mx-auto my-8">
                    <div className={`absolute w-full h-full bg-sky-100 rounded-full ${isActive ? 'animate-pulse' : ''} opacity-50`}></div>
                    
                    <div 
                        className="absolute w-full h-full bg-gradient-to-br from-sky-400 to-blue-600 rounded-full shadow-2xl flex items-center justify-center"
                        style={{ 
                            transform: `scale(${scale})`,
                            transition: `transform ${circleTransitionDuration}s ease-in-out`
                        }}
                    >
                         <div className="w-full h-full rounded-full bg-white opacity-20 blur-xl"></div>
                    </div>
                    
                    <span className="relative text-3xl font-extrabold text-white z-10 drop-shadow-lg tracking-wider uppercase" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                        {instruction}
                    </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Cicli</p>
                        <p className="text-3xl font-bold text-slate-700">{cycles}</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                         <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Tempo</p>
                         <p className="text-3xl font-bold text-slate-700 font-mono">{formatTime(isActive ? timeLeft : duration)}</p>
                    </div>
                </div>

                <button
                    onClick={handleStartStop}
                    className={`w-full mt-8 block px-8 py-4 text-white font-bold text-lg rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 ${isActive ? 'bg-slate-700 hover:bg-slate-800' : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700'}`}
                >
                    {isActive ? (
                        <>⏸️ Ferma Sessione</>
                    ) : (
                        <>▶️ Inizia Meditazione</>
                    )}
                </button>
            </div>
            
            {/* Background Music Player */}
            <audio 
                ref={audioRef} 
                loop
                preload="auto"
                onError={(e) => console.error("Errore background music", e)}
            />
        </div>
    );
};

export default BreathingScreen;
