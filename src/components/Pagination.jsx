import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";

function Pagination() {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <div>
      {state.totalPages >= 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {[...Array(state.totalPages)].map((_, index) => {
            const pageNum = index + 1;
            const isCurrent = state.page === pageNum;

            return (
              <button
                key={pageNum}
                disabled={!isCurrent}
                onClick={() => dispatch({ type: "SET_PAGE", payload: pageNum })}
                className={`px-3 py-1 rounded transition-colors duration-200 ${
                  isCurrent
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Pagination;
