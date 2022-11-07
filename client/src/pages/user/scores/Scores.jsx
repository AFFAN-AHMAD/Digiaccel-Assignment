import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import * as d3 from "d3";
import { useNavigate } from "react-router";

const Scores = () => {
  const svgRef = useRef();
  let { token } = useSelector((state) => state.user);
  let myToken = localStorage.getItem("token");
  const { score, noOfQuestions } = useSelector((state) => state.quiz);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      token = myToken;
    }
    if (!token) {
      navigate("/login");
    }
  });
  useEffect(() => {
    const w = 500;
    const h = 300;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#d3d3d3")
      .style("margin", "50")
      .style("overflow", "visible");

    // scaling
    const xScale = d3
      .scaleLinear()
      .domain([-0, score.length - 1])
      .range([0, w]);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(score.length)
      .tickFormat((i) => i);

    const yAxis = d3.axisLeft(yScale).ticks(noOfQuestions);

    svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);

    svg.append("g").call(yAxis);

    svg
      .selectAll(".line")
      .data([score])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [score]);

  console.log("score in score", score);
  console.log("ques", noOfQuestions);
  return (
    <div style={{ margin: "auto", width: "90%" ,textAlign:"center"}}>
      <svg ref={svgRef} />
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <h5>X-axis -:   Questions </h5>
        <h5>Y-axis -:   Score </h5>
      </div>
    </div>
  );
};

export default Scores;
