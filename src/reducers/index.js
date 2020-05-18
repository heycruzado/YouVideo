/**
 * Se va a encargar de saber lo que está pasando y como va
 * a actualizar mi estado
 */
 
const reducer = (state, action) =>{
    
    //switch nos permite recibir el type y evaluarlo para saber
    //que haremos con el estado
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                mylist: [...state.mylist, action.payload]
            };

        case 'DELETE_FAVORITE':
            return{ 
                ...state,
                mylist: state.mylist.filter(items => items.id !== action.payload)
            };

        case 'LOGIN_REQUEST':
            return{
                ...state,
                user: action.payload,
            };

        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload,
            };

        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload
            }
        
        case 'GET_VIDEO_SOURCE':
            return{
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload))
                || state.original.find(item => item.id === Number(action.payload))
                || []
            }
        default:
            return state;
    }
};

export default reducer;