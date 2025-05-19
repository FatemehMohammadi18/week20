import React from "react";

function RegisterForm() {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="نام کاربری" />
        <input type="password" name="password" id="" placeholder="رمز عبور" />
        <input
          type="password"
          name="password"
          id=""
          placeholder="تکرار رمز عبور"
        />
        <button type="submit">ثبت نام</button>
      </form>
    </div>
  );
}

export default RegisterForm;
