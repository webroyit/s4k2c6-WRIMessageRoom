import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Guest Room</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Roy Web
                    </h3>
                </div>
                <AddIcon />
            </div>
        </div>
    )
}

export default Sidebar;
