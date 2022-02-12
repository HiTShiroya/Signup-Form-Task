import React, { useState } from 'react'
import './Signup.css';
export const SignUp = () => {
    const [FullName, setFullName] = useState("");
    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Age, setAge] = useState("");
    const [Password, setPassword] = useState("");
    const [Adress, setAdress] = useState("");
    const [Gender,setGender]=useState("Male");
    
    function regUser(e){
        e.preventDefault();
        //console.log({FullName,LastName,Email,PhoneNumber,Age,Gender,Adress});

        const data={
            FullName,UserName,Email,PhoneNumber,Age,Gender,Password,Adress
        }

        fetch(" http://localhost:3333/app/signup",{
            method:'POST',

            headers:{
                'Accept':"application/json",
                'Content-Type':'application/json'
            },

            body:JSON.stringify(data)


        }).then((res)=>{
            res.json().then((resp)=>{
                console.log(resp);
            })
        })
        {alert("User Registered Successfully")}


        setAdress("");
        setAge("");
        setEmail("");
        setFullName("");
        setGender('male');
        setPassword("");
        setPhoneNumber("");
        setUserName("");
        
    }
   

    

    return (
        <div className='main_wrapper' >
            
            <div className="card_wrapper">
                           
            <div className='form_wrapper'>
            <div className="title_wrapper">
                <h1 className='title' >Registration Form</h1>
            </div>
                <div className="common_wrapper">
                    <label className='insider_label' >FullName</label>
                    <input className='insider_input' placeholder='Enter Your FullName' type="text" value={FullName} onChange={(e)=>{setFullName(e.target.value)}} name="FullName" />
                </div>
                <div className="common_wrapper">
                    <label className='insider_label' >LastName</label>
                    <input className='insider_input' placeholder='Enter Your LastName' type="text" value={UserName} onChange={(e)=>{setUserName(e.target.value)}} name="LastName"/>
                </div>
                {/* 
                <button className='btn_wrapper' type='submit' onSubmit={regUser}  >Register</button> */}<div className="common_wrapper">
                    <label className='insider_label'>Email</label>
                    <input className='insider_input' placeholder='Enter Valid E-mail' type="text" value={Email} onChange={(e)=>{setEmail(e.target.value)}} name="Email" />
                </div>
                <div className="common_wrapper">
                    <label className='insider_label' >PhoneNumber</label>
                    <input className='insider_input ' placeholder='Enter Valid Number' type="text" value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                </div>
                <div className="common_wrapper">
                    <label className='insider_label' >Age</label>
                    <input className='insider_input' type="text" placeholder='Enter Valid Age' value={Age} onChange={(e)=>setAge(e.target.value)} />
                </div>
                <div className="common_wrapper">
                    <label className='insider_label' >Gender</label>
                    <div className="insider_input demo">
                        <div className="male_wrapper">
                            <input className='male_wrap' type="radio" value="Male" name="Gender" checked={Gender === 'Male'} onChange={(e) =>setGender(e.target.value)} />
                            <label >Male</label>
                        </div>
                        <div className="female_wrap">
                            <input className='female_wrap' type="radio" value="Female" checked={Gender === 'Female'} onChange={(e) => setGender(e.target.value)} name="Gender" />
                            <label >Female</label>
                        </div>
                    </div>
                </div>
                <div className="common_wrapper">
                    <label className='insider_label' >Password</label>
                    <input className='insider_input' type="password" placeholder='Type Your Password' value={Password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="common_wrapper">
                    <label className='insider_label' >Adress</label>
                    <textarea className='insider_input' placeholder='Type Your Adress' name="adress" value={Adress} onChange={(e)=>setAdress(e.target.value)} ></textarea>
                </div>
                 
                
                <button className='btn_wrapper' type='submit' onClick={regUser}  >Register</button>
            </div>
            </div>
        </div>
    )
}