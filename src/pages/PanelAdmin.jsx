function PanelAdmin() {
  return (
    <>
      <div>
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

        <div className="flex justify-between mb-5">
          <span className="flex text-[20px] gap-1 items-center font-normal">
            <img src="./manage-icon.svg" alt="manage-product" />
            مدیریت کالا
          </span>
          <button className="bg-[#55A3F0] text-white p-2 rounded-xl font-normal text-[14px]">
            افزودن محصول
          </button>
        </div>
        <div className="w-full border-2 border-[#E4E4E4] rounded-[30px] overflow-hidden">
          <table className="w-full h-full p-2 px-4 ">
            <thead className="bg-[#F2F2F2]">
              <tr className=" text-[14px] font-bold text-[#282828]">
                <td className="py-4">نام کالا</td>
                <td>موجودی</td>
                <td>قیمت</td>
                <td>شناسه کالا</td>
              </tr>
            </thead>
            <tbody className="bg-white text-xs font-normal">
              <tr>
                <td className="py-3">نام کالا</td>
                <td>موجودی</td>
                <td>قیمت</td>
                <td>شناسه کالا</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PanelAdmin;
