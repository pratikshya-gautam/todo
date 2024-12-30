import { useEffect, useState } from 'react';

export function Pagination({ hidden = false, onPageChange, page }) {
  const [currentPage, setCurrentPage] = useState(page);

  function changePage(pageNumber) {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  }

  function toAnotherPage(page) {
    setCurrentPage(currentPage + page);
    onPageChange(currentPage + page);
  }

  useEffect(() => {
    if (currentPage !== page) {
      setCurrentPage(page);
    }
  }, [page, currentPage]);

  if (hidden) {
    return null;
  }
  return (
    <div className="mt-3">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li onClick={() => toAnotherPage(-1)} className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            onClick={() => changePage(currentPage)}
            className="page-item active"
          >
            <a className="page-link" href="#">
              {currentPage}
            </a>
          </li>
          <li onClick={() => changePage(currentPage + 1)} className="page-item">
            <a className="page-link" href="#">
              {currentPage + 1}
            </a>
          </li>
          <li onClick={() => changePage(currentPage + 1)} className="page-item">
            <a className="page-link" href="#">
              {currentPage + 2}
            </a>
          </li>
          <li onClick={() => toAnotherPage(+1)} className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
