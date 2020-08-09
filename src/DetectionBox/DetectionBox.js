import React from 'react';

const Detectionbox = ({url,attributes})=>{
	if(url && attributes.length)
	return(
		<div>
		<img src = {url} id = 'image'/>
		<br />
		<br />
		<div className= 'tc ba bw1 br2 pa2 w-20 dib ma1 animate__animated animate__fadeInDown'id = 'attributes' >
		Here's my description - 
		<ul>
		
		 <li class="animate__animated animate__fadeInDown">{attributes[0].name}</li>
		 <li class="animate__animated animate__fadeInDown">{attributes[1].name}</li> 
		 <li class="animate__animated animate__fadeInDown">{attributes[2].name}</li> 
		 <li class="animate__animated animate__fadeInDown">{attributes[3].name}</li> 
		
		</ul>
		</div>
		</div>
		)
	else
		return(
		<img src = {url} id = 'image' />
			)
}

export default Detectionbox;