import React from "react";
import RegisterForm from "./../components/RegisterForm";

function Auth() {
  return (
    <div className="mt-7 flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold mb-24">بوت کمپ بوتواستارت</h1>
      <div className=" flex flex-col w-[360px] border-[1px] border-[#E4E4E4] bg-white rounded-[40px] p-8">
        <div className="w-full flex flex-col justify-center items-center gap-1 mb-14">
          <span className="w-full h-[84px] p-3">
            <img
              src="/public/botostart logo.png"
              alt="botostart logo"
              className="w-full h-full object-contain"
            />
          </span>
          <h2 className="text-[20px] font-bold">فرم ثبت نام</h2>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Auth;
