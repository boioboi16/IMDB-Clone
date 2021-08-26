import React, { useContext } from 'react'
import { AppContext, useGlobalContext } from './context'
const SearchForm = () => {
  const {query,setQuery,error} = useContext(AppContext);

  return <form action="" className="search-form" onSubmit={(e)=>{
    e.preventDefault();
  }}>
    <h2>Search Movies</h2>
    <input type="text" className='form-input' value={query} onChange={(e)=> setQuery(e.target.value)}/>
    {error.show && <div className='error'>{error.msg}</div>}
  </form>
}

export default SearchForm
