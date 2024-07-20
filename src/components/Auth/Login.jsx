import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Login = ({ move, setMove }) => {
  return (
    <>
      <form action="/" className={`w-1/2 [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)] ${move ? 'ml-0' : 'ml-[-50%]'}`}>
        <div className="h-[50px] w-full mt-[20px]">
          <input className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]" type="text" placeholder="Email Address" required />
        </div>
        <div className="h-[50px] w-full mt-[20px]">
          <input className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]" type="password" placeholder="Password" required />
        </div>
        <div className="mt-[5px]"><a href="/" className='text-[#fb7185] no-underline hover:underline'>Forgot password?</a></div>
        <div className="h-[50px] w-full mt-[20px] rounded-[15px] relative overflow-hidden group">
          <div className="h-full w-[300%] absolute -left-full bg-gradient-to-l from-[#881337] to-[#fb7185] rounded-[15px] [transition:all_0.4s_ease] group-hover:left-[0]"></div>
          <Link to="/profile"> {/* Remove It During Changes */}
          <input className="outline-none h-full w-full relative bg-none border-[none] text-[#fff] pl-0 rounded-[15px] text-[20px] font-medium cursor-pointer" type="submit" value="Login" />
          </Link>
        </div>
        <div className="text-center mt-[20px]">Not a member? <span onClick={() => setMove(false)} className='text-[#fb7185] no-underline cursor-pointer hover:underline'>Signup now</span></div>
        <div className='h-[50px] w-full flex justify-center'>
          <button className="h-full w-3/4 text-center mt-[10px] border flex justify-evenly items-center font-semibold border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <FcGoogle className="w-6 h-6"/><span>Continue with Google</span>
          </button>
        </div>
      </form>
    </>
  )
}

export default Login
