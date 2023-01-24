import "./champcontainer.scss"
import ImageHandler from "./imagehandler/ImageHandler"
import * as Icon from "../../testingdatalocation/img/icons/icon_components/icons"

const ChampContainer = ({focus, name, title, setFocused, tags, role}) => {

  const handleColor = (item) => {
    switch(item) {
      case "Mage":
          return "tag mage";
      case "Fighter":
          return "tag fighter";
      case "Assassin":
          return "tag assassin";
      case "Support":
          return "tag support";
      case "Tank":
          return "tag tank";
      case "Marksman":
          return "tag marksman";
      default:
          // code for any other case
    } 
  }

  const handleIcon = (item) => {
    switch(item) {
      case "Mage":
          return <Icon.MageIcon className="tagIcon" size={20}/>;
      case "Fighter":
          return <Icon.FighterIcon className="tagIcon" size={20}/>;
      case "Assassin":
          return <Icon.AssassinIcon className="tagIcon" size={20}/>;
      case "Support":
          return <Icon.SupportIcon className="tagIcon" size={20}/>;
      case "Tank":
          return <Icon.TankIcon className="tagIcon" size={20}/>;
      case "Marksman":
          return <Icon.MarksmanIcon className="tagIcon" size={20}/>;
      default:
          // code for any other case
    } 
  }

  const handleRoleIcon = (role) => {
    switch(role) {
      case "Top":
          return <Icon.TopRoleIcon className="roleIcon" size={20}/>;
      case "Jungle":
          return <Icon.JungleRoleIcon className="roleIcon" size={20}/>;
      case "Mid":
          return <Icon.MidRoleIcon className="roleIcon" size={20}/>;
      case "Bot":
          return <Icon.BotRoleIcon className="roleIcon" size={20}/>;
      case "Support":
          return <Icon.SupportRoleIcon className="roleIcon" size={20}/>;
      default:
          // code for any other case
    } 
  }

  //this helps us reassign which champion appears in the focus module
  const handleClick = (name, tags, title, role) => {
    setFocused(prevState => ({
      name: name,
      tags: tags,
      title: title,
      role: role,
    }));
  }

  //onclick event tells us which champion is selected, and gives that container a different class so it appears "selected" on screen
  return (
    <div onClick={e => handleClick(name, tags, title, role)} className={focus.name === name ? "champContainerselected" : "champContainer"}>
      <div className="wrapper">
        <div className="iconContainer">
          <div className="tagIcon">
            {handleIcon(tags[0])}
          </div>
          <div className="roleIcon">
            {handleRoleIcon(role)}
          </div>
        </div>
        {/*remember earlier when we mapped over the champion.json file? this is what we return PER iteration*/}
        <ImageHandler className="champImg" name={name}/>
        <span className="title">{name}</span>
        <span className="subtitle">{title}</span>
        <div className="tags">
          <div className={handleColor(tags[0])}>{tags[0]}</div>
          { tags[1] &&
            <div className={handleColor(tags[1])}>{tags[1]}</div>
          }
        </div>
      </div>
    </div>
  )

  
}



export default ChampContainer
