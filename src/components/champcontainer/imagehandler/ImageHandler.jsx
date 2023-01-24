import "./imagehandler.scss"

const ImageHandler = ({name}) => {
    const version = "13.1.1"
    let champ = name.replace(/[,' .]/g, "");
    
    //Again, this removes the trouble that names with spacing or punctuation cause us. Then we return the proper champion image.
    switch(champ) {
        case "BelVeth":
        case "ChoGath":
        case "KaiSa":
        case "KhaZix":
        case "LeBlanc":
        case "VelKoz":
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

    return (
    <div className="imageHandler">
        <img className="champImg" src={'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion/' + champ + '.png'} alt=""/>
    </div>
  )
}

export default ImageHandler