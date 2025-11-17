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
import ToggleTheme from './Components/ToggleTheme';

let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

export default function StrudelDemo() {
    //constants for referencing DOM elements
    const hasRun = useRef(false);
    const editorRef = useRef(null);
    const canvasRef = useRef(null);

    //play code in editor
    const handlePlay = () => {
        globalEditor.evaluate()
    }

    //stop code in editor
    const handleStop = () => {
        globalEditor.stop()
    }

    //constant that hold current strudel
    const [songText, setSongText] = useState(stranger_tune)

    //constant to hold the saved files from localStorage
    const [saves, setSaves] = useState(JSON.parse(localStorage.getItem('strudelSaves')) || []
    );

    //method to save current file
    const handleSave = (name, code) => {
        //checks if the name already exists and if yes replace its content
        const existing = saves.find((s) => s.name === name);
        let updated;
        if (existing) {
            updated = saves.map((s) => (s.name === name ? { name, code } : s));
        } else {
            updated = [...saves, { name, code }];
        }
        //update react state and localStorage
        setSaves(updated);
        localStorage.setItem('strudelSaves', JSON.stringify(updated));
    };

    //method to delete selected file
    const handleDelete = (name) => {
        //removes the file from the list
        const updated = saves.filter((s) => s.name !== name);
        setSaves(updated);
        localStorage.setItem('strudelSaves', JSON.stringify(updated));
    };

    // constant for theme state and persistence
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


useEffect(() => {

    if (!hasRun.current && editorRef.current && canvasRef.current) {
        document.addEventListener("d3Data", handleD3Data);
        console_monkey_patch();
        hasRun.current = true;
        //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            //init canvas
            const canvas = canvasRef.current;
            canvas.width = canvas.width * 2;
            canvas.height = canvas.height * 2;
            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: editorRef.current,
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
    }
    //updates editor content whenever songText changes
    globalEditor.setCode(songText)
}, [songText]); //re-run when songText changes


return (
    <div>
        <main>
            <div className="container-fluid d-flex flex-column justify-content-between overflow-auto" >

                {/*header*/ }
                <header className="text-center">
                    <h2 className="fw-bold">Strudel Composer</h2>
                    <p className="text-muted">
                        Interactive live-coding demo
                    </p>
                </header>
                <div className="position-absolute top-0 end-0 p-3">
                    <ToggleTheme theme={theme} onChange={setTheme} />
                </div>
                <div className="row flex-grow-1">

                    {/* Left column: Code editor */}
                    <div className="col-lg-8 d-flex flex-column h-100">
                        <div className="card shadow-sm border-0 rounded-4 mb-4"> 
                            <PreProcess value={songText} onChange={(e) => setSongText(e.target.value)} />
                        </div>
                    </div>

                    {/* Right column: Controls */}
                    <div className="col-lg-4 d-flex flex-column h-100">
                        <div className="card shadow-sm border-0 rounded-4 ">
                            <div className="card-header bg-info text-dark fw-semibold"> Controls</div>
                            <div className="card-body d-flex flex-column gap">

                                <div className="d-flex align-items-center gap-3">
                                    <PlayAndStop onPlay={handlePlay} onStop={handleStop} />
                                    <Volume />
                                </div>
                                <SaveButton code={songText} onSave={handleSave} />
                                <LoadButton saves={saves} onLoad={setSongText} />
                                <DeleteButton saves={saves} onDelete={handleDelete} />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-8">
                        <div className="card shadow-sm border-0 rounded-4 mb-4" >
                            <div className="card-header bg-primary text-white fw-semibold">Code Editor</div>
                            <div className="card-body overflow-auto" ref={editorRef} style={{ height: "80vh", maxHeight:"100vh" } } />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow-sm border-0 rounded-4 mb-4" >
                            <div className="card-header bg-primary text-white fw-semibold">Graph</div>
                           
                        </div>
                    </div>

                    
                </div>
                <canvas ref={canvasRef}></canvas>
            </div>
        </main >
    </div >
);

}





