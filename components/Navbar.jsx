import styles from '@/styles/Navbar.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);

  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "Art", href: "/art" },
    { name: "Newsletters", href: "/newsletter" },
    { name: "Videos", href: "/videos" },
    { name: "Events", href: "/events" },
    { name: "Members", href: "/members" },
  ];

  const handleClick = (href) => {
    setActive(href);
    router.push(href);
  };

  return (
    <nav className={styles.navbarFull}>
      <ul>
        <div>
          <a href="/" className={styles.logo}>
            <img src="/assets/logo.jpeg" alt="Logo" className={styles.navbarLogo} />
          </a>
        </div>

        <div className={styles.navbarContainer}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`${styles.link} ${active === item.href ? styles.active : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </div>

        <div className={styles.aboutus}>
          <a
            href="/about"
            className={`${active === "/about" ? styles.active : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleClick("/about");
            }}
          >
            About Us
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
