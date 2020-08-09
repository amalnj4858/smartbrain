import React from 'react';

const Signin = ({onclick})=>{
	return(
		<main class="pa4 tc ba bw1 br3 dib">
		  <form class="measure center">
		    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
		      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
		      <div class="mt3">
		        <label class="db fw6 lh-copy f6" for="email-address">Name</label>
		        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="name" />
		      </div>
		      <div class="mv3">
		        <label class="db fw6 lh-copy f6" for="password">Password</label>
		        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
		      </div>
		    </fieldset>
		    <div>
		      <input id = 'signin' class=" ph3 pv2 input-reset ba bw1 br2 bg-transparent grow pointer f6 dib" type="button" value="Sign in" onClick = {onclick} />
		    </div>
		  </form>
		</main>
		)
}

export default Signin;