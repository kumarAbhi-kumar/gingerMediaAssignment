import React, { useEffect } from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { authState } from '../login/authState';
import { useRecoilValue } from 'recoil';


export const Home = () => {
  const navigate = useNavigate()
  const access_token = localStorage.getItem("accessToken")
  const refresh_Token = localStorage.getItem("refreshToken")
  useEffect(()=>{
    if (!access_token || !refresh_Token){
      navigate('/login')
    }
  },[])
  return (
    <div>home</div>
  );
};
