import React, { useState, useEffect } from 'react';
import FundModal from '../Fund/FundModal';
import RefundModal from '../Fund/RefundModal';

function Project(project: any, accounts: any, web3: any, pIndex: any) {
    const [amount, setAmount] = useState(null);
    const [funding, setFunding] = useState(0);
    const [open, setOpen] = useState(false);
    const [rOpen, setROpen] = useState(false);


    return (
        <div className="project-card">
            <div className="top-tile">
                <h3>{project.projectTitle}</h3>
                <div className="funded">
                    <img className="ethIcon" src="https://img.icons8.com/fluent/48/000000/ethereum.png" />
                    <p>100ETH</p>
                </div>
            </div>


            <p id="desc">{project.projectDesc}</p>
            <p id="deadline">Will be closed on: 10/10/2022</p>
            <p id="raised">Amount to be raised:
                <span><img className="ethIcon" src="https://img.icons8.com/fluent/48/000000/ethereum.png" />
                    100ETH
                </span>
            </p>
            <div className={`fund-options ${funding !== 0 ? 'flex' : ''}`}>
                <button onClick={() => setOpen(true)}>Fund</button>
                {funding !== 0 && <button onClick={() => setROpen(true)}>Refund</button>}
            </div>
            {open &&
                <FundModal
                    setOpen={setOpen}
                    setAmount={setAmount}
                    amount={amount}
                    // fund={fundProject}
                    desc={project.projectDesc}
                    title={project.projectTitle}
                    targetAmt={project.goalAmount}
                    curAmt={project.currentAmount} />}
            {rOpen && (
                <RefundModal
                    setROpen={setROpen}
                    project={project}
                // refund={refund}
                />
            )}
        </div>
    )
}

export default Project
