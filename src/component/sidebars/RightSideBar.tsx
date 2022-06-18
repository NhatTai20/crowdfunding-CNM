import React from 'react'
import { Link } from 'react-router-dom'
import { generateRandomAvatar } from 'seedable-random-avatar-generator';
import "./RightSideBar.scss"
function RightSideBar() {
    const handleDisconnect = () => {
        alert("disconnect")
    }
  return (
    <div className="right-side-bar sidebar">

            <div className="acc-details">
                <div className="acc">
                    <img width={50} src={generateRandomAvatar()} alt="/" />
                    <div className="details">
                        <p>Vu Phan Nhat Tai</p>
                        <p className="balance">500 ETH</p>
                    </div>
                </div>
            </div>

            <ul>
                <li><button className="disconnect-btn" onClick={handleDisconnect}>Disconnect Wallet</button></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all">All Projects</Link></li>
                <li><Link to="/projects/my">Your Projects</Link></li>
                <li><Link to="/projects/funded">Funded Projects</Link></li>
                <li><Link to="/create">Create Project</Link></li>
            </ul>
        </div>
  )
}

export default RightSideBar