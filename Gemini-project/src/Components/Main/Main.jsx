import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../Context/Context'
import { useContext } from 'react'

const Main = () =>{

const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    return (
        <div  className='main'>
            <div className='nav'>
                <p>ApnaAI</p>
                <img src={assets.user_icon} alt=""/>                 
            </div>
            <div className='main-container'>
                  {!showResult
                  ?<>
                    <div className='greet'>
                     <p><span>Hello, Ankit.</span></p>
                     <p>How can I help You Today?</p>
                 </div>
                 <div className='cards'>
                    <div className='card'>
                          <p>Some people prefer vegetarian food and some non-vegetarian food. Why?</p>
                          <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className='card'>
                          <p>Briefly summarize this concept : French Revolution</p>
                          <img src={assets.bulb_icon} alt=""/>
                    </div>
                    <div className='card'>
                          <p>BrainStorm team bonding activities for our work retreat</p>
                          <img src={assets.message_icon} alt=""/>
                    </div>
                    <div className='card'>
                          <p>Improve the readability of the following Code</p>
                          <img src={assets.code_icon} alt=""/>
                    </div>
                 </div>
                  </> : <div  className='result'>
                           <div className='result-title'>
                                <img src={assets.user_icon} alt=""/>
                                <p>{recentPrompt}</p>
                           </div>
                           <div className='result-data'>
                            {/* <img src={assets.} */}
                            <img src={assets.gemini_icon} alt=""/>
                            {loading
                            ?<div className='loader'>
                               <hr></hr>
                               <hr></hr>
                               <hr></hr>

                            </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                           </div>
                           <div>

                           </div>
                  </div>
                  }

                 

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt=""></img>
                            <img src={assets.mic_icon} alt=""></img>
                           {input? <img onClick={()=> onSent()} src={assets.send_icon} alt=""></img> : null}
                        </div>      
                    </div>
                    <p className='bottom-info'>
                        ApnaAI may display inaccurate info, including about people, so double-check its responses. your privacy and ApnaAI Apps 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main