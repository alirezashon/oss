import Image from "next/image"
import React, { MouseEvent, useState } from "react"
import styles from "./index.module.css"
import Search from "../../Components/Form/Search"
import { MdAddCircle } from "react-icons/md"

interface Story {
  _id: string
  title: string
  src: string
  price: number
  category: string
  quantity: number
  description: string
  size: string
  color: string
  model: string
}

const initialFormData: Story = {
  _id: "string",
  title: "string",
  src: "/images/alireza.jpg",
  price: 55,
  category: "string",
  quantity: 77,
  description: "string",
  size: "77",
  color: "solati",
  model: "azinjadida",
}

const PostAdmin: React.FC = () => {
  const [text, setText] = useState<string>("")
  const [openActions, setOpenAction] = useState<number>(-1)
  const [formData, setFormData] = useState<Story>(initialFormData)
  const [selectedColor, setSelectedColor] = useState("#3498db")
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value)
  }

  const data = [
    {
      _id: "string",
      title: "string",
      src: "/images/alireza.jpg",
      price: 55,
      category: "string",
      quantity: 77,
      description: "string",
      size: "77",
      color: "pink",
      model: "azinjadida",
    },
  ]

  const handleActionClick = (index: number) => {
    setOpenAction(index)
    setFormData(data[index])
  }

  const handleAddClick = () => {
    setOpenAction(-1)
    setFormData(initialFormData)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.actionBox}>
          <div className={styles.searchBox}>
            <Search />
          </div>
            <MdAddCircle className={styles.add} size={"6vh"} />
        </div>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((post) => (
                  <th key={post}>{post}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((post, index) => (
                <tr key={post._id}>
                  {Object.values(post).map((item, index) =>
                    index === 2 ? (
                      <td key={index}>
                        <Image
                          src={`${item}`}
                          alt={`${post.title}`}
                          width={77}
                          height={77}
                        />
                      </td>
                    ) : index === 8 ? (
                      <td>
                          <input
                            type="color"
                            value={selectedColor}
                            onChange={handleColorChange}
                            className={styles.colorInput}
                          />
                          <div
                            className={`${styles.colorPreview} ${styles.selected}`}
                            style={{ backgroundColor: selectedColor }}
                          ></div>
                      
                      </td>
                    ) : (
                      <td key={index}>{item}</td>
                    )
                  )}
                  <td>
                    <div
                      className={styles.actionButton}
                      onClick={() => handleActionClick(index)}
                    >
                      Action
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* open item for action */}
      {openActions !== -1 && (
        <div className={styles.actionContainer}>
          <form>
            {Object.entries(formData).map(([key, value], index) =>
              index === 2 ? (
                <Image src={`${value}`} alt={`${key}`} width={77} height={77} />
              ) : (
                <div style={{}} key={key}>
                  <label>{key}</label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        [key]: e.target.value,
                      }))
                    }
                  />
                </div>
              )
            )}
            <input type={"submit"} />
            <button className={styles.delete}>Delete</button>
          </form>
        </div>
      )}
    </>
  )
}

export default PostAdmin
