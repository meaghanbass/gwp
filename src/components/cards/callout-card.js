import React from 'react';

const CalloutCard = ({children}) => (
    <div className="callout-card">
        <div className="callout-card_inner">
            {children}
        </div>
    </div>
)

export default CalloutCard;