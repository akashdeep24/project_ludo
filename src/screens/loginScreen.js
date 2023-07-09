import React from 'react'

const FormHeader = props => (
  <h2 id="loginHeaderTitle">{props.title}</h2>
);


const Form = props => (
 <div>
   <FormInput description="Enter Phone Number" placeholder="Phone Number" type="text" maxlength="10" />
   <FormInput description="Enter OTP" placeholder="One Time Password" type="password" maxlength="4"/>
   <FormButton title="Log in"/>
 </div>
);

const FormButton = props => (
<div id="login_button" class="login_input">
  <button>{props.title}</button>
</div>
);

const FormInput = props => (
<div class="login_input">
  <label>{props.description}</label>
  <input maxlength={props.maxlength} type={props.type} placeholder={props.placeholder}/>
</div>  
);


function LoginScreen() {
  return (
    <div class="mx-auto my-0 flex items-center justify-center">
      <div class="mx-auto my-0 flex items-start justify-center">
        <div id="loginform">
          {/* <FormHeader title="Login" /> */}
          <Form />
        </div>
      </div>
    </div>

  )
}

export default LoginScreen