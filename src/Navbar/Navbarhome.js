import React from 'react';

const Navbarhome = ({linktext1,linktext2,onclick})=>{
	return(
		<div id = 'nav'>
			<p className = 'underline link ma1 pa1 grow pointer f3' onClick = {()=>onclick('register')}>{linktext1} </p>
			<p className = 'underline link ma1 pa1 grow pointer f3' onClick = {()=>onclick('signin')}>{linktext2} </p>
		</div>
		)
}

export default Navbarhome;