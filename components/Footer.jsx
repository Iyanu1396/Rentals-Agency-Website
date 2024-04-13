import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <hr className={styles.hr1} />
        <div className={styles.address}>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            <span>
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </span>
          </p>
        </div>
        <div className={styles.phone}>
          <p>
            <i className="fa-solid fa-phone"></i>
            <span>(123) 456-7890</span>
          </p>
          <p>
            <i className="fa-solid fa-print"></i>
            <span> (123) 456-7890</span>
          </p>
        </div>
        <p className={styles.socialMedia}>
          <span>Social Media</span>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-solid fa-rss"></i>
        </p>
        <hr className={styles.hr2} />
        <div className={styles.links}>
          <p>About Us</p>
          <p>Contact us</p>
          <p>Help</p>
          <p>Privacy policy</p>
          <p>Disclaimer</p>
        </div>
        <small>Copyright © 2024 Minimumlivingcost. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
