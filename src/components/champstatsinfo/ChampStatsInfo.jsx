import "./champstatsinfo.scss"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const ChampStatsInfo = () => {
   

    return (
    <div className="champStatsInfo">
        <div className="wrapper">
            <div className="item">
                <TrendingUpIcon className={"icon positive" }/>
                <span className="label">Win Rate</span>
                <span className="figure">50%</span>
            </div>
            <div className="item">
                <TrendingFlatIcon className="icon"/>
                <span className="label">Pick Rate</span>
                <span className="figure">3%</span>
            </div>
            <div className="item">
                <TrendingUpIcon className="icon positive"/>
                <span className="label">Ban Rate</span>
                <span className="figure">8%</span>
            </div>
        </div>
    </div>
  )
}

export default ChampStatsInfo