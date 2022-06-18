import React from 'react'
import CancelIcon from '@mui/material/Icon';
import './style.scss';

function FundModal(
    setOpen: any,
    setAmount: any,
    amount: any,
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