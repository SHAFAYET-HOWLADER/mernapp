import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../shared/Loading';
const Login = () => {
  const [signInWithGoogle, googleUser,googleLoading, googleError] = useSignInWithGoogle(auth);
  let displayError;
  if (googleError) {
    return <> displayError = {googleError.message}</>
  }
  if (googleUser) {
    console.log(googleUser.email)
  }
  if(googleLoading){
    return <Loading/>
  }
  return (
  <div className='flex h-screen justify-center items-center'>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <h3 className='text-2xl font-bold'>Please Login Here</h3>
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="E-mail" required class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" class="input input-bordered" />
          <label class="label">
            <span class="text-blue-500 label-text-alt link link-hover">Forgot password?</span>
            <br />
            <span class="text-blue-500 label-text-alt link link-hover">New to free thoughts? Register here</span>
          </label>
        </div>
        <div class="form-control mt-6">
          {displayError}
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