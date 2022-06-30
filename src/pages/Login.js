import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Login = () => {
  const [signInWithGoogle, googleUser,googleLoading, googleError] = useSignInWithGoogle(auth);
  console.log(googleUser)
  return (
  <div className='flex h-screen justify-center items-center'>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="E-mail" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="Password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
        <div class="flex flex-col w-full border-opacity-50">
        <div class="divider">OR</div>
        <button onClick={() => signInWithGoogle()} class="btn w-full bg-primary hover:bg-primary text-white">Continue With Google</button>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Login