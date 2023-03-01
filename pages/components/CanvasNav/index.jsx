/** @format */

import React, { useState, useEffect, useRef } from 'react'
import { Sidebar } from 'primereact/sidebar'

import { Editor } from 'primereact/editor'

import { InputText } from 'primereact/inputtext'
import Personal from '../Drawer/Personal/Content'
import CreateIssue from '../../dashboards/oss/CreateIssue'
import Food from '../Food'

const ResponsiveCanvas = () => {
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	})
	// const [color, setColor] = useState('#499b01');
	// const [content, setContent] = useState()
	const [visibleFullScreen, setVisibleFullScreen] = useState(false)
	const [visiblePersonal, setVisiblePersonal] = useState(false)
	const [visibleTicketing, setVisibleTicketing] = useState(false)
	const [visibleFood, setVisibleFood] = useState(false)


	const [text, setText] = useState('')
	const [to, setTo] = useState('')
	const [sbj, setSbj] = useState('')

	const handleSubmit = async () => {
		const response = await fetch('/api/newMail', {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ text, to, sbj }),
		})
		const data = await response.json()
		console.log(data)
	}

	const canvasRef = useRef(null)

	useEffect(() => {
		setDimensions({
			width: window.innerWidth - 360,
			height: window.innerHeight - 150,
		})

		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')

		const CreateCircle = (posX, posY, radius, color) => {
			ctx.beginPath()
			ctx.arc(posX, posY, radius, 0, Math.PI * 2)
			ctx.strokeStyle = '#a5cd39'
			ctx.lineWidth = 2
			ctx.fillStyle = color
			ctx.fill()
			ctx.stroke()
		}

		ctx.beginPath()
		//top-left-To-bottom-left
		ctx.moveTo(dimensions.width / 4.5 + 47, dimensions.height / 11)
		ctx.lineTo(dimensions.width / 5.5 - 47, dimensions.height / 2.5)

		//top-right-To-bottom-right
		ctx.moveTo(dimensions.width / 1.3 + 47, dimensions.height / 11)
		ctx.lineTo(dimensions.width / 1.39 - 7, dimensions.height / 2.5)

		// middle-left-To-top-left
		ctx.moveTo(dimensions.width / 3.6, dimensions.height / 3.4)
		ctx.lineTo(dimensions.width / 4.5 + 17, dimensions.height / 11)

		// middle-left-To-bottom-left
		ctx.moveTo(dimensions.width / 3.6, dimensions.height / 3.4)
		ctx.lineTo(dimensions.width / 5.5, dimensions.height / 2.5)

		// middle-left-To-bottom-middle
		ctx.moveTo(dimensions.width / 3.6, dimensions.height / 3.4)
		ctx.lineTo(dimensions.width / 2.3, dimensions.height / 2.5)

		// middle-first-center-To-bottom-middle
		ctx.moveTo(dimensions.width / 2.5, dimensions.height / 5.1)
		ctx.lineTo(dimensions.width / 2.3, dimensions.height / 2.5)

		// middle-first-center-To-top-middle
		ctx.moveTo(dimensions.width / 2.5, dimensions.height / 5.1)
		ctx.lineTo(dimensions.width / 2, dimensions.height / 11)

		// middle-first-center-To-top-left
		ctx.moveTo(dimensions.width / 2.5, dimensions.height / 5.1)
		ctx.lineTo(dimensions.width / 4.5, dimensions.height / 11)

		// middle-second-center-To-top-middle
		ctx.moveTo(dimensions.width / 1.85, dimensions.height / 3.9)
		ctx.lineTo(dimensions.width / 2 + 47, dimensions.height / 11)

		// middle-second-center-To-bottom-middle
		ctx.moveTo(dimensions.width / 1.85, dimensions.height / 3.9)
		ctx.lineTo(dimensions.width / 2.3, dimensions.height / 2.5)

		// middle-second-center-To-bottom-right
		ctx.moveTo(dimensions.width / 1.85, dimensions.height / 3.9)
		ctx.lineTo(dimensions.width / 1.39 - 47, dimensions.height / 2.5)

		// middle-right-To-bottom-right
		ctx.moveTo(dimensions.width / 1.5, dimensions.height / 5.1)
		ctx.lineTo(dimensions.width / 1.39, dimensions.height / 2.5)

		// middle-right-To-top-right
		ctx.moveTo(dimensions.width / 1.5, dimensions.height / 5.1)
		ctx.lineTo(dimensions.width / 1.3, dimensions.height / 11)

		// middle-right-To-bottom-right
		ctx.moveTo(dimensions.width / 1.5, dimensions.height / 5.1)
		ctx.lineTo(dimensions.width / 2 + 47, dimensions.height / 11)

		ctx.stroke()

		// top-line-circles
		CreateCircle(dimensions.width / 4.5, dimensions.height / 11, 47, '#FFFFFF')
		CreateCircle(dimensions.width / 2, dimensions.height / 11, 47, '#FFFFFF')
		CreateCircle(dimensions.width / 1.3, dimensions.height / 11, 47, '#FFFFFF')

		// middle-line-circles
		CreateCircle(dimensions.width / 3.6, dimensions.height / 3.4, 35, '#FFFFFF')
		CreateCircle(dimensions.width / 2.5, dimensions.height / 5.1, 35, '#FFFFFF')
		CreateCircle(
			dimensions.width / 1.85,
			dimensions.height / 3.9,
			35,
			'#FFFFFF'
		)
		CreateCircle(dimensions.width / 1.5, dimensions.height / 5.1, 35, '#FFFFFF')

		// bottom-line-circles
		CreateCircle(dimensions.width / 5.5, dimensions.height / 2.5, 47, '#FFFFFF')
		CreateCircle(dimensions.width / 2.3, dimensions.height / 2.5, 47, '#FFFFFF')
		CreateCircle(
			dimensions.width / 1.39,
			dimensions.height / 2.5,
			47,
			'#FFFFFF'
		)

		// IMAGES
		const createImage = (src, x, y, width, height) => {
			const icons = new Image()
			icons.src = src
			ctx.beginPath()
			//   ctx.arc(x, y, 77, 0, 2 * Math.PI)
			//   ctx.clip()
			ctx.drawImage(icons, x, y, width, height)
			//   ctx.restore()
		}

		createImage(
			'/images/icons/internet.png',
			dimensions.width / 4.5 - 27,
			dimensions.height / 11 - 27,
			55,
			55
		)
		createImage(
			'/images/icons/tickets.png',
			dimensions.width / 2 - 33,
			dimensions.height / 11 - 33,
			66,
			66
		)
		createImage(
			'/images/icons/accounting.png',
			dimensions.width / 1.3 - 33,
			dimensions.height / 11 - 33,
			66,
			64
		)

		createImage(
			'/images/icons/dashboard.png',
			dimensions.width / 3.6 - 22,
			dimensions.height / 3.4 - 22,
			47,
			47
		)
		createImage(
			'/images/icons/email.png',
			dimensions.width / 2.5 - 22,
			dimensions.height / 5.1 - 27,
			44,
			44
		)
		createImage(
			'/images/icons/leave.png',
			dimensions.width / 1.85 - 33,
			dimensions.height / 3.9 - 33,
			66,
			66
		)
		createImage(
			'/images/icons/menu.png',
			dimensions.width / 1.5 - 28,
			dimensions.height / 5.1 - 26,
			55,
			55
		)
		createImage(
			'/images/icons/personal.png',
			dimensions.width / 5.5 - 33,
			dimensions.height / 2.5 - 30,
			66,
			66
		)
		createImage(
			'/images/icons/teamwork.png',
			dimensions.width / 2.3 - 27,
			dimensions.height / 2.5 - 29,
			55,
			55
		)
		createImage(
			'/images/icons/timetable.png',
			dimensions.width / 1.39 - 33,
			dimensions.height / 2.5 - 33,
			66,
			66
		)

		// ONCLICK---EVENT---LISTENER

		canvas.addEventListener('click', (e) => {
			// Get mouse click coordinates
			let x = e.clientX - canvas.offsetLeft
			let y = e.clientY - canvas.offsetTop

			// Check if the click was inside the arcs
			let pos0 = Math.sqrt(
				(x - dimensions.width / 4.5) ** 2 + (y - dimensions.height / 11) ** 2
			)
			if (pos0 < 47) {
				// setColor("coral")
				CreateCircle(
					dimensions.width / 4.5,
					dimensions.height / 11,
					53,
					'coral'
				)
			}
			let pos1 = Math.sqrt(
				(x - dimensions.width / 2) ** 2 + (y - dimensions.height / 11) ** 2
			)
			if (pos1 < 47) {
				// setColor("red")
				CreateCircle(dimensions.width / 2, dimensions.height / 11, 53, 'coral')
				setVisibleTicketing(true)
			}
			let pos2 = Math.sqrt(
				(x - dimensions.width / 1.3) ** 2 + (y - dimensions.height / 11) ** 2
			)
			if (pos2 < 47) {
				// setColor("blue")
				CreateCircle(
					dimensions.width / 1.3,
					dimensions.height / 11,
					53,
					'coral'
				)
			}
			let pos3 = Math.sqrt(
				(x - dimensions.width / 3.6) ** 2 + (y - dimensions.height / 3.4) ** 2
			)
			if (pos3 < 35) {
				// setColor("yellow")
				CreateCircle(
					dimensions.width / 3.6,
					dimensions.height / 3.4,
					41,
					'coral'
				)
			}
			let pos4 = Math.sqrt(
				(x - dimensions.width / 2.5) ** 2 + (y - dimensions.height / 5.1) ** 2
			)
			if (pos4 < 35) {
				// setColor("skyblue")
				CreateCircle(
					dimensions.width / 2.5,
					dimensions.height / 5.1,
					41,
					'coral'
				)
				setVisibleFullScreen(true)
			}
			let pos5 = Math.sqrt(
				(x - dimensions.width / 1.85) ** 2 + (y - dimensions.height / 3.9) ** 2
			)
			if (pos5 < 35) {
				// setColor("coral")
				CreateCircle(
					dimensions.width / 1.85,
					dimensions.height / 3.9,
					41,
					'coral'
				)
				setVisiblePersonal(true)
			}
			let pos6 = Math.sqrt(
				(x - dimensions.width / 1.5) ** 2 + (y - dimensions.height / 5.1) ** 2
			)
			if (pos6 < 35) {
				// setColor("pink")
				CreateCircle(
					dimensions.width / 1.5,
					dimensions.height / 5.1,
					41,
					'coral'
				)
				setVisibleFood(true)

			}
			let pos7 = Math.sqrt(
				(x - dimensions.width / 5.5) ** 2 + (y - dimensions.height / 2.5) ** 2
			)
			if (pos7 < 47) {
				// setColor("purple")
				CreateCircle(
					dimensions.width / 5.5,
					dimensions.height / 2.5,
					57,
					'coral'
				)
			}
			let pos8 = Math.sqrt(
				(x - dimensions.width / 2.3) ** 2 + (y - dimensions.height / 2.5) ** 2
			)
			if (pos8 < 47) {
				// setColor("green")
				CreateCircle(
					dimensions.width / 2.3,
					dimensions.height / 2.5,
					57,
					'coral'
				)
			}
			let pos9 = Math.sqrt(
				(x - dimensions.width / 1.39) ** 2 + (y - dimensions.height / 2.5) ** 2
			)
			if (pos9 < 47) {
				// setColor("gray")
				CreateCircle(
					dimensions.width / 1.39,
					dimensions.height / 2.5,
					57,
					'coral'
				)
			}
		})
	}, [dimensions])

	return (
		<>
			<canvas
				width={dimensions.width}
				height={dimensions.height}
				ref={canvasRef}
			/>
			{/* <div
    style={{
      backgroundColor: color,
      width: "100%",
      height: "777px",
    }}
  >
 
   
  </div> */}

			{/* SEND EMAIL */}
			<Sidebar
				style={{ height: '333px' }}
				visible={visibleFullScreen}
				fullScreen
				onHide={() => setVisibleFullScreen(false)}>
				<form onSubmit={handleSubmit}>
					<div className='send-mail-btns'>
						<InputText
							placeholder='to'
							id='to'
							value={to}
							onChange={(e) => setTo(e.target.value)}
						/>
						<InputText
							id='sbj'
							placeholder='sbj'
							value={sbj}
							onChange={(e) => setSbj(e.target.value)}
						/>
					</div>
					<Editor
						id='text'
						value={text}
						onTextChange={(e) => setText(e.textValue)}
					/>

					<input
						className='ticketing-submit my-1 p-1'
						type='submit'
						value={'ارسال'}
					/>
				</form>
			</Sidebar>

			{/* Personal */}
			<Sidebar
				visible={visiblePersonal}
				onHide={() => setVisiblePersonal(false)}
				fullScreen>
				<Personal />
			</Sidebar>

			<Sidebar
				visible={visibleTicketing}
				onHide={() => setVisibleTicketing(false)}
				fullScreen>
				<CreateIssue />
			</Sidebar>
			<Sidebar
				visible={visibleFood}
				onHide={() => setVisibleFood(false)}
				fullScreen>
				<Food />
			</Sidebar>
		</>
	)
}

export default ResponsiveCanvas

// const images = [
//   "/images/icons/internet.png",
//   "/images/icons/accounting.png",
//   "/images/icons/email.png",
//   "/images/icons/dashboard.png",
//   "/images/icons/leave.png",
//   "/images/icons/menu.png",
//   "/images/icons/personal.png",
//   "/images/icons/teamwork.png",
//   "/images/icons/tickets.png",
//   "/images/icons/timetable.png",
// ]
