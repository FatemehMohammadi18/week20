import React from 'react'

function ProductTable({products}) {
  return (
    <div className="w-full min-h-[200px] border-2 border-[#E4E4E4] rounded-[30px] overflow-hidden">
          <table className="w-full h-full p-2 px-4 ">
            <thead className="bg-[#F2F2F2]">
              <tr className=" text-[14px] font-bold text-[#282828]">
                <td className="py-4">نام کالا</td>
                <td>موجودی</td>
                <td>قیمت</td>
                <td>شناسه کالا</td>
                <td></td>
              </tr>
            </thead>
            <tbody className="bg-white h-full text-xs font-normal">
              
              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    محصولی یافت نشد.
                  </td>
                </tr>
              )}

              {products.map((product) => (
                <tr
                  key={product.id}
                  className="  border-b-2 border-[#F2F2F2] py-3"
                >
                  <td className="p-3">{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price} هزار تومان</td>
                  <td className=" break-words">{product.id}</td>
                  <td className="h-full flex justify-center items-center gap-2">
                    <span>
                      <img src="./edit.svg" />
                    </span>

                    <span>
                      <img src="./trash.svg" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default ProductTable
