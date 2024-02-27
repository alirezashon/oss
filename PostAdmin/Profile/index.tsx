import Items from "./Items/index"
import Image from "next/Image"
import Address from "./Address/index"
import Chat from "./Chat/index"
import Notification from "./Notifications/index"
import styles from "./index.module.css"
import { useState } from "react"
import Orders from "./Orders/index"
import Favorites from "./Favorites/index"
import LastSeen from "./LastSeen/index"
const Profile = () => {
  const [state, setState] = useState("سفارشات")
  const items = [
    "سفارشات",
    "مورد علاقه",
    "گفتگو",
    "آدرس ها",
    "بازدید های اخیر",
    "پیغام ها",
  ]
  return (
    <>
      <div className={styles.container}>
        <div className={styles.itemsBox}>
          {items.map((item) => (
            <>
              <div onClick={() => setState(item)}>{item}</div>
            </>
          ))}
        </div>
        {state === "سفارشات" ? (
          <Orders />
        ) : state === "مورد علاقه" ? (
          <Favorites />
        ) : state === "گفتگو" ? (
          <Chat />
        ) : state === "آدرس ها" ? (
          <Address />
        ) : state === "بازدید های اخیر" ? (
          <LastSeen />
        ) : (
          state === "پیغام ها" && <Notification />
        )}
        <div className={styles.topBox}>
          <div className={styles.profileBox}>
            <Image
              className={styles.image}
              src={"/images/logo.png"}
              width={111}
              height={111}
            />
            <p>Name</p>
            <p>7/3/1380</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
