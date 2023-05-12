 import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
 const ChatsPage =(props)=> {
    const chatprops = useMultiChatLogic(
        "03c3d99c-e950-477d-bb8b-f2cfa53d9b94",
        props.user.username,
        props.user.secret
    )
return(
<div style={{height:"100vh"}}>
<MultiChatSocket {...chatprops}/>
<MultiChatWindow {...chatprops} style={{height:"100%"}}/>
</div>
);
}
export default ChatsPage;