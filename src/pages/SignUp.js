import React from 'react'

const SignUp = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form>
          <h3 className='text-2xl font-bold'>Please Register Here</h3>
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input id="email"name='email' type="email" placeholder="E-mail" class="input input-bordered w-full p-3 rounded-lg" required/>
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input id="password"name='password' type="password" placeholder="Password" class="input input-bordered w-full p-3 rounded-lg" required/>
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <input id="confirmPassword"name='confirmPassword' type="password" placeholder="Password" class="input input-bordered w-full p-3 rounded-lg" required/>
          <label class="label">
            <span class="text-blue-500 label-text-alt link link-hover">Forgot password?</span>
            <br />
            <span class="text-blue-500 label-text-alt link link-hover">Already Have An Account? Login here</span>
          </label>
            <input type="checkbox" name="check" id="check" />
            &nbsp;
            <span>I agree all terms and conditon</span>
          <input type="submit" value="Register" class="mt-4 btn btn-primary w-full p-3 rounded-lg"/>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp