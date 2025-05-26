import React from 'react'

function HeaderPanel() {
  return (
    <div className="flex justify-between items-center mb-8 mt-6 bg-white border-2 border-[#E4E4E4] p-2 px-4 rounded-2xl">
          <form>
            <label
              htmlFor="search"
              className="flex gap-2 font-normal text-[16px]"
            >
              <img
                src="./search-normal.svg"
                alt=""
                className="w-[24px] h-[24px] mt-auto mb-auto"
              />
              <input type="search" name="search" placeholder="جستجو کالا" />
            </label>
          </form>
          <div className="flex gap-1 ">
            <span className="min-w-[46px] min-h-[46px] rounded-full bg-amber-200 block">
              dd
            </span>
            <div className="flex flex-col items-start">
              <span className=" text-[16px] font-normal">میلاد عظمی</span>
              <small>مدیر</small>
            </div>
          </div>
        </div>
  )
}

export default HeaderPanel
