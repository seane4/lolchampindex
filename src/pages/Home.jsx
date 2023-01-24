import ChampGrid from "../components/champgrid/ChampGrid.jsx"
import ChampFocus from "../components/champfocus/ChampFocus.jsx"
import "./home.scss"
import React from "react"
import { useState } from "react"
import EmptyFocus from "../components/champfocus/empty/EmptyFocus.jsx"
import Filter from "../components/Filter/Filter.jsx"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Home = () => {

  const [focus, setFocused] = useState({
    name: "",
    tags: [],
    role: "",
    title: "",
  })

  const [query, setQuery] = useState("")

  const [filter, setFilter] = useState("")

  return (
    <div className="home">
        <div className="mainContainer">
          <div className="champGridPlus">
            <div className="champGridPlusSearch">
              <div className="searchBarPlus">
                <div className="searchPlusBtn">
                  <div className="searchBar">
                    <input onChange={e => setQuery(e.target.value)} value={query} type="text" className="search" placeholder="Search for a champion"/>
                    {query === "" ? <SearchIcon className="icon search"/>: <CloseIcon onClick={e => setQuery("")} className="icon close"/>}
                  </div>
                </div>
                <Filter filter={filter} setFilter={setFilter}/>
              </div>
              <ChampGrid query={query} setQuery={setQuery} filter={filter} focus={focus} setFocused={setFocused}/>
            </div>
            {/*The focus module should appear empty when no champion is selected. EmptyFocus is a clean starting point for the focus module. */}
            {focus.name !== "" ? <ChampFocus focus={focus} /> : <EmptyFocus/> }
          </div>
        </div>
    </div>
  )
}

export default Home