import './App.css';
import { useEffect, useRef,useState } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';
import PreProcess from './Components/PreProcess';
import PlayAndStop from './Components/PlayAndStop';
import Volume from './Components/Volume';
import SaveButton from './Components/SaveButton';
import LoadButton from './Components/LoadButton';
import DeleteButton from './Components/DeleteButton';

let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

export default function StrudelDemo() {

    const hasRun = useRef(false);

    const handlePlay = () => {
        globalEditor.evaluate()
    }

    const handleStop = () => {
        globalEditor.stop()
    }

    const [songText, setSongText] = useState(stranger_tune)

    const [saves, setSaves] = useState(JSON.parse(localStorage.getItem('strudelSaves')) || []
    );

    const handleSave = (name, code) => {
        const updated = [...saves, { name, code }];
        setSaves(updated);
        localStorage.setItem('strudelSaves', JSON.stringify(updated));
    };

    const handleDelete = (name) => {
        const updated = saves.filter((s) => s.name !== name);
        setSaves(updated);
        localStorage.setItem('strudelSaves', JSON.stringify(updated));
    };

    

useEffect(() => {

    if (!hasRun.current) {
        document.addEventListener("d3Data", handleD3Data);
        console_monkey_patch();
        hasRun.current = true;
        //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            //init canvas
            const canvas = document.getElementById('roll');
            canvas.width = canvas.width * 2;
            canvas.height = canvas.height * 2;
            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
                onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
                prebake: async () => {
                    initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                    const loadModules = evalScope(
                        import('@strudel/core'),
                        import('@strudel/draw'),
                        import('@strudel/mini'),
                        import('@strudel/tonal'),
                        import('@strudel/webaudio'),
                    );
                    await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
                },
            });
            
        document.getElementById('proc').value = stranger_tune
    }
    globalEditor.setCode(songText)
}, [songText]);


return (
    <div>
        <main>
            <div className="container-fluid">
                <header className="text-center mb-4">
                    <h2 className="fw-bold mb-2">Strudel Composer</h2>
                    <p className="text-muted">
                        Interactive live-coding demo
                    </p>
                </header>
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="card shadow-sm border-0 rounded-4 mb-4">
                            <div className="card-header bg-primary text-white fw-semibold">Code Editor</div>
                            <div className="card-body overflow-auto" id="editor" style={{ Height: "75vh", maxHeight:"75vh" } } />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow-sm border-0 rounded-4 mb-3">
                            <div className="card-header bg-info text-dark fw-semibold"> Controls</div>
                        </div>
                        <div className="card-body d-flex flex-column gap-3">
                            <PreProcess value={songText} onChange={(e) => setSongText(e.target.value)} />
                            <PlayAndStop onPlay={handlePlay} onStop={handleStop} />
                            {/* <Volume />*/}
                            <SaveButton code={songText} onSave={handleSave} />
                            <LoadButton saves={saves} onLoad={setSongText} />
                            <DeleteButton saves={saves} onDelete={handleDelete} />
                        </div>
                    </div>
                </div>
                <canvas id="roll"></canvas>
            </div>
        </main >
    </div >
);

}





