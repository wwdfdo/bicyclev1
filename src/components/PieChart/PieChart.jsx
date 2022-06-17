import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";

const PieChart = () => {
  const [data] = useState([
    { property: "facebook", value: 2000 },
    { property: "twitter", value: 300 },
    { property: "instagram", value: 100 },
    { property: "whatsapp", value: 400 },
  ]);

  const svgref = useRef();

  useEffect(() => {
    const w = 500;
    const h = 500;
    const radius = w / 2;

    const svg = d3
      .select(".App")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "400px");

    const formattedData = d3.pie().value((d) => d.value)(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    var color = d3.scaleOrdinal().domain(data);
    // .range(["#ffffff", "#ffffff", "#ffffff", "#6b486b", "#a05d56"]);
    svg
      .selectAll()
      .data(formattedData)
      .join("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => color(d.value))
      .style("opacity", 0.7);

    svg
      .selectAll()
      .data(formattedData)
      .join("text")
      .text((d) => d.data.property)
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
      .style("text-anchor", "middle");
  }, [data]);

  return (
    <div className="App mx-auto flex w-1/2 justify-center">
      <svg ref={svgref}></svg>
    </div>
  );
};

export default PieChart;
