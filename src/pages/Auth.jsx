import React, { useState } from "react";
import RegisterForm from "./../components/RegisterForm";
import LoginForm from "./../components/LoginForm";

function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="mt-7 flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold mb-24">بوت کمپ بوتواستارت</h1>
      <div className=" flex flex-col w-[360px] border-[1px] border-[#E4E4E4] bg-white rounded-[40px] p-6 pb-4">
        <div className="w-full flex flex-col justify-center items-center gap-1 mb-14">
          <span className="w-full h-[84px] p-3">
            <img
              src="/public/botostart logo.png"
              alt="botostart logo"
              className="w-full h-full object-contain"
            />
          </span>
          <h2 className="text-[20px] font-bold">
            {isLogin ? "فرم ورود" : "فرم ثبت‌نام"}
          </h2>
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        {isLogin ? (
          <button
            onClick={() => setIsLogin(false)}
            className="text-[#55A3F0] text-right mt-2 hover:underline"
          >
            ایجاد حساب کاربری!
          </button>
        ) : (
          <button
            onClick={() => setIsLogin(true)}
            className="text-[#55A3F0] text-right mt-2 text-xs hover:underline"
          >
            حساب کاربری دارید؟
          </button>
        )}
      </div>
    </div>
  );
}

export default Auth;
