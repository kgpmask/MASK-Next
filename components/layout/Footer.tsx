import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiLogoFacebookSquare, BiLogoGmail, BiLogoGithub, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

import SocialHandles from "./SocialHandles";
import SocietyLogo from "./SocietyLogo";

const Footer = () => {
    const footerLinks = [
        {
            name: "YouTube",
            href: "https://www.youtube.com/@maskiitkgp",
            icon: BiLogoYoutube,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/maskiitkgp",
            icon: BiLogoInstagram,
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/maskiitkgp",
            icon: BiLogoFacebookSquare,
        },
        { name: "Gmail", href: "mailto:kgpmask@gmail.com", icon: BiLogoGmail },
        {
            name: "GitHub",
            href: "https://github.com/kgpmask/MASK",
            icon: BiLogoGithub,
        },
    ];

    return (
        <footer>
            <SocietyLogo />
            <Link href="/" id="footer-name">
                <p>
                    Manga and Anime
                    <br />
                    Society Kharagpur
                </p>
            </Link>
            <div id="contact-us">
                <span className="float-middle">Find us!</span>
            </div>
            {footerLinks.map(({ name, href, icon }) => (
                <SocialHandles title={name} link={href} Icon={icon} key={href} />
            ))}
        </footer>
    );
};

export default Footer;
