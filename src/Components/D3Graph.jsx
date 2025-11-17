
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
export default function D3Graph({ data }) {
    //graph component
    const svgRef = useRef(null);

    const buildGraph = () => {
        //check if any data was passed and ends if no data passed.
        if (!data || data.length === 0) return;

        //method that converts log lines into numbers
        const extractGain = (str) => {
            if (!str) return 0;

            //remove empty space and finds the part that start with gain
            const parts = str.split(" ");
            const gainPart = parts.find((p) => p.startsWith("gain:"));

            //strip the gain and converts the rest to numbers
            if (!gainPart) return 0;
            return Number(gainPart.replace("gain:", ""));
        };

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

        //method to convert data to integer
        const numericData = data.map((log) => extractGain(log));

        //x-axis range
        const x = d3.scaleLinear()
            .domain([0, numericData.length - 1])
            .range([margin.left, width - margin.right]);

        //y-axis range
        const y = d3.scaleLinear()
            .domain([0, d3.max(numericData)])
            .nice()
            .range([height - margin.bottom, margin.top]);

        //adding x-axis to graph
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(5));

        //adding y-axis to graph
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(5));
    }

    return (
        <div className="text-center">
            {/*display graph component*/ }
            <svg ref={svgRef}></svg>
        </div>
    );
}

