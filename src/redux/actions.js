import axios from 'axios';
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from './actionTypes';

export const getPhotos = function(year) {
    return function(dispatch) {

        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        });

        axios.get('http://anton-sergeenkov.ru/app/json-server/index.php')
        .then(response => {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: response.data,
            })
        })
        .catch(error => console.log(error));
        
    }
}
