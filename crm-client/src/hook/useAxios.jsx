import axios from 'axios';
import React, { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Context } from '../provider/AuthProvider';
import { API_BASE_URL } from '../config/api';


const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true // Correct property name and syntax
  });

const useAxios = () => {
    let{signOuts}= useContext(Context)
    let link =   useNavigate()


    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=> {
            console.log(response)
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
          }, error=> {
           


            if(error.status===401 || error.status===401){
               signOuts()
               .then(res=>{
                console/log(res)
               
                link("/login")

               })
               .catch(error=>{
             
               })
            }
            return Promise.reject(error);
          });
    },[link, signOuts])




    return axiosInstance
   
};

export default useAxios;