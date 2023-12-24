import { FC } from "react";
import PaginationControlsProps from "./PaginationControlsProps";

const PaginationControls: FC<PaginationControlsProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <div className="flex justify-center mt-4 mb-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md mr-2"
            >
                Previous Page
            </button>
            <span className="text-lg font-bold">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2"
            >
                Next Page
            </button>
        </div>
    );
};

export default PaginationControls;
