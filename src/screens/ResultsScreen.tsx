
import React from 'react';
import { marked } from 'marked';
import { DownloadIcon } from '../components/icons/DownloadIcon';

const ResultsScreen = ({ assessment, score, onRetake, onBackToHome }) => {
    const result = assessment.results.find(r => score >= r.scoreMin && score <= r.scoreMax) 
        || assessment.results.sort((a,b) => a.scoreMin - b.scoreMin)[0]; // Fallback to lowest result

    const handleDownloadTxt = () => {
        const date = new Date().toLocaleDateString('it-IT');
        const content = `CLINICAL WELLNESS SPA - RISULTATO TEST\n\n` +
            `Test: ${assessment.title}\n` +
            `Data: ${date}\n` +
            `Punteggio: ${score}\n\n` +
            `Risultato: ${result.title}\n\n` +
            `Analisi:\n${result.summary}\n\n` +
            `Nota: Questo documento è generato automaticamente e non sostituisce un parere medico professionale.`;

        // Add Byte Order Mark (BOM) for correct UTF-8 interpretation in Excel/Windows
        const blob = new Blob(["\uFEFF" + content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Risultato_${assessment.id}_${date.replace(/\//g, '-')}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="p-4 md:p-8 text-center animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">{result.title}</h2>
                <p className="text-lg text-slate-600 mb-4">Il tuo punteggio: <span className="font-bold text-sky-600">{score}</span></p>
                <div
                    className="prose text-slate-700 text-left my-6 mx-auto"
                    dangerouslySetInnerHTML={{ __html: marked.parse(result.summary) as string }}
                ></div>
                 <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <button
                        onClick={onRetake}
                        className="px-6 py-3 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
                    >
                        Ripeti il test
                    </button>
                    <button
                        onClick={handleDownloadTxt}
                        className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
                    >
                        <DownloadIcon className="w-5 h-5" />
                        Scarica Report (.txt)
                    </button>
                    <button
                        onClick={onBackToHome}
                        className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors shadow-md"
                    >
                        Torna alla Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsScreen;
