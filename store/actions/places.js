import * as actions from "./actionType";

export const addPlace=(placeName)=>{
    console.log(placeName);
    return {
        type:actions.ADD_PLACE,
        placeName: placeName
    };
}

export const deletePlace=(key)=>{
    return {
        type:actions.DELETE_PLACE,
        placeKey:key
    };
}

// export const selectPlace=(key)=>{
//     return {
//         type:actions.SELECT_PLACE,
//         placeKey: key
//     };
// }

// export const deselectPlace=()=>{
//     return {
//         type:actions.UNSELECT_PLACE
//     };
// }