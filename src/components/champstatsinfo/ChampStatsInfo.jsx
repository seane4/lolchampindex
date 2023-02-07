import "./champstatsinfo.scss"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const ChampStatsInfo = () => {
   
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
    <div className="champStatsInfo">
        <div className="wrapper">
            <div className="item">
                <TrendingUpIcon className={"icon positive" }/>
                <span className="label">Win Rate</span>
                <span className="figure">{randomIntFromInterval(48, 55)}%</span>
            </div>
            <div className="item">
                <TrendingFlatIcon className="icon"/>
                <span className="label">Pick Rate</span>
                <span className="figure">{randomIntFromInterval(8, 20)}%</span>
            </div>
            <div className="item">
                <TrendingUpIcon className="icon positive"/>
                <span className="label">Ban Rate</span>
                <span className="figure">{randomIntFromInterval(2, 15)}%</span>
            </div>
        </div>
    </div>
  )
}

export default ChampStatsInfo