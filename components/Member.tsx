import { IconType } from 'react-icons';
import Image from 'next/image';

import styles from '@/styles/Members.module.css';

type TeamType = {
	teamColor: string;
	teamIcon: IconType;
	teamTitle: string;
};

interface MemberProps {
	name: string;
	image?: string;
	teams?: TeamType[];
}

const Member: React.FC<MemberProps> = ( { name, image, teams } ) => {
	return (
		<div className={styles['member']}>
			{image && <Image src={image} alt={name} width={100} height={100} className={styles['member-icon']} />}
			<div className={styles['div-line']}> &nbsp; </div>
			<div className={styles['member-desc']}>{name}</div>
			<div className={styles['teamlist']}>
				{teams?.map((team, index) => 
					<div key={index}>
						<team.teamIcon size={20} title={team.teamTitle} color={team.teamColor} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Member;
