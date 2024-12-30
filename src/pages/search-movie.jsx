import { useState } from 'react';
import { searchMovies } from '../api/movie-api';
import { Pagination } from '../layout/pagination';

export function SearchMovie() {
  const [searchResult, setSearchResult] = useState([]);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');

  async function handleSearch(currentPage = 1) {
    setPage(currentPage);
    const movies = await searchMovies(title, currentPage);
    if (movies.Response === 'False') {
      setIsResultEmpty(true);
    } else {
      setIsResultEmpty(false);
      setSearchResult(movies.Search);
    }
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      handleSearch(1);
    }
  }

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="p-5 card">
      <div className="text-center mb-5">
        <h3>Search Movie</h3>
      </div>
      <div className="row ">
        <div className="col">
          <div className="input-group mb-3">
            <input
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              type="text"
              className="form-control"
              placeholder="Movie Name"
              aria-label="Movie Name"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              onClick={() => handleSearch(1)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3 row-gap-4 column-gap-2 align-content-center">
        {isResultEmpty && <h5>No Result Found! Try Another Name</h5>}
        {!isResultEmpty &&
          searchResult.map((r) => (
            <div key={'mohan'} className="card" style={{ width: '220px' }}>
              <img
                src={r.Poster}
                height="300px"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{r.Title}</h5>
                <p className="text-muted">Year: {r.Year}</p>
              </div>
              <div className="card-footer">
                <div className="text-center">
                  <button className="btn btn-link">Learn More</button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination
        hidden={searchResult.length === 0}
        onPageChange={handleSearch}
        page={page}
      />
    </div>
  );
}
