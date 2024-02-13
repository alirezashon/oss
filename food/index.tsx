import Image from "next/Image"
import styles from "./index.module.css"
import { foods } from "./data"
interface Food {
  name: string
  price: number
  src: string
  quantity: number
}

const weekDays = [
  "شنبه",
  "یک‌شنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
]

const Menu: React.FC<Food[][]> = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuBox}>
          <div className={styles.daysSection}>
            {weekDays.map((day) => (
              <div className={styles.day}>{day}</div>
            ))}
          </div>
          <div className={styles.foodSection}>
            {foods.map((food) => (
              <div className={styles.dayFoods}>
                {food.map((details) => (
                  <div className={styles.foodBox}>
                    <p className={styles.name}>{details.name}</p>
                    <Image className={styles.foodImage} src={`${details.src}`} width={222} height={222} />
                    <p className={styles.price}>{details.price}</p>
                   </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Menu
