import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
export default function D3graph({ data }) {
    //graph component
    const svgRef = useRef(null);

    //converts the data to number
    const extractGain = (str) => {
        //returns 0 if data is null
        if (!str) return 0;

        //split the code in lines and look for the gain word
        const parts = str.split(" ");
        const gainPart = parts.find((p) => p.startsWith("gain:"));

        //replace gain word
        if (!gainPart) return 0;
        return Number(gainPart.replace("gain:", ""));
    };

    return (
        <div className="text-center">
            {/*Display graph content*/}
            <svg ref={svgRef}></svg>
        </div>
    )
}