import React from 'react';
import './App.css';
import Recorder from './Recorder/Recorder';
import Navbar from './Navbar/Navbar';
import Detector from './ObjectDetector/ObjectDetector';
import 'tachyons';
import Signin from './signin/signin';
import Register from './register/register';
import Navbarhome from './Navbar/Navbarhome';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route : 'signin',
      name : ''
    }
  }

  onRouteChange = (nextRoute)=>{
    this.setState({route:nextRoute});
  }

  onRegister = ()=>{
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    if(!name.value.length || !password.value.length)
      alert('Please enter both name and password');
    else
      fetch(' https://protected-mountain-73108.herokuapp.com/register',{
        method : 'post',
        headers : {'Content-Type' : 'application/json' },
        body : JSON.stringify({ 
          name : name.value,
          password : password.value
        })
      })
      .then(response=> response.json())
      .then(username=>{
        if(username === 'user exists')
          alert('There is another user with the same name!')
        else{
          if(username.toLowerCase()==='jaleel')
          this.setState({name: 'Papa',route:'home'});
          else if(username.toLowerCase()==='najeena')
          this.setState({name: 'Amma',route:'home'});
          else if(username.toLowerCase()==='ashini')
          this.setState({name: 'Chechi',route:'home'});
          else if(username.toLowerCase()==='riti')
          this.setState({name: 'Jinju',route:'home'});
          else
          this.setState({name: username,route:'home'});
        }
      })
    }
    
  

  onSignIn = ()=>{
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    if(!name.value.length || !password.value.length)
        alert('Please enter both name and password');
    else
      fetch(' https://protected-mountain-73108.herokuapp.com/signin',{
        method : 'post',
        headers : {'Content-Type' : 'application/json' },
        body : JSON.stringify({ 
          name : name.value,
          password : password.value
        })
      })
      .then(response=> response.json())
      .then(username=>{
        if(username === 'no such user')
          alert('There is no user with this name! Register to proceed');
        else if(username === 'wrong password!')
          alert(username);
        else{
          if(username.toLowerCase()==='jaleel')
          this.setState({name: 'Papa',route:'home'});
          else if(username.toLowerCase()==='najeena')
          this.setState({name: 'Amma',route:'home'});
          else if(username.toLowerCase()==='ashini')
          this.setState({name: 'Chechi',route:'home'});
          else if(username.toLowerCase()==='riti')
          this.setState({name: 'Jinju',route:'home'});
          else
          this.setState({name: username,route:'home'});
      }
      })
  }

  render(){

  if(this.state.route === 'signin')
    return(
      <div className = 'tc' class= 'start' >
      <br />
      <Navbarhome linktext1 = 'Register' linktext2 = 'Sign In' onclick = {this.onRouteChange} />
      <div class = 'gap' />
      <div class = 'gap' />
      <center>
      <Signin onclick = {this.onSignIn} />
      </center>
      </div>
      )
  else if(this.state.route === 'register')
    return(
      <div className = 'tc' class = 'start' >
      <br />
      <Navbarhome linktext1 = 'Register' linktext2 = 'Sign In' onclick = {this.onRouteChange} />
      <div class = 'gap' />
      <div class = 'gap' />
      <center>
      <Register onclick = {this.onRegister} />
      </center>
      </div>
      )

  else if(this.state.route === 'assistant')
  return(
    <div className='tc' id='assistant'>
    <br />
    <Navbar linktext1 = 'Sign Out' linktext2 = 'Home' onclick = {this.onRouteChange} />
    <center>
    <p className='f2'> Welcome To The Voice Assistant Section! </p>
    <p className='f3'> Intro : I am an assistant that replies to things you say to me. Connect your earphones, click start and say 'hello' over the mic to get started! </p>
    </center>
    <Recorder className='tc' />
    <br />
    <br />
    </div>
    )
  else if(this.state.route === 'objectdetector')
    return(
      <div className ='tc' id = 'object'>
      <br />
      <Navbar linktext1 = 'Sign Out' linktext2 = 'Home' onclick = {this.onRouteChange} />
      <center>
      <p className= 'f2'> Welcome To The Image Describer Section! </p>
      <p className= 'f3'> Copy and paste the address of an image and I will describe to you all that I can about it! </p>
      </center>
      <br />
      <br />
      <Detector />
      <br/>
      <br/>
      </div>
      )
  else if(this.state.route === 'home')
    return(
      <div className ='tc' id = 'home'>
      <br />
      <Navbar linktext1 = 'Sign Out' linktext2 = 'Home' onclick = {this.onRouteChange} />
      <center>
      <p className= 'f1 '> Hey {this.state.name} </p>
      <p className= 'f2  animate__animated animate__slideInLeft'> Welcome Aboard! </p>
      <img src = {require('./smart.jpg')} id = 'logo' className='grow pointer'/>
      <p className= 'f3 '> I'm SmartBrain, an AI powered website capable of doing some really smart stuff. </p>
      <p className= 'f3 '> So head over to the models down below and get ready to be mindblown! </p>
      <br />
      <div className = ' ba bw1 br2 tc' id='models'>
      <p className = 'ba bw1 br2 link ma1 pa1 grow pointer f4 dib tc ' onClick = {()=>this.onRouteChange('objectdetector')}>Image Describer</p>
      <p className = 'ba bw1 br2 link ma1 pa1 grow pointer f4 dib tc ' onClick = {()=>this.onRouteChange('assistant')}>Voice Assistant</p>
      </div>
      </center>
      <div class = 'gap' />
      <center>
      <p> <em><strong> ~Made With Love~ </strong></em> </p>
      </center>
      </div>
      )
}
}

export default App;
