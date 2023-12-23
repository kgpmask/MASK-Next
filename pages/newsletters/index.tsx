import HeadContent from "@/components/HeadContent";
import styles from '@/styles/Newsletters.module.css';
import latestnewsletter from "./latestnewsletter";
import newsletters from "./newsletters";
import Card from "./Card";

export default function NewslettersPage () {



	return (<>
		<HeadContent
			title='Newsletters'
		/>




	<div id='main' style={{}}>
		<h1 id="heading">Newsletters</h1>
	
		<div className="wrapper" >
			<a className= "newsletter scale-up-tl" id="latest" href="/newsletters/{{ latestnewsletter.link }}" >
			{latestnewsletter
            .map((item, i)=>{
              return <Card 
              key={i} 
              id={item.id} 
			  title={item.title}
              desc={item.desc}
			  link={item.link}
              
              />
            })}	
			</a>

				
				<a className="newsletter old"  href="/newsletters/{{ letter.link }}">
				{newsletters
            .map((item, i)=>{
              return <Card 
              key={i} 
              id={item.id} 
			  title={item.title}
              desc={item.desc}
			  link={item.link}
              
              />
            })}	
				</a>
	
		</div>
	</div>
		
	</>
	);
}
