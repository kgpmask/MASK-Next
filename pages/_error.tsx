import { NextPage, NextPageContext } from 'next';

interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode }) => {
	return (
		<div>
			<p>
				{statusCode
					? `An error occurred with the code ${statusCode}`
					: 'Something went wrong'}
			</p>
			{statusCode && 
        <h4>
          If you think this is an error, please contact us at&nbsp;
        	<a
        		href="mailto:kgpmask@gmail.com"
        		target="_blank"
        		rel="noopener noreferrer"
        	>
            kgpmask@gmail.com</a>
          .
        </h4>
			}
		</div>
	);
};

Error.getInitialProps = ({ res, err }: NextPageContext ) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
