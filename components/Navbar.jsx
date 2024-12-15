import styles from '@/styles/Navbar.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const [menuOpen, setMenuOpen] = useState(false); 

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
    <>
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
          <div className={styles.but}>
            <div className={styles.dropdown}>
              <Button text="About Us" url="/aboutus" type="red" icon="null" />
              <div className={styles.dropdownContent}>
                <a href="/aboutus/about">Our Society</a>
                <a href="/aboutus/members">Our Members</a>
                <a href="/aboutus/login">Login</a>
              </div>
            </div>
          </div>
          <div
            className={styles.burger}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className={styles.patty}></div>
          </div>
        </ul>
      </nav>

      <div className={`${styles.slidingMenu} ${menuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.menuContent}>
            {menuItems.map((item) => (
                <a
                key={item.name} href={item.href} className={styles.menuLink} onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    handleClick(item.href);
                }}>{item.name}
                </a>
            ))}
        </div>
        <div className={styles.menuBottom}>
            <a href="/aboutus/login" className={styles.menuLink}>
            Login</a>
            <a href="/aboutus/members" className={styles.menuLink}>Our Members</a>
            <a href="/aboutus/about" className={styles.menuLink}>Our Society</a>
        </div>
     </div>

    </>
  );
};

export default Navbar;
