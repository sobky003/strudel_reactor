import {useState} from "react";
export default function Volume({ volume, onVolumeChange, songText, setSongText }) {

    //method to handle volume change
    const handleChange = (e) => {
        //changes volume
        const newVol = Number(e.target.value);
        onVolumeChange(newVol);

        let processed = songText;

        //multiply existing gain values
        processed = processed.replace(
            /\.gain\(([^)]+)\)/g,
            (_, inner) => `.gain((${inner}) * ${newVol})`
        );

        //adding gain if missing
        processed = processed.replace(
            /(?<!samples|setcps)(?:\b(?:s|note)\([^)]*\))(?![^,]*\.gain\()/g,
            match => {
                if (!/\.gain\(/.test(match)) {
                    const dotIndex = match.indexOf('.', match.indexOf(')'));
                    if (dotIndex !== -1) {
                        return match.slice(0, dotIndex)
                            + `.gain(1 * ${newVol})`
                            + match.slice(dotIndex);
                    }
                    return match + `.gain(1 * ${newVol})`;
                }
                return match;
            }
        );

        //send new code back
        setSongText(processed);
    };


    return (
        <>
                <label htmlFor="volume" className="form-label">Volume</label>
            <input type="range" className="form-range" id="volume" min="0" max="1" step="0.1" value={volume} onChange={handleChange} />  
        </> 
  );
}
