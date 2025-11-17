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

    useEffect(() => {
        //remove old drawing
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        //constant for margin and svg size
        const width = 350;
        const height = 200;
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };

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
            .attr("transform", `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(5));

        //x-axis label
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", height - 5)
            .attr("text-anchor", "middle")
            .attr("fill", "#444")
            .attr("font-size", "12px")
            .text("Event Index");

        //adding y-axis to graph
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(5));

        //y-axis label
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -height / 2)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .attr("fill", "#444")
            .attr("font-size", "12px")
            .text("Gain Value");

        //drawing the line
        svg.append("path")
            .datum(numericData)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d",
                d3.line()
                    .x((d, i) => x(i))
                    .y((d) => y(d))
            );
    },[data])

    return (
        <div className="text-center">
            {/*Display graph content*/}
            <svg ref={svgRef}></svg>
        </div>
    )
}