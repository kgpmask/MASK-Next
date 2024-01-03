import React from 'react';
import { useRouter } from 'next/router';

import Footer from './layout/Footer';
import HamburgerMenu from './layout/HamburgerMenu';
import Navbar from './layout/Navbar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ( { children } ) => {
	const Router = useRouter();
	const [viewportWidth, setViewportWidth] = React.useState(720);

	const updateViewportWidth = () => {
		setViewportWidth(window.innerWidth);
	};

	React.useEffect(() => {
		updateViewportWidth();
		window.addEventListener('resize', updateViewportWidth);
		return () => window.removeEventListener('resize', updateViewportWidth);
	} );

	return (
		<>
			<div id="page-container">
				<div id="content-wrap">
					<div
						style={{
							maxHeight: 0,
							maxWidth: 0,
							overflow: 'hidden'
						}}
					>
						<input autoFocus={true} />
					</div>
					{viewportWidth > 600 ?
						<Navbar currentPage={Router.route.split('/')[1]} /> :
						<HamburgerMenu currentPage={Router.route.split('/')[1]} />
					}
					<div id="pagecontent">{children}</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Layout;
