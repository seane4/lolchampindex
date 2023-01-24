import "./champfocus.scss"
import * as Icon from "../../testingdatalocation/img/icons/icon_components/icons"
import championFull from "../../testingdatalocation/championFull.json"
import AbilityContainer from "./abilitycontainer/AbilityContainer"
import ChampStatsInfo from "../champstatsinfo/ChampStatsInfo"

const ChampFocus = ({focus}) => {
  
  // const rawChampName = focus;

  //this takes care of champion names who cause trouble, like Bel'Veth, Cho'Gath, and others
  let champ = focus.name.replace(/[,' .]/g, "");
  const champName = focus.name;
  const champmap = championFull.data;  

  //After taking out spaces and punctuation, we can find champion images for each champion
    switch(champ) {
        case "BelVeth":
        case "ChoGath":
        case "KaiSa":
        case "KhaZix":
        case "LeBlanc":
        case "VelKoz":
          //these names dont match their respective image files because of the capitalized letter after removing spaces or punctuation
            champ = champ[0].toUpperCase() + champ.slice(1).toLowerCase();
            break;
        case "Wukong":
            champ = "MonkeyKing";
            break;
        case "Nunu&Willump":
            champ = "Nunu";
            break;
        case "RenataGlasc":
            champ = "Renata";
            break;
        default:
            // code for any other case
    }
  
    //handleIcon takes the primary tag for each champion, and returns a specific icon based on that tag
    const handleIcon = (item) => {
      switch(item) {
        case "Mage":
            return <Icon.MageIcon className="tagIcon" size={32}/>;
        case "Fighter":
            return <Icon.FighterIcon className="tagIcon" size={32}/>;
        case "Assassin":
            return <Icon.AssassinIcon className="tagIcon" size={32}/>;
        case "Support":
            return <Icon.SupportIcon className="tagIcon" size={32}/>;
        case "Tank":
            return <Icon.TankIcon className="tagIcon" size={32}/>;
        case "Marksman":
            return <Icon.MarksmanIcon className="tagIcon" size={32}/>;
        default:
            // code for any other case
      } 
    }
  
    //handleRoleIcon takes role, a number 1-5 created by me in champion.json, and returns an icon from the icons.js file
    const handleRoleIcon = (role) => {
      switch(role) {
        case "Top":
            return <Icon.TopRoleIcon className="roleIcon" size={32}/>;
        case "Jungle":
            return <Icon.JungleRoleIcon className="roleIcon" size={32}/>;
        case "Mid":
            return <Icon.MidRoleIcon className="roleIcon" size={32}/>;
        case "Bot":
            return <Icon.BotRoleIcon className="roleIcon" size={32}/>;
        case "Support":
            return <Icon.SupportRoleIcon className="roleIcon" size={32}/>;
        default:
            // code for any other case
      } 
    }

    //handleColor takes the primary tag for each champion, and returns a dynamic classname in order to color-code tags for each champion
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

  return (
    <div className="champFocus">
      <div className="wrapper">
        {/* Splash image and icon live here */}
        <div className="cardHeader">
          <div className="icons">
          <div className="tagIcon">
            {/*To generate a top left icon for primary tag, we take the first tag at array index 0 and pass it
            to handleIcon */}
            {handleIcon(focus.tags[0])}
          </div>
          <div className="roleIcon">
            {/*To generate a top left icon for primary role, we take the role we created in champion.json, a number 1-5 indicating role/position and pass it
            to handleRoleIcon */}
            {handleRoleIcon(focus.role)}
          </div>
          </div>
          <img class="champHeader" src={ focus !== "" ? `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`: " "} alt=""/>
        </div>
        <div className="champImgContainer">
          <img class="champImg" src={ focus !== "" ? `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champ}.png`: " "} alt=""/>
        </div>
        <div className="champInfoContainer">
          <div className="champStandardInfoContainer">
              <span className="name">
                {focus.name}
              </span>
              <span className="title">
                {focus.title}
              </span>
            <div className="tags">
                <div className={handleColor(focus.tags[0])}>{focus.tags[0]}</div>
                { focus.tags[1] &&
                <div className={handleColor(focus.tags[1])}>{focus.tags[1]}</div> }
            </div>
          </div>  
        </div>
        <div className="statsInfoContainer">
          <ChampStatsInfo version={"13.1.1"} champ={champ}/>
        </div>
        {/*this is where the content of each champion lives within the focus container */}  
        <div className="contentBody">
            <div className="subtitle">Champion Abilities</div>
            <AbilityContainer version={"13.1.1"} champ={champ}/>
        </div>
      </div>
      
    </div>
  )
}

export default ChampFocus