import React from 'react';
import { Avatar } from "@material-ui/core";
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt="Guest"
                    src="/"
                />
                <AccessAlarmsIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search..." />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header;
