import React, { useState } from "react";

/** Handles search based on user input */
function SearchForm({search}) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term)
  }

  return (
    <div className="row justify-content-center">
      <form onSubmit={handleSubmit} className="col-md-8 ">
        <div className="input-group mb-3 mt-3">
          <input className="form-control" value={term} onChange={handleChange} placeholder="Enter search term.." />
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;