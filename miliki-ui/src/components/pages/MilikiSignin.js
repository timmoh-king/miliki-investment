import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../context/UserAuthContextProvider";
import MilikiButton from "../common/MilikiButton";
import MilikiNavbar from "../common/MilikiNavbar";
import MilikiInput from "../common/MilikiInput";

const MilikiSignin = () => {

  const[inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  const[error, setError] = useState('')

  const {login} = useContext(UserAuthContext)

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputs((prev) => ({...prev, [name]: value}))
  }

  const clearForm = () => {
    setInputs({
      email: "",
      password: ""
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await login(inputs);
      navigate("/home")
      clearForm()
    } catch (error){
      setError(error.response.data.error)
    }
  }

  return (
    <div>
      <MilikiNavbar isNavHome={true} />
      <div className="items-center mt-1">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="w-[640px] h-[768px] bg-gradient-to-b from-miliki-gray to-white">
            <p className="leading-normal mt-[236px] text-center text-miliki-blue lg:text-2xl md:text-xl sm:text-md font-inter font-[900] not-italic">
              Miliki <span className="text-miliki-sky-blue">investment</span>
            </p>
            <p className="mt-5 px-8 text-center text-miliki-black lg:text-[16px] md:text-[14px] sm:text-[12px]">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five
            </p>
            <div className="flex flex-row mt-8 px-8 items-center">
              <p className="text-center text-miliki-black lg:text-[16px] md:text-[14px] sm:text-[12px]">
                Already have an account?
              </p>
              <MilikiButton
                to="/signup"
                buttonText="Sign up"
                isButtonForm={false}
                buttonStyle="bg-white mx-3 text-black ring-miliki-blue ring-[1px] h-[34px] hover:bg-miliki-blue hover:text-white hover:ring-[0px]"
              />
            </div>
          </div>
          <div className="w-[640px] h-[768px] bg-gradient-to-b from-white to-miliki-gray">
            <div className="mt-[196px] items-center">
              <form onSubmit={handleSubmit}>
              <MilikiInput
                index="user-login-email"
                isFormInput={true}
                label="Email"
                name="email"
                placeholder="Enter your email"
                inputType="text"
                onChange={handleChange}
                value={inputs.email}
                required={true}
              />
              <MilikiInput
                index="user-login-password"
                isFormInput={true}
                label="Password"
                name="password"
                placeholder="Enter your password"
                inputType="password"
                onChange={handleChange}
                value={inputs.password}
                required={true}
              /> 
              <br />
              <p className="text-miliki-red">{ error }</p>  
              <MilikiButton
                to="/home"
                onClickButtonHandler={handleSubmit}
                buttonType="submit"
                buttonStyle="mt-8 mx-16"
                isButtonForm={true}
                buttonText="Sign in"
              />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilikiSignin;
