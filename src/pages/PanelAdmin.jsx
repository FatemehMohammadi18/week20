import ProductTable from "../components/productTable";
import HeaderPanel from "../components/HeaderPanel";

import { ProductContext } from "../context/ProductsContext";
import { useContext } from "react";
import Pagination from "../components/Pagination";

function PanelAdmin() {
  const { state, dispatch } = useContext(ProductContext);
  console.log(state, dispatch);
  return (
    <>
      <div>
        <HeaderPanel />

        <div className="flex justify-between mb-5">
          <span className="flex text-[20px] gap-1 items-center font-normal">
            <img src="./manage-icon.svg" alt="manage-product" />
            مدیریت کالا
          </span>
          <button className="bg-[#55A3F0] text-white p-2 rounded-xl font-normal text-[14px]">
            افزودن محصول
          </button>
        </div>

        <ProductTable />

        <Pagination />
      </div>
    </>
  );
}

export default PanelAdmin;
