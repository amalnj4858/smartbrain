import React from 'react';

const Navbar = ({linktext1,linktext2,onclick})=>{
	return(
		<div id = 'nav'>
			<p className = 'underline link ma1 pa1 grow pointer f3' onClick = {()=>onclick('home')}>{linktext2} </p>
			<p className = 'underline link ma1 pa1 grow pointer f3' onClick = {()=>onclick('signin')}>{linktext1} </p>
		</div>
		)
}

export default Navbar;