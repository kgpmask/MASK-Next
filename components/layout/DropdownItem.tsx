import React from "react";
import Link from "next/link";

interface DropdownItemProps {
	label: string;
	link: string;
	isCurrent?: Boolean;
	disabled?: Boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, link, isCurrent, disabled }) => {
	return (
		<Link href={link} className={`${isCurrent ? "active-page" : ""} ${disabled ? "disabled" : ""}`}>
			{label}
		</Link>
	);
};

export default DropdownItem;
