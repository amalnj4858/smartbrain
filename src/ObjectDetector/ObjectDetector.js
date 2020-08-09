import React from 'react';
import 'tachyons';
import Detectionbox from '../DetectionBox/DetectionBox'
import Clarifai from 'clarifai';

const app = new Clarifai.App({apiKey: '7aa3ba3ee7ac46bd831a2b8a28d945a4'});

class Detector extends React.Component {
	constructor(){
		super();
		this.state = {
			imageurl : '',
			imgattributes : []
		}
	}

	onDetect = (event)=>{
		const input = document.getElementById('urlinput');
		this.setState({imageurl:input.value});
		app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(this.state.imageurl);
      })
      .then(response => {
        this.setState({imgattributes:response.outputs[0].data.concepts.slice(0,4)})
      })
	}

	onClear = (event)=>{
		const input = document.getElementById('urlinput');
		input.value = '';
	}
	

	render(){
		return(
			<div className= 'tc'>
			<div className = 'ba bw1 br2 pa1 dib' id = 'urldetector'>
			<input type = 'text' id = 'urlinput'/>
			<button onClick = {this.onDetect} className = 'pointer br2 grow' id = 'detect'> Detect </button>
			<button onClick = {this.onClear} className = 'pointer br2 grow' id = 'clear'> Clear </button>
			</div>
			<br />
			<br />
			<Detectionbox url = {this.state.imageurl} attributes = {this.state.imgattributes} />
			</div>
			)
	}
}

export default Detector;