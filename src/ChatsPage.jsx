import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('b631f88f-be35-400c-9a51-3285640a6580', props.user.username, props.user.secret);
    
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
        </div>
    );
}

export default ChatsPage;
