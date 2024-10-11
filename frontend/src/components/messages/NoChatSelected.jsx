import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import './NoChatSelected.scss';

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    
    return (
        <div className='no-chat-selected'>
            <p>Welcome 👋 {authUser.fullName} ❄</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className='message-icon' />
        </div>
    );
};

export default NoChatSelected;
