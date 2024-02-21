/** @format */

import Image from "next/image"
import styles from "../index.module.css"
import { foods } from "../data"
import React, { useEffect, useRef, useState } from "react"
import { GiCrossMark, GiCheckMark } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaMinus } from "react-icons/fa"
import { MdAddCircle } from "react-icons/md"

interface Food {
  _id: string
  name: string
  price: number
  src: string
  quantity: number
}

const weekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
]

const Menu = () => {
  const refs = {
    name: useRef<HTMLInputElement>(null),
    price: useRef<HTMLInputElement>(null),
    src: useRef<HTMLInputElement>(null),
  }
  const [isMouseIn, setIsMouseIn] = useState<number[]>([])
  const [data, setData] = useState<Food[][]>(foods)
  const [basket, setBasket] = useState<string[][]>([])
  const [isAddFood, setIsAddFood] = useState<boolean>(false)
  useEffect(() => {
    // setBasket(Get() 	)
  }, [setBasket])
  const handleAction = (name: string, id: string) => {
    // name === 'Add' ? Add(id) : name === 'Remove' && Remove(id)
    // setBasket(Get())
  }

  const FoodDetailsBox = (food: Food) => {}
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuBox}>
          <div className={styles.daysSection}>
            {weekDays.map((day) => (
              <h3 className={styles.day}>{day}</h3>
            ))}
          </div>
          <div className={styles.foodSection}>
            {data.map((food, index) => (
              <div className={styles.dayFoods}>
                {food.map((details, subIndex) => (
                  <div
                    className={styles.foodBox}
                    onMouseEnter={() => setIsMouseIn([index, subIndex])}
                    onMouseLeave={() => setIsMouseIn([])}
                  >
                    <p className={styles.name}>{details.name}</p>
                    <Image
                      alt=""
                      className={styles.foodImage}
                      src={`${details.src}`}
                      width={222}
                      height={222}
                    />
                    <p className={styles.price}>{details.price} تومان</p>
                    {basket[1]?.includes(details._id) && (
                      <div className={styles.inBasketBox}>
                        <AiOutlineShoppingCart
                          className={styles.inBasketIcon}
                          color="#499b01"
                          size={"6vh"}
                        />
                      </div>
                    )}
                    {isMouseIn[0] === index && isMouseIn[1] === subIndex && (
                      <div
                        className={styles.buttonBox}
                        style={{
                          justifyContent: `${
                            basket[1]?.includes(details._id)
                              ? "space-between"
                              : "center"
                          }`,
                        }}
                      >
                        {basket[1]?.includes(details._id) ? (
                          <>
                            <FaMinus
                              onClick={() =>
                                handleAction("Remove", `${details._id}`)
                              }
                            />
                            <MdAddCircle
                            // onClick={() => Add(`${details._id}`)}
                            />
                          </>
                        ) : (
                          <MdAddCircle
                            onClick={() =>
                              handleAction("Add", `${details._id}`)
                            }
                            className={styles.addNewIcon}
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
                <MdAddCircle
                  className={styles.addNewIcon}
                  onClick={() => setIsAddFood(true)}
                />
              </div>
            ))}
            {isAddFood && (
              <div className={styles.foodDetailsBox}>
                <GiCrossMark
                  className={styles.closeFoodBoxIcon}
                  onClick={() => setIsAddFood(false)}
                />
                <div className={styles.foodDetailRow}>
                  <label>نام</label>
                  <input placeholder="غذا..." ref={refs.name} />
                </div>
                <div className={styles.foodDetailRow}>
                  <label>قیمت</label>
                  <input
                    type={"text"}
                    placeholder="تومان..."
                    ref={refs.price}
                  />
                </div>
                <div className={styles.foodDetailRow}>
                  <label>تصویر</label>
                  <input type={"file"} ref={refs.src} />
                </div>
                <GiCheckMark className={styles.submitIcon} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default Menu
