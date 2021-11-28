import React, { useState } from "react";

const Contact=() => {
    const[data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });

    const InputEvent = (event)=>{
        const{name,value}= event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };

    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My Phone number is ${data.phone}. My email Address is ${data.email}. My Message is ${data.msg}`);
    };
    return(<>
    <div className="my-5">
        <h1 className="text-center">Contact US</h1>
    </div>
    <div className="container contcat_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleInputName">Full Name</label>
    <input type="text" class="form-control" id="exampleInputName" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Name"/>

  <br/></div>
  <div class="form-group">
    <label for="exampleInputPhone">Phone Number</label>
    <input type="text" class="form-control" id="exampleInputPhone" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Phone Number"/>
  <br/></div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  <br/><br/></div>
  
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message Here</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea><br/>
  </div>
  <div class="col-12">

  <button type="submit" class="btn btn-outline-primary" >Submit</button>
</div>
</form>
            </div>

        </div>
    </div>
        </>
    );
};

export default Contact;