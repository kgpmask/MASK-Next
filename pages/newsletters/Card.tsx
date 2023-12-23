
import React from 'react'
import '@/styles/Newsletters.module.css';

interface Props {
    id: number;
    link: string,
    title: string,
    desc: string
}

const Card: React.FC<Props> = ({
    id,
    link, 
    title, 
    desc
}) => {

  return (
    <div>
        <img className="cover" src={`/newsletterReleases/${link}/cover.webp`}/>
		<div className="desc">
			<h3>{title}</h3>
			<p>{desc}</p>
		</div>
    </div>
  )
}

export default Card;