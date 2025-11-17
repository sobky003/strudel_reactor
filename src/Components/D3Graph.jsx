
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
export default function D3Graph({ data }) {
    //graph component
    const svgRef = useRef(null);

    return (
        <div className="text-center">
            {/*display graph component*/ }
            <svg ref={svgRef}></svg>
        </div>
    );
}

