import styles from "@/styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>
      <div>&copy; 2024 Manga and Anime Society Kharagpur. All Rights Reserved.</div>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/maskiitkgp" target="_blank">
          <img src="/assets/insta.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@maskiitkgp" target="_blank">
          <img src="/assets/yt.png" alt="YouTube" />
        </a>
        <a href="https://www.facebook.com/maskiitkgp" target="_blank">
          <img src="/assets/fb.png" alt="Facebook" />
        </a>
        <a href="mailto:kgpmask@gmail.com" target="_blank">
          <img src="/assets/mail.png" alt="Email" />
        </a>
        <a href="https://github.com/kgpmask" target="_blank">
          <img src="/assets/github.png" alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
