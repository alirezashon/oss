import { useRef, useEffect } from "react"
import * as d3 from "d3"

const CurvedPath = () => {
  const Svg = useRef(null)
  useEffect(() => {
    const svg = d3.select(Svg.current)
    const { width, height } = svg.node().getBoundingClientRect()
    if (svg.current) {
		d3.select(svg.current).selectAll('*').remove()    }
    // Define your curve data
	const createKromozom = (count, firstWidth, secondWidth, spaceWidth) => {
		const curveData = [];
		for (let i = 0; i <= count 	; i++) {
		if(i > count/2 ){
			const x = i === (count/2+1) ? spaceWidth  :  i === count ? spaceWidth: i% 2 === 0 ? secondWidth  : firstWidth;
			const y = (height / 22 + count/2 *(height/44)) - (( i - count/2  )* (height / 44));
			curveData.push({ x, y });

		}else{
			const x = i === count/2 ? spaceWidth  :  i === 0 ? spaceWidth: i % 2 === 0 ?  firstWidth : secondWidth ;
			const y = i === count/2 ?(height / 22) + ((i-1) * (height / 44.4)) :  (height / 22) + (i * (height / 44));
			curveData.push({ x, y });
		}
	}
	const curveGenerator = d3
	  .line()
	  .x((d) => d.x)
	  .y((d) => d.y)
	  .curve(d3.curveCardinal)
	
	// Draw the curved path
	svg
	  .append("path")
	  .datum(curveData)
	  .transition()
	  .duration(3000)
	  .ease(d3.easeBounceInOut) // Easing function
	
	  .attr("fill", "yellow")
	  .attr("stroke", "blue")
	  .attr("stroke-width", 1)
	  .attr("d", curveGenerator)
	  .attr('opacity', 0.2)
}
	createKromozom(86, width/12, width/10, width/11)
	createKromozom(86, width/4, width/3.7, width/3.85)
	createKromozom(86, width/2.3, width/2.2, width/2.25)
	createKromozom(86, width/1.6, width/1.55, width/1.575)
	createKromozom(86, width/1.24, width/1.21, width/1.225)
	  

    // Create a curve generator
  }, [])

  return (
    <svg
      style={{ backgroundColor: "#c4f2ed", padding: 0 }}
      width={"100%"}
      height={"200vh"}
      ref={Svg}
    ></svg>
  )
}

export default CurvedPath
