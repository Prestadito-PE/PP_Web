import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';

export const useForm =<T extends Object> (formObj:T,validateForm?:(obj?:any)=>T,formResponse?:T) => {
  
    const [form, setForm] = useState(formObj);
    const [errors, setErrors] = useState(formObj);
    const [response,setResponse] = useState(formResponse);

    const handleChange=( value:string,campo:keyof T )=>{
        setForm({
            ...form,
            [campo]:value
        })
    }
   

    const handleBur=(value:string,campo:keyof T)=>{
        handleChange(value,campo)
        if(validateForm){
            setErrors(validateForm(form));
        }
        
    }

    const handleSubmit=(e:React.FormEvent, axiosConfig?:AxiosRequestConfig)=>{
        e.preventDefault();

        if(validateForm){

            // Object.entries(form).find(([key, value]) => {
            //         if(Object.keys(errors).find(x=>x===key)){
            //            if(!value || value.trim().length<1){
            //             console.log("validado");
            //             return;
            //            }
            //         }
            //   });

            for(let frm of Object.entries(form)){
                
                console.log(frm.keys().return);
                // frm[keys]
            }

            for(let err of Object.values(errors)){
                if(err){
                    return;
                }
            } 

        }

       if(axiosConfig){
            axios(axiosConfig).then(({status,data})=>{

                if(status>=200 && status<300){
                    setResponse(data);
                }

            }).catch(( {response})=>{

                const {status,data} = response;
                if(status>=400 && status<500){
                setResponse(data);
                }

            });

       }


    }
    return {
        form,
        errors,
        response,
        handleChange,
        handleBur,
        handleSubmit
        
    }

}
