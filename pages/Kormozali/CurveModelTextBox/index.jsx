/** @format */

import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
const CurvedPath = () => {
	const Svg = useRef(null)
	const curveGenerator = () =>
		d3
			.line()
			.x((d) => d.x)
			.y((d) => d.y)
			.curve(d3.curveCardinal)
	useEffect(() => {
		const svg = d3.select(Svg.current)
		const { width, height } = svg.node().getBoundingClientRect()
		if (svg.empty()) {
			// If svg is empty, remove everything and return
			svg.selectAll('*').remove()
			return
		}

		const drawCurve = (curveData, bg, color, x2, y2, id) => {
			svg
				.append('pattern')
				.attr('id', id)
				.attr('width', 4) // Adjust the width of each stripe
				.attr('height', 4) // Adjust the height of each stripe
				.attr('patternUnits', 'userSpaceOnUse')
				.append('line')
				.attr('x1', 0)
				.attr('y1', 0)
				.attr('x2', x2)
				.attr('y2', y2) // Adjust the length of each stripe
				.attr('stroke', bg) // Stripe color
				.attr('stroke-width', 1) // Strip
			svg
				.append('path')
				.datum(curveData)
				.transition()
				.duration(3000)
				.ease(d3.easeBounceInOut)
				.attr('fill', `url(#${id})`)
				// .attr("fill", bg)
				.attr('stroke', color)
				.attr('stroke-width', 2)
				.attr('d', curveGenerator()) // Call the curveGenerator function here
				.attr('opacity', 0.2)
		}
		const createKromozom = (count, firstWidth, secondWidth, spaceWidth) => {
			const curveData = []
			for (let i = 0; i <= count; i++) {
				if (i > count / 2) {
					const x =
						i === count / 2 + 1
							? spaceWidth
							: i === count
							? spaceWidth
							: i % 2 === 0
							? secondWidth
							: firstWidth
					const y =
						width / 21 +
						(count / 2) * (width / 44) -
						(i - count / 2) * (width / 44)
					curveData.push({ x, y })
				} else {
					const x =
						i === count / 2
							? spaceWidth
							: i === 0
							? spaceWidth
							: i % 2 === 0
							? firstWidth
							: secondWidth
					const y =
						i === count / 2
							? width / 24 + (i - 1) * (width / 44)
							: width / 21 + i * (width / 44)
					curveData.push({ x, y })
				}
			}
			drawCurve(curveData, '#550d5e', '#4b0c6e', 4, 0, 'vertical')
		}

		const createKromozomHorizontal = (
			count,
			firstWidth,
			secondWidth,
			spaceWidth
		) => {
			const curveDataHorizontal = []
			for (let i = 0; i <= count; i++) {
				if (i > count / 2) {
					const x =
						width / 44 +
						(count / 2) * (width / 44) -
						(i - count / 2) * (width / 44)
					const y =
						i === count / 2 + 1
							? spaceWidth
							: i === count
							? spaceWidth
							: i % 2 === 0
							? secondWidth
							: firstWidth
					curveDataHorizontal.push({ x, y })
				} else {
					const x =
						i === count / 2
							? width / 44 + (i - 1) * (width / 44.4)
							: width / 44 + i * (width / 44)
					const y =
						i === count / 2
							? spaceWidth
							: i === 0
							? spaceWidth
							: i % 2 === 0
							? firstWidth
							: secondWidth
					curveDataHorizontal.push({ x, y })
				}
			}
			drawCurve(curveDataHorizontal, '#4287f5', '#011645', 0, 4, 'horizontal')
		}

		for (let i = 0; i < 6; i++) {
			createKromozom(
				386,
				width / 17.8 + (8 * i * width) / 44,
				width / 12.8 + (8 * i * width) / 44,
				width / 14.8 + (8 * i * width) / 44
			)
			createKromozom(
				386,
				width / 17.4 + (8 * i * width) / 44,
				width / 12.6 + (8 * i * width) / 44,
				width / 14.8 + (8 * i * width) / 44
			)
		}
		for (let i = 0; i < 84; i++) {
			createKromozomHorizontal(
				88,
				width / 12.5 + (4 * i * width) / 44,
				width / 9.8 + (4 * i * width) / 44,
				width / 11 + (4 * i * width) / 44
			)
			createKromozomHorizontal(
				88,
				width / 12 + (4 * i * width) / 44,
				width / 9.5 + (4 * i * width) / 44,
				width / 11 + (4 * i * width) / 44
			)
		}

		const DrawCurve = (curveData, bg, color, opacity) => {
			svg
				.append('path')
				.datum(curveData)
				.attr('fill', bg)
				.attr('stroke', color)
				.attr('stroke-width', 1)
				.attr('d', curveGenerator()) // Call the curveGenerator function here
				.attr('opacity', opacity)
		}


		
		const createAssetDataBox = (data ,rectX, rectY, rectWidth,  rectHeight, text) => {
			DrawCurve(data, '#0d5069', 'yellow', 1)
		
				svg
				.append('rect')
				.attr('x', rectX)
				.attr('y', rectY)
				.attr('width', rectWidth)
				.attr('height', rectHeight)
				.attr('rx', 44)
				.attr('fill', 'white')
				.attr('stroke', 'gold')
				
			
				
				svg
				.append('text')
				.attr('x', rectX + rectWidth / 2)
				.attr('y', rectY + rectHeight / 2)
				.attr('text-anchor', 'middle') // Center horizontally
				.attr('dominant-baseline', 'middle') // Center vertically
				.text(text)
			}
			const data = [
			{ x: width / 12.8, y: width / 7.2 },
			{ x: width / 11, y: width / 9 },
			{ x: width / 4.4, y: width / 9 },
			{ x: width / 4.4, y: width / 8 },
			{ x: width / 4.2, y: width / 9.5 },
			{ x: width / 11.2, y: width / 9.6 },
			{ x: width / 11.7, y: width / 14 },
			{ x: width / 13, y: width / 13 },
			{ x: width / 12.6, y: width / 14 },
			{ x: width / 15, y: width / 12 },
			{ x: width / 12.4, y: width / 14.4 },
			{ x: width / 11.3, y: width / 14.4 },
			{ x: width / 11.3, y: width / 10.2 },
			{ x: width / 4.1, y: width / 9.7 },
			{ x: width / 4.5, y: width / 6 },
			{ x: width / 9.4, y: width / 6 },
			{ x: width / 12.8, y: width / 7.2 },
		]
		const texts = ['hello', 'alireza', 'you are', 'humans hero', 'do you beleive it?', 'that was wrong but it is fact']
		for (let i = 0; i < texts.length; i++) {
			for (let j = 0; j < 5; j++) {
				createAssetDataBox(
					data.map((obj) => {
						const x = obj.x + j * (width / 5.5)
						const y = obj.y + i * (width / 11)
						return { x, y }
					}),
					width / 13.5 + j * (width / 5.5),
					width / 8.3 + +i * (width / 11),
					width / 5.8,
					width / 29,
					texts[j]
				)
			}
		}
	}, [])
	
	
	return (
		<>
			<svg
				style={{ backgroundColor: '#c4f2ed', padding: 0 }}
				width={'100%'}
				height={'900vh'}
				ref={Svg}></svg>
		</>
	)
}

export default CurvedPath
