/** @format */

import { useRef, useState, useEffect } from 'react';

export default function index() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		
		const CreateCircle = (PoseX, PoseY, Radius, Color) => {
			context.beginPath();
			context.arc(PoseX, PoseY, Radius, 0, Math.PI * 2, false);
			context.strokeStyle = 'black';
			context.lineWidth = 1.5;
			context.fillStyle = Color;
			context.fill();
			context.stroke();
		};
		CreateCircle(canvas.width / 2, canvas.height / 2.4, 280, '#FFFFFF');
		CreateCircle(canvas.width / 2, canvas.height / 2.4, 210, '#FFFFFF');
		CreateCircle(canvas.width / 2, canvas.height / 2.4, 140, '#FFFFFF');
		CreateCircle(canvas.width / 2, canvas.height / 2.4, 70, '#FFFFFF');

		// items Circles  ======>

		CreateCircle(canvas.width / 3.2, canvas.height / 4, 40, '#FFFFFF');
		CreateCircle(canvas.width / 2, canvas.height / 11, 40, '#FFFFFF');
		CreateCircle(canvas.width / 1.53, canvas.height / 7, 40, '#FFFFFF');
		CreateCircle(canvas.width / 1.46, canvas.height / 2, 40, '#FFFFFF');
		CreateCircle(canvas.width / 2.5, canvas.height / 1.37, 40, '#FFFFFF');
		CreateCircle(canvas.width / 1.75, canvas.height / 1.36, 40, '#FFFFFF');

		CreateCircle(canvas.width / 2.37, canvas.height / 4, 35, '#FFFFFF');
		CreateCircle(canvas.width / 1.8, canvas.height / 1.8, 35, '#FFFFFF');
		CreateCircle(canvas.width / 2.7, canvas.height / 1.9, 35, '#FFFFFF');
		CreateCircle(canvas.width / 1.67, canvas.height / 3, 35, '#FFFFFF');

		// icons

		const createImage = (src, x, y, width, height) => {
			const icon = new Image();
			icon.src = src;
			icon.onload = () => {
				context.drawImage(icon, x, y, width, height);
			};
		};
		createImage(
			'/images/logo.jpg',
			canvas.width / 2.16,
			canvas.height / 2.78,
			111,
			80
		);
		createImage(
			'/images/icons/internet.png',
			canvas.width / 3.37,
			canvas.height / 4.6,
			50,
			50
		);
		createImage(
			'/images/icons/tickets.png',
			canvas.width / 1.57,
			canvas.height / 9.6,
			55,
			55
		);
		createImage(
			'/images/icons/accounting.png',
			canvas.width / 2.07,
			canvas.height / 20,
			55,
			55
		);
		createImage(
			'/images/icons/dashboard.png',
			canvas.width / 2.46,
			canvas.height / 4.7,
			49,
			49
		);
		createImage(
			'/images/icons/email.png',
			canvas.width / 1.715,
			canvas.height / 3.4,
			48,
			48
		);
		createImage(
			'/images/icons/leave.png',
			canvas.width / 1.5,
			canvas.height / 2.18,
			55,
			55
		);
		createImage(
			'/images/icons/menu.png',
			canvas.width / 1.86,
			canvas.height / 1.94,
			55,
			55
		);
		createImage(
			'/images/icons/personal.png',
			canvas.width / 2.61,
			canvas.height / 1.44,
			55,
			55
		);
		createImage(
			'/images/icons/teamwork.png',
			canvas.width / 1.8,
			canvas.height / 1.45,
			55,
			55
		);
		createImage(
			'/images/icons/timetable.png',
			canvas.width / 2.83,
			canvas.height / 2.06,
			55,
			55
		);
		context.beginPath();
		context.moveTo(canvas.width / 2.95, canvas.height / 4);
		context.lineTo(canvas.width / 2.51, canvas.height / 4);

		context.moveTo(canvas.width / 1.516, canvas.height / 1.96);
		context.lineTo(canvas.width / 1.73, canvas.height / 1.8);

		context.moveTo(canvas.width / 1.77, canvas.height / 1.47);
		context.lineTo(canvas.width / 1.77, canvas.height / 1.66);

		context.moveTo(canvas.width / 1.86, canvas.height / 1.9);
		context.lineTo(canvas.width / 1.9, canvas.height / 2);

		context.moveTo(canvas.width / 1.55, canvas.height / 5.1);
		context.lineTo(canvas.width / 1.63, canvas.height / 3.41);

		context.moveTo(canvas.width / 1.73, canvas.height / 2.83);
		context.lineTo(canvas.width / 1.85, canvas.height / 2.7);

		context.moveTo(canvas.width / 1.63, canvas.height / 2.7);
		context.lineTo(canvas.width / 1.5, canvas.height / 2.18);

		context.moveTo(canvas.width / 2.66, canvas.height / 1.74);
		context.lineTo(canvas.width / 2.55, canvas.height / 1.48);

		context.moveTo(canvas.width / 2.56, canvas.height / 1.99);
		context.lineTo(canvas.width / 2.17, canvas.height / 2.15);

		context.moveTo(canvas.width / 2.64, canvas.height / 2.08);
		context.lineTo(canvas.width / 2.44, canvas.height / 3.44);

		context.moveTo(canvas.width / 2.27, canvas.height / 3.56);
		context.lineTo(canvas.width / 2.16, canvas.height / 2.8);

		context.moveTo(canvas.width / 2.27, canvas.height / 4.5);
		context.lineTo(canvas.width / 2.09, canvas.height / 8);

		context.moveTo(canvas.width / 1.955, canvas.height / 7);
		context.lineTo(canvas.width / 1.7, canvas.height / 3.48);

		context.moveTo(canvas.width / 1.9, canvas.height / 11);
		context.lineTo(canvas.width / 1.593, canvas.height / 7);

		context.moveTo(canvas.width / 2.35, canvas.height / 1.39);
		context.lineTo(canvas.width / 1.86, canvas.height / 1.7);

		context.moveTo(canvas.width / 3.1, canvas.height / 3.3);
		context.lineTo(canvas.width / 2.7, canvas.height / 2.1);

		context.strokeStyle = 'black';
		context.lineWidth = 1;
		context.stroke();
	}, []);

	return (
		<>
			<canvas
				ref={canvasRef}
				
				style={{ width: '200vh', height: '100%' }}
			/>
		</>
	);
}
