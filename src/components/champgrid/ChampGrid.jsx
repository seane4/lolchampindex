import "./champgrid.scss"
import ChampContainer from "../champcontainer/ChampContainer.jsx"
import champion from "../../testingdatalocation/champion.json"

//we pass this a few times so we can setFocus later in child component, and compare focus module against focus to make one container appear "selected" compared to others
const ChampGrid = ({filter, focus, setFocused, query}) => {
  
  //Object.keys(champmap) gives us an array of all names -> ['Aatrox', 'Ahri', ...]
  //Object.values(champmap) gives us an array of objects, with each object returning champion data -> [0: {id: "Aatrox", role: [1], tags: ["Fighter, Tank"], ...]
  let champmap = champion.data;
  const ObjValChampmap = Object.values(champmap)

  let filteredArray = [];

  const handleFilter = (filter, query) => {
    switch(filter) {
      case "":
        // console.log(Object.keys(champmap))
          filteredArray = Object.keys(champmap).filter(name => name.toLowerCase().startsWith(query.toLowerCase())).map(item => (
            <ChampContainer
              focus={focus}
              role={champmap[item].role}
              setFocused={setFocused}
              keys={champmap[item].key}
              name={champmap[item].name}
              title={champmap[item].title}
              tags={champmap[item].tags}
            />))
          return filteredArray;
      case "Top":
        filteredArray = ObjValChampmap
        .filter(c => c.role === filter)
        .filter(c => c.name.toLowerCase().startsWith(query.toLowerCase()))
        .map(item => (
            <ChampContainer
                focus={focus}
                role={item.role}
                setFocused={setFocused}
                keys={item.key}
                name={item.name}
                title={item.title}
                tags={item.tags}
            />
        ));
          return filteredArray;
      case "Jungle":
        filteredArray = ObjValChampmap
        .filter(c => c.role === filter)
        .filter(c => c.name.toLowerCase().startsWith(query.toLowerCase()))
        .map(item => (
            <ChampContainer
                focus={focus}
                role={item.role}
                setFocused={setFocused}
                keys={item.key}
                name={item.name}
                title={item.title}
                tags={item.tags}
            />
        ));
          return filteredArray;
      case "Mid":
        filteredArray = ObjValChampmap
        .filter(c => c.role === filter)
        .filter(c => c.name.toLowerCase().startsWith(query.toLowerCase()))
        .map(item => (
            <ChampContainer
                focus={focus}
                role={item.role}
                setFocused={setFocused}
                keys={item.key}
                name={item.name}
                title={item.title}
                tags={item.tags}
            />
        ));
          return filteredArray;
      case "Bot":
        filteredArray = ObjValChampmap
        .filter(c => c.role === filter)
        .filter(c => c.name.toLowerCase().startsWith(query.toLowerCase()))
        .map(item => (
            <ChampContainer
                focus={focus}
                role={item.role}
                setFocused={setFocused}
                keys={item.key}
                name={item.name}
                title={item.title}
                tags={item.tags}
            />
        ));
          return filteredArray;
      case "Support":
        filteredArray = ObjValChampmap
        .filter(c => c.role === filter)
        .filter(c => c.name.toLowerCase().startsWith(query.toLowerCase()))
        .map(item => (
            <ChampContainer
                focus={focus}
                role={item.role}
                setFocused={setFocused}
                keys={item.key}
                name={item.name}
                title={item.title}
                tags={item.tags}
            />
        ));
          return filteredArray;
          default:
    }
  }


  //filter = "",
  //  show all
  //filter = "Top",
  //  show ObjValChampmap.filter( champ => champ.role === "Top" )

  //this iterates over every champion and returns our desired info, and creates a container along the way passing what we need as props
  return (
    <div className="champGrid">
      {
        handleFilter(filter, query)
      }  
    </div>
  )
}

export default ChampGrid

