import React,{useState} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
let favourites = {};
let reminders = [];
const Recorder = ()=> {
 
  var response = document.getElementById('response');
  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'My name is *',
      callback: (name) => {
        response.innerHTML =  `Hello ${name}! How are you doing?`;
      }
    },
    {
      command: 'Hello',
      callback: () => {
        response.innerHTML =  `Hello there! I am your assistant :) To learn about how to use me, please scroll down... Lets start off by getting to know each other! What's your name?`;
      }
    },
    {
      command: 'Hai',
      callback: () => {
        response.innerHTML =  `Hello there! I am your assistant :) Lets start off by getting to know each other! What's your name?`;
      }
    },
    {
      command: 'My favourite * is *',
      callback: (item,value) => {
        Object.assign(favourites,{item:value})
        response.innerHTML =  `Okay! I will remember that your favourite ${item} is ${value}.`;
      }
    },
    {
      command: 'What is my favourite *',
      callback: (item) => {
        if(favourites.item)
          response.innerHTML =  `You once told me that your favourite ${item} is ${favourites.item}`;
        else
          response.innerHTML =  `You never told me what your favourite ${item} is...Perhaps you could tell me now`;
      }
    },
     ,
    {
      command: 'I am *',
      callback: (name) => {
      response.innerHTML =  `Hello ${name}! How are you doing?`;
      }
    },
    {
      command: 'What is your name',
      callback: () => {
      response.innerHTML =  `You can call me Mr. Assistant :)`;
      }
    },
    {
      command: 'I am good',
      callback: () => {
      response.innerHTML =  `That's such a pleasant thing to hear!`;
      }
    },
    {
      command: 'I am fine',
      callback: () => {
      response.innerHTML =  `That's such a pleasant thing to hear!`;
      }
    },
    {
      command: 'I am great',
      callback: () => {
      response.innerHTML =  `That's such a pleasant thing to hear!`;
      }
    },
    {
      command: 'I am doing good',
      callback: () => {
      response.innerHTML =  `That's such a pleasant thing to hear!`;
      }
    },
    {
      command: 'Sing me a song',
      callback: () => {
      response.innerHTML =  `It is really unfortunate that I cannot sing or dance :(`;
      }
    },
    {
      command: 'Sing a song',
      callback: () => {
      response.innerHTML =  `It is really unfortunate that I cannot sing or dance :(`;
      }
    },
    {
      command: 'Bye',
      callback: () => {
      response.innerHTML =  `Pleased to have been with you... Hope to see you again soon :)`;
      }
    },
    {
      command: 'I am leaving',
      callback: () => {
      response.innerHTML =  `Pleased to have been with you... Hope to see you again soon :)`;
      }
    },
    {
      command:'Remind me to *',
      callback: (reminder) => {
      reminders.push(reminder);
      response.innerHTML =  `Okay! I will remind you to ${reminder}`;
      }
    },
    {
      command:'View reminders',
      callback: () => {
      var reminderList = 'The current reminders are: ' ;
      if(reminders.length === 0)
      response.innerHTML = 'You have not asked me to remind you of anything yet...';
      else {
      reminders.forEach(reminder => reminderList+= reminder + ', ')
      response.innerHTML = reminderList.slice(0,reminderList.length-2);  
      }                           
    }
  },
  {
      command: 'You are smart',
      callback: () => {
      response.innerHTML =  `Thank you soo much... means a lot coming from you :))`;
      }
    },
    {
      command: 'You are not smart',
      callback: () => {
      response.innerHTML =  `Thanks for the feedback. I promise to get better at it!`;
      }
    }
    ]


  const { transcript, resetTranscript } = useSpeechRecognition({commands})

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    alert('not supported in your browser... please use google chrome for best result');
  }

  const action = () =>{
    document.getElementById('detection').innerHTML = '';
    SpeechRecognition.startListening({langauage:'en-IN',continuous:true});
  }

  const onReset =() =>{
    resetTranscript();
    SpeechRecognition.stopListening();
  }


  return (
    <div className='tc'>
      <div id='box' className='w-100 tc dib'>
      <center>
      <p className='ba bw1 br2 ma1 pa2 w-30' id ='detection' >{transcript}</p>
      <br/>
      <p className='ba bw1 br2 pa2 ma1 w-30' id ='response' >Say hello..</p>
      </center>
      </div>
      <br />
      <br />
      <div>
      <button onClick={action} className= 'ma2  ba bw1 br2 grow pointer'>Start</button>
      <button onClick={onReset} className= 'ma2  ba bw1 br2 grow pointer'>Stop</button>
      </div>
      <br />
      <br />
      <p className='ba bw1 br2 pa2 ma1 w-30 tc dib ' id = 'tips' >Pro tips:
      <br />
      <ul>
      <li>Hit stop once you finish saying your command and speak slow(I'm a machine after all...)</li>
      <li>Introduce yourself... say 'I'm ...' or 'My name is ...'</li>
      <li>I can keep reminders for you, just say 'remind me to ...'</li> 
      <li>To list all your reminders say 'view reminders'</li>
      <li>I can remember your favourites, just say 'my favourite ... is ...'</li>
      <li>Ask for your favourites that you have asked me to remember, say 'what is my favourite ...'</li>
      <li>I can also recognise Hindi! Try a few lines to test me.</li>                       
      <li>If you think I'm smart, Let me know</li>                       
      <li>Dont forget to say bye before you leave :)</li>                       
      </ul>
      </p>
    </div>
  )
}
export default Recorder;