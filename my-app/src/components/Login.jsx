import React from 'react';
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwtDecode from 'jwt-decode';
import { client } from '../client';
import { useEffect } from 'react';
const Login = ()=>{
    const navigate = useNavigate();
function handleCallbackResponse(response){
   const res= jwtDecode(response.credential);
   console.log(res);
   localStorage.setItem('user',JSON.stringify(res));
   const {name , picture,sub} = res;

   const doc ={
    _id:sub,
    _type:'user',
    userName:name,
    image:picture,
 }
 client.createIfNotExists(doc).then((response)=>{
  console.log(response);
    navigate('/', {replace: true})
 })
};

useEffect(()=>{
  window.google?.accounts?.id?.initialize({
    client_id: "326697677732-o50e32cgrchhdv0l4vnpfdlndsi3ujj1.apps.googleusercontent.com",
    callback: handleCallbackResponse,
});
 window.google?.accounts?.id?.renderButton(
    document.getElementById('signInDiv'),
    {theme:'outline',size:"large"}
);
},[])

  return (

   <>
      <div className='flex justify-start items-center flex-col h-screen '>
       <div className='relative w-full h-full'>
        <video src={shareVideo} type="video/mp4" loop controls={false} muted autoPlay className='w-full h-full object-cover' />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <div className="p-5">
                <img src={logo} width="130px" alt="logo" />
            </div>
            <div className="shadow-2xl">
                <div id='signInDiv' ></div>
            </div>
        </div>
       </div>
        </div>
        </>
  )
}

export default Login