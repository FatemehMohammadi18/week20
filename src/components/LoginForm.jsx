import React from 'react'

function LoginForm() {
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder='نام کاربری'/>
        <input type="password" name="password" placeholder='رمز عبور'/>
        <button type="submit">ورود</button>
      </form>
    </div>
  )
}

export default LoginForm



