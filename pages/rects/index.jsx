import * as d3 from "d3"
import { useState, useEffect, useRef } from "react"
const titanium = () => {
  const Svg = useRef(null)

  useEffect(() => {
    const svg = d3.select(Svg.current)
    const { width, height } = svg.node().getBoundingClientRect()
    const data = [1,2,3,4,5,6,7]
    const sata = ['akbar','alah','mohammad','hasan','mahdi','mosa','kazem']
    const createRectangle = (x, y, width, height, text) => {
      svg
        .append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "#a5cd39")
        .attr("stroke", "#499b01")
        .attr("stroke-width", 3)

      svg
        .append("text")
        .text(text)
        .attr("x", x + width / 6)
        .attr("y", y + height / 1.5)
        .attr("stroke", "#fff")
    }
for (let i = 0 ; i < data.length ; i++){
  for(let j = 0 ; j < 3; j++){
  createRectangle(
    width / 2  - j * width/7  ,
    height /22  + i * height/11,
    width / 9,
    height / 22,
    "hello rectangolo"
    )
  }
  }
  }, [])
  return (
    <>
      <svg width={"100%"} height={"100vh"} ref={Svg}></svg>
    </>
  )
}
export default titanium
