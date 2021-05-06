import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import './Chat.css';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    // This code get executed when the roomId changed
    useEffect(() => {
        if (roomId) {
            db
                .collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomDetails(snapshot.data())
            ))
        }

        db
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot( snapshot => 
                setRoomMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            )
    }, [roomId])

    console.log(roomMessages);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {roomMessages.map(message => (
                    <Message
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                        userImage={message.userImage} />
                ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat;
