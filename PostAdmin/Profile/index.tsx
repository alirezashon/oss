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
  const [state, setState] = useState()
  const icons = [
    {
      tag: <Orders />,
      name: "سفارشات",
    },
    { tag: <Favorites />, name: "مورد علاقه" },
    {
      tag: <Chat />,
      name: "گفتگو",
    },
    {
      tag: <Address />,
      name: "آدرس ها",
    },
    {
      tag: <LastSeen />,
      name: "بازدید های اخیر",
    },
    {
      tag: <Notification />,
      name: "پیغام ها",
    },
  ]
  return (
    <>
      <div className={styles.container}>
        <Items />
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
        <div className={styles.orderHistory}>
          <div className={styles.orderBox}>kaktoz</div>
        </div>
      </div>
    </>
  )
}

export default Profile
