/** @format */

import React, { useState } from "react"
import { Sidebar } from "primereact/sidebar"
import { Button } from "primereact/button"
import { Badge } from "primereact/badge"
import Accordion from "../formcomponents/Accordion"
import { Editor } from "primereact/editor"
import { InputText } from "primereact/inputtext"

export default function index() {
  const [visibleLeft, setVisibleLeft] = useState(false)
  const [visibleFullScreen, setVisibleFullScreen] = useState(false)
  const [text, setText] = useState("")
  const [to, setTo] = useState("")
  const [sbj, setSbj] = useState("")
  //send email
  const handleSubmit = async () => {
    const response = await fetch("/api/newMail", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ text, to, sbj }),
    })
    const data = await response.json()
    console.log(data)
  }

  const customIcons = (
    <React.Fragment>
      <button className="p-sidebar-icon p-link mr-1">
        <span className="pi pi-print" />
      </button>
      <button className="p-sidebar-icon p-link mr-1">
        <span className="pi pi-arrow-right" />
      </button>
    </React.Fragment>
  )

  return (
    <div>
      <div className="card">
        <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
          <h3>لیست ایمیل ها</h3>
          <Button
            icon="pi pi-th-large"
            onClick={() => setVisibleFullScreen(true)}
            className="mr-2 border border-white drawer-btn"
          />

          <Accordion
            props={{
              label: "Alireza Akbari",
              content: "please create access to programing world for me :)",
            }}
          />
          <Accordion
            props={{
              label: "Pesar Khale",
              content: "every one will know soon",
            }}
          />
          <Accordion
            props={{
              label: "Sharafian",
              content: "God is Great!!!",
            }}
          />
        </Sidebar>

        <Sidebar
          style={{ height: "333px" }}
          visible={visibleFullScreen}
          fullScreen
          onHide={() => setVisibleFullScreen(false)}
        >
          <form onSubmit={handleSubmit}>
            <div className="send-mail-btns">
              <InputText
                placeholder="to"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
              <InputText
                id="sbj"
                placeholder="sbj"
                value={sbj}
                onChange={(e) => setSbj(e.target.value)}
              />
            </div>
            <Editor
              id="text"
              value={text}
              onTextChange={(e) => setText(e.textValue)}
            />

            <input type="submit" />
          </form>
        </Sidebar>

        <but
          onClick={() => setVisibleLeft(true)}
          className="mr-2 drawer-btn border border-white"
        >
          <i
            className="pi pi-envelope mr-4 p-text-secondary p-overlay-badge"
            style={{ fontSize: "1.7rem", color: "white" }}
          >
            <Badge value="7" className=" bg-success text-white"></Badge>
          </i>
        </but>
      </div>
    </div>
  )
}
