import * as actionTypes from "../actions/actionType";
import placeImage from '../../assets/test.jpg';
const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: placeImage
                })
            }
        case actionTypes.DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key != action.placeKey;
                })
            }
        // case actionTypes.SELECT_PLACE:
        //     return {
        //         ...state,
        //         selectedPlace: state.places.find(place => {
        //             return place.key == action.placeKey;
        //         })
        //     }
        // case actionTypes.UNSELECT_PLACE:
        //     return {
        //         ...state,
        //         selectedPlace: null
        //     }
        default: return state;
    }
}

export default reducer;