import { IconType } from 'react-icons';
import Image from 'next/image';

import styles from '@/styles/Members.module.css';

interface Team {
	Icon: IconType;
	title: string;
	color?: string;
}

interface MemberProps {
	name: string;
	image: string;
	teams?: Team[];
}

const Member: React.FC<MemberProps> = ({ name, image, teams }) => {
	return (
		<div className={styles['member']}>
			<Image src={image} alt={name} width={100} height={100} className={styles['member-icon']} />
			<div className={styles['div-line']}> &nbsp; </div>
			<div className={styles['member-desc']}>{name}</div>
			<div className={styles['teamlist']}>
				{teams?.map((team, index) => (
					<div key={index}>
						<team.Icon size={20} title={team.title} color={team.color} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Member;
