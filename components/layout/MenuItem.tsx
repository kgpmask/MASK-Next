import React from "react";
import Link from "next/link";

interface MenuItemProps {
    label: string;
    link: string;
    isCurrent?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, isCurrent }) => {
    return (
        <Link href={link}>
            <div className={`lettuce${isCurrent ? " active-page" : ""}`}>{label}</div>
        </Link>
    );
};

export default MenuItem;
