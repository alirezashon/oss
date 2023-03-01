import React, { useEffect, useRef, useState } from "react"

export default function index() {
  const [color, setColor] = useState("#499b01")
  const [content, setContent] = useState("خانه")
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    canvas.height = window.innerHeight / 1.3
    canvas.width = window.innerWidth / 1.3

    class Circle {
      constructor(xpoint, ypoint, color, childX, childY) {
        this.xpoint = xpoint
        this.ypoint = ypoint
        this.radius = 50
        this.color = color
        this.childX = childX
        this.childY = childY
      }
      draw(context) {
        context.beginPath()
        context.arc(
          this.xpoint,
          this.ypoint,
          this.radius,
          0,
          Math.PI * 2,
          false
        )
        context.strokeStyle = "#FFFFFF"
        context.lineWidth = 2
        context.fillStyle = this.color
        context.fill()
        context.stroke()
      }
      createChildren() {
        context.beginPath()
        context.arc(
          this.childX,
          this.childY,
          this.radius,
          0,
          Math.PI * 2,
          false
        )
        context.strokeStyle = "black"
        context.lineWidth = 2
        context.fillStyle = this.color
        context.fill()
        context.stroke()
      }

      update() {
        context.clearRect(351, 180, 105, 233)
        context.beginPath()
        context.arc(300, 377, 50, 0, Math.PI * 2)
        context.strokeStyle = "green"
        context.lineWidth = 1
        context.fillStyle = "coral"
        context.fill()
        context.stroke()

        // detect side walls
        // if (this.xpoint == pos4[0]) {
        // 	return;
        // }

        // requestAnimationFrame(this.update);
      }
      selected() {
        // context.clearRect(351, 180, 105, 233);
        context.beginPath()
        context.arc(404, 240, this.radius, 0, Math.PI * 2)
        context.strokeStyle = "dark"
        context.lineWidth = 1
        context.fillStyle = this.color
        context.fill()
        context.stroke()
      }

      changeColor(newColor) {
        this.color = newColor
        this.draw(context)
      }
    }

    class CreateChildren {
      constructor(childX, childY, color) {
        this.childX = childX
        this.childY = childY
        this.color = color
      }
      draw(context) {
        context.beginPath()
        context.arc(this.childX, this.childY, 30, 0, Math.PI * 2, false)
        context.strokeStyle = "dark"
        context.lineWidth = 2
        context.fillStyle = this.color
        context.fill()
        context.stroke()
      }
    }

    let circle = new Circle(404, 240, "coral")
    circle.draw(context)

    let circle1 = new Circle(404, 66, "#499b01")
    circle1.draw(context)

    let circle2 = new Circle(566, 200, "#015423")
    circle2.draw(context)

    let circle3 = new Circle(510, 377, "orange")
    circle3.draw(context)

    let circle4 = new Circle(300, 377, "skyblue")
    circle4.draw(context)

    let circle5 = new Circle(230, 200, "darkblue")
    circle5.draw(context)

    canvas.addEventListener("click", (e) => {
      // Get mouse click coordinates
      let x = e.clientX - canvas.offsetLeft
      let y = e.clientY - canvas.offsetTop

      // Check if the click was inside the arcs
      let pos0 = Math.sqrt((x - 404) ** 2 + (y - 240) ** 2)
      if (pos0 < 50) {
        circle.update()
        setColor("coral")
        setContent("تیکتینگ")
      }

      let pos1 = Math.sqrt((x - 404) ** 2 + (y - 66) ** 2)
      if (pos1 < 50) {
        circle1.selected()
        new CreateChildren(481, 99, "#499b01").draw(context)
        new CreateChildren(411, 150, "#499b01").draw(context)
        new CreateChildren(333, 111, "#499b01").draw(context)
        setColor("#499b01")
        setContent("پورتال")
      }

      let pos2 = Math.sqrt((x - 566) ** 2 + (y - 200) ** 2)
      if (pos2 < 50) {
        circle2.selected()
        new CreateChildren(637, 154, "#015423").draw(context)
        new CreateChildren(690, 117, "#015423").draw(context)
        new CreateChildren(745, 82, "#015423").draw(context)
        setColor("#015423")
        setContent("امورکارکنان")
      }

      let pos3 = Math.sqrt((x - 510) ** 2 + (y - 377) ** 2)
      if (pos3 < 50) {
        circle3.selected()
        new CreateChildren(586, 333, "orange").draw(context)
        new CreateChildren(640, 293, "orange").draw(context)
        new CreateChildren(692, 254, "orange").draw(context)
        setColor("orange")
        setContent("صندوق")
      }

      let pos4 = Math.sqrt((x - 300) ** 2 + (y - 377) ** 2)
      if (pos4 < 50) {
        circle4.selected()
        new CreateChildren(228, 331, "skyblue").draw(context)
        new CreateChildren(170, 299, "skyblue").draw(context)
        new CreateChildren(117, 259, "skyblue").draw(context)
        setColor("skyblue")
        setContent("رزرو غذا")
      }

      let pos5 = Math.sqrt((x - 230) ** 2 + (y - 200) ** 2)
      if (pos5 < 50) {
        circle5.selected()
        new CreateChildren(160, 150, "darkblue").draw(context)
        new CreateChildren(110, 110, "darkblue").draw(context)
        new CreateChildren(62, 69, "darkblue").draw(context)
        setColor("darkblue")
        setContent("ایمیل")
      }
    })

    context.beginPath()
    context.moveTo(449, 44)
    context.quadraticCurveTo(544, 93, 577, 150)

    context.moveTo(599, 238)
    context.quadraticCurveTo(594, 311, 555, 357)

    context.moveTo(477, 415)
    context.quadraticCurveTo(410, 441, 339, 410)

    context.moveTo(253, 360)
    context.quadraticCurveTo(210, 330, 199, 238)

    context.moveTo(222, 151)
    context.quadraticCurveTo(273, 81, 359, 47)

    context.strokeStyle = "black"
    context.stroke()
    // Your canvas code goes here
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        width="100%"
        height="444px"
        // style={{backgroundColor : 'black'}}
      />
      <div
        style={{
          backgroundColor: color,
          width: "100%",
          height: "777px",
        }}
      >
        <h1 style={{ marginLeft: "45%", color: "#FFFFFF" }}>{content}</h1>
      </div>
    </>
  )
}
