import React from 'react';
import Link from 'next/link';


function Policies () {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<Link className="faded" style={{ marginRight: '20px' }} href="/privacy">Privacy Policy</Link>
				<Link className="faded" style={{ marginLeft: '20px' }} href="/terms">Terms of Use</Link>
			</div>
		</div>
	);
}

export default Policies;
