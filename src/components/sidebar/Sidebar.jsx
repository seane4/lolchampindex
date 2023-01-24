import "./sidebar.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="wrapper">
            <div className="top">
                <span className="logo">LoLChampIndex</span>
            </div>
            <div className="center">
                <ul className="buttonList">
                    <p className="subtitle">Game</p>
                    <li>
                        <AccountCircleIcon/>
                        <span className="title">My Profile</span>
                    </li>
                    <li>
                        {/*Icon*/}
                        <span className="title">Champions</span>
                    </li>
                    <li>
                        {/*Icon*/}
                        <span className="title">Pro Guides</span>
                    </li>
                    <li>
                        {/*Icon*/}
                        <span className="title">Live Matches</span>
                    </li>
                    <li>
                        {/*Icon*/}
                        <span className="title">Draft Tool</span>
                    </li>
                    <li>
                        {/*Icon*/}
                        <span className="title">Coaching</span>
                    </li>
                    <li>
                        {/*Icon*/}
                        <span className="title">Ranked Leaderboards</span>
                    </li>
                    <li>
                        {/*Icon*/}
                        <span className="title">Tier List</span>
                    </li>
                    <p className="subtitle">Other</p>
                    <li>
                        {/*Icon*/}
                        <span className="title">Profile</span>
                    </li>
                    <li>
                        {/*Icon*/}
                        <span className="title">Settings</span>
                    </li>
                    <li>
                        {/*Icon*/}
                        <span className="title">Feedback</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar