import React, { useContext } from 'react'
import "./style.css"
import CancelIcon from '@mui/material/Icon';


function FundModal(
    setOpen: any,
    amount: any,
    setAmount: any,
    fund: any,
    desc: any,
    title: any,
    targetAmt: any,
    curAmt: any) {

    return (
        <div className="modal-container">
            <div className="modal-box">
                <h2>Fund Project</h2>
                <CancelIcon className="close-icon" onClick={() => setOpen(false)} />
                <h4 className="pr-title">{title}</h4>
                <p className="pr-desc">{desc}</p>
                {/* <p className="fund-modal">You can fund: <span>{canFund} ETH</span></p> */}

                <input placeholder="Enter amount"
                    className="pr-fund"
                    value={amount ? amount : ''}
                    onChange={(e) => {
                       

                    }}>
                </input>
                <button className="pr-fund-btn" onClick={fund}>Fund</button>
            </div>
        </div>
    )
}

export default FundModal