import React from 'react';
import { MdFiberNew } from 'react-icons/md';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

interface Update {
  name: string;
  link: string;
  type: string;
  date?: Date;
  hype?: boolean;
}

interface UpdatesProps {
  updates: Update[];
}

const Updates: React.FC<UpdatesProps> = ( { updates } ) => {
	return (
		<div className={styles['notices']}>
			<div className={styles['noticebox']}>
				<div className={styles['notices-header']}>Updates!</div>
				<div className={styles['notices-list']}>
					{updates
						.filter(( { hype } ) => hype)
						.map(( { name, link, type, date }, index) => 
							<React.Fragment key={link}>
								{index > 0 && <hr className={styles['notice-break']} />}
								<Link href={(type === 'art' ? '/art/' : '') + link} className={styles['notice-link']}>
									<div className={styles['notice-post']}>
										{name}
										{date && Date.now() - date.getTime() < 7 * 24 * 60 * 60 * 1000 && 
                      <MdFiberNew size={16} color='var(--error-red)' style={{ marginLeft: 4 }} />
										}
									</div>
								</Link>
							</React.Fragment>
						)}
				</div>
			</div>
		</div>
	);
};

export default Updates;


