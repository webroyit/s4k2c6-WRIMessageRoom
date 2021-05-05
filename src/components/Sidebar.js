import React, { useEffect, useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import GroupIcon from '@material-ui/icons/Group';
import AppsIcon from '@material-ui/icons/Apps';
import DescriptionIcon from '@material-ui/icons/Description';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Sidebar.css';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import SidebarOption from './SidebarOption';

function Sidebar() {
    const [{ user }] = useStateValue();

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        // Run this code when the sidebar component loads
        
        // onSnapshot() is a listener that get run when something change on the firestore
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                // Loop through the docs
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Guest Room</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <AddIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarksIcon} title="Channel browser" />
            <SidebarOption Icon={GroupIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={DescriptionIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} appChannelOption title="Add Channel" />
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}
        </div>
    )
}

export default Sidebar;
