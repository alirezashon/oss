import Image from "next/image"
import styles from "./index.module.css"
const Profile = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.topBox}>
        <div className={styles.profileBox}>
          <Image className={styles.image} src={"/images/logo.png"} width={111} height={111}/>
          <p>Name</p>
          <p>7/3/1380</p>
        </div>

        <div className={styles.detailBox}>
          <div className={styles.detailRow}>
            <label>آدرس :</label>
            <p>
               street onvari thi wsay in the alley or the valley kalley por
               street onvari thi wsay in the alley or the valley kalley por
               street onvari thi wsay in the alley or the valley kalley por
               street onvari thi wsay in the alley or the valley kalley por
               street onvari thi wsay in the alley or the valley kalley por
               street onvari thi wsay in the alley or the valley kalley por
               street onvari thi wsay in the alley or the valley kalley por
               street onvari thi wsay in the alley or the valley kalley por
              gozalansovvichkonixy
            </p>
          </div>
          <div className={styles.detailRow}>
            <label>کد پستی :</label>
            <p>75895862</p>
          </div>
          <div className={styles.detailRow}>
            <label>شماره تلفن :</label>
            <p> 865514</p>
          </div>
        <div className={styles.detailRow}>
          <label>ایمیل</label>
          <p>
            street@sfg.cas
          </p>
        </div>
        </div>

        <div className={styles.orderHistory}>
          <div className={styles.orderBox}>
            
          </div>
        </div></div>
      </div>
    </>
  )
}

export default Profile
