import React from 'react';
import './links.css';
import links from './links-data';

const Links = () => {
	return (
		<div className="links">
			{links.map((link)=>{
				return (
					<div className="link">
						<i className={"icon far "+ link.icon}></i>
						<div>{link.name}</div>
					</div>
				);
			})}
			<div className="link">
				<div className="premium">Start 1 Month <br/> Premium Trial
				</div>
			</div>
		</div>
	)
}
export default Links;
