import styles from '@/styles/TextPage.module.css';

interface DescriptionProps {
	information: Object;
}

const Description: React.FC<DescriptionProps> = ( { information } ) => {
	return (
		<div className={styles['information']}>
			{Object.entries(information).map(([head, info]) => 
				<span key={head}>
					<span className={styles['heading']} key={head}>
						{head}:
					</span>{' '}
					{info}
					<br />
				</span>
			)}
		</div>
	);
};

export default Description;
