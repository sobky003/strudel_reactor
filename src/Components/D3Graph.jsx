
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
export default function D3Graph({ data }) {
    //graph component
    const svgRef = useRef(null);

    const buildGraph = () => {
        //check if any data was passed and ends if no data passed.
        if (!data || data.length === 0) return;

        //remove old drawing
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); 

        //constant for margin and svg size
        const width = 350;
        const height = 200;
        const margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
        };

        svg.attr("width", width).attr("height", height);
    }

    return (
        <div className="text-center">
            {/*display graph component*/ }
            <svg ref={svgRef}></svg>
        </div>
    );
}

