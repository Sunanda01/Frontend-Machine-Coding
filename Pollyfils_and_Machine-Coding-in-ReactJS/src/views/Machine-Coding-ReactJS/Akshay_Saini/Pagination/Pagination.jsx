import "./index.css";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
const Pagination = ({ currPage, setCurrPage, totalPage }) => {
  return (
    <div className="page-number-btn">
      <ChevronLeftCircleIcon
        className={`icon ${currPage === 0 ? "disabled" : ""}`}
        onClick={() => setCurrPage((prev) => prev - 1)}
      />
      {[...Array(totalPage).keys()].map((k) => (
        <span
          className={`page-key ${currPage === k ? "active" : ""}`}
          key={k}
          onClick={() => setCurrPage(k)}
        >
          {k + 1}
        </span>
      ))}
      <ChevronRightCircleIcon
        className={`icon ${currPage === totalPage - 1 ? "disabled" : ""}`}
        onClick={() => setCurrPage((prev) => prev + 1)}
      />
    </div>
  );
};
export default Pagination;
