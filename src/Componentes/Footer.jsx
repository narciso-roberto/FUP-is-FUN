import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h4>About Us</h4>
          <p>We are dedicated to providing the best service.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <p>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Example Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
