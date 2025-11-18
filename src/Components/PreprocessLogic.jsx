export function Preprocess({ inputText, volume, cpm, muted }) {
    let outputText = inputText;

    let regex = /[a-zA-Z0-9_]+:\s*\n[\s\S]+?\r?\n(?=[a-zA-Z0-9_]*[:\/])/gm;

    let m;

    let matches = []

    while ((m = regex.exec(outputText)) !== null) {
        //avoids infinite loop
        if (m.index === regex.lastIndex) {
            regex.lastInde++;
        }

        //results can be accessed through the 'm'-variable
        m.forEach((match, groupIndex) => {
            matches.push(match)
        });
    }

    let matches2 = matches.map(
        match => match.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match,captureGroup) => 
            `gain(${captureGroup}*${volume})`
        )
    );

    outputText = matches.reduce(
        (text, original, i) => text.replaceAll(original, matches2[i]),
        outputText);

    //sets the new cpm
    if (cpm !== null && !isNaN(cpm)) {
        outputText = outputText.replace(
            /setcps\([^)]*\)/,
            `setcps(${cpm})`
        );
    }



    //sets the instrument to silent
    if (muted.length > 0) {
        muted.forEach(inst => {
            //Add '_' before the instrument
            const muteLabel = new RegExp(`(^|\\n)${inst}:`, "g");
            outputText = outputText.replace(muteLabel, `$1_${inst}:`);
        });
    }

    return outputText;
}