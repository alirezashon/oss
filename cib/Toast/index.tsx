// import React from 'react';

// const ErrorPage: React.FC<{ errorMessage: string }> = ({ errorMessage }) => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>خطا</h1>
//       <p>متأسفیم، یک خطای ناشناخته رخ داده است:</p>
//       <p>{errorMessage}</p>
//     </div>
//   );
// };

// export default ErrorPage;

import React, { useState, useEffect } from "react"
import styles from "./index.module.css"
interface Props {
  text: string
  color: string
  direction: string
}
const Toast: React.FC<Props> = ({ text, color, direction }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isVisible && (
        <div className={`${styles.toast} ${styles[color]} ${styles[direction]}`}>
          <span>{text}</span>
        </div>
      )}
    </>
  )
}

export default Toast
