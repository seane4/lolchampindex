import "./filter.scss"
import * as Icon from "../../testingdatalocation/img/icons/icon_components/icons"

const Filter = ({filter, setFilter}) => {

    const handleFilter = (role) => {
        
        if(role === filter) {
            setFilter("")
        } else {
            setFilter(role)
        }

    }

  return (
    <div className="filter">
        <div className="wrapper">
            <div className="icons">
                    <div className={filter === "Top" ? "icon selected" : "icon" } onClick={(e) => handleFilter("Top")}>
                    <Icon.TopRoleIcon size={24}/>
                </div>
                <div className={filter === "Jungle" ? "icon selected" : "icon" } onClick={(e) => handleFilter("Jungle")}>
                    <Icon.JungleRoleIcon size={24}/>
                </div>
                <div className={filter === "Mid" ? "icon selected" : "icon" } onClick={(e) => handleFilter("Mid")}>
                    <Icon.MidRoleIcon size={24}/>
                </div>
                <div className={filter === "Bot" ? "icon selected" : "icon" } onClick={(e) => handleFilter("Bot")}>
                    <Icon.BotRoleIcon size={24}/>
                </div>
                <div className={filter === "Support" ? "icon selected" : "icon" } onClick={(e) => handleFilter("Support")}>
                    <Icon.SupportRoleIcon size={24}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter