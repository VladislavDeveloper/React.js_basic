import { ADD_CHAT, REMOVE_CHAT } from "./constants"

const initialChats = {
    chatsList : []
}

const chatsReducer = (state = initialChats, action) => {
    switch(action.type){
        case ADD_CHAT:
            return{
                ...state,
                chatsList: action.chats
            }
        case REMOVE_CHAT: 
            return{
                ...state,
                chatsList:[
                    ...state.chatsList.filter(chat => chat.id !== action.id)
                ],
            }

        default:
            return state;
    }
}

export default chatsReducer