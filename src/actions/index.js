/**
 * Este archivo se encarga solo de describir la informacion que vamos a hacer
 * y pasar un objeto que vamos a tener disponible dentro del reducer
 * depues va a tomar la acion que estamos ejecutando para evaluar
 * la forma en la que la guardará en el estado
 * 
 * payload la informacion que vamos a transmitir 
 */
export const setFavorite = payload =>({
    type: 'SET_FAVORITE',
    payload,
});

export const deleteFavorite = payload =>({
    type: 'DELETE_FAVORITE',
    payload,
});

export const loginRequest = payload =>({
    type: 'LOGIN_REQUEST',
    payload,
});

export const logoutRequest = payload =>({
    type: 'LOGOUT_REQUEST',
    payload,
});

export const registerRequest = payload =>({
    type: 'REGISTER_REQUEST',
    payload,
});

export const getVideoSource = payload => ({
    type: 'GET_VIDEO_SOURCE',
    payload,
});