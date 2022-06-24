import Inputtxt from "../component/Inputtxt"

export default function Signup() {
  return (
    <div className="logincontainer">
     
    <div className="left">
    <img src="./asset/image/reg.svg" style={{padding: "28px"}}alt="" />
    </div>
    {/* <span className="vl"></span> */}
    <div className="right">
    <form action="">
      <div className="login-pic ">
        <img className="center" src="./asset/image/profile_pic.svg" alt="" />
      </div>
      <h2 className="text-center">Signup</h2>

      <Inputtxt type='text' label='Username' />
      <Inputtxt type='text' label='Phone no' />
            <Inputtxt type='password' label='Password'/>
            <Inputtxt type='password' label='Confirm Password'/>
           
              <button className="login-btn center">Signup</button>
             
            </form>
    </div>
           
          </div>
  )
}

 