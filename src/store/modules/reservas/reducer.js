import produce from "immer";



export default function reserve(state = [], action){
    switch (action.type){
        case 'ADD_RESERVE_':
            return produce(state, draft => {
                draft.push(action.trip)
                
            })

//            return[ ...state, {
//                ...action.trip,
 //               amount: 1
//            } ];
        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                if(tripIndex >=0){
                    draft.splice(tripIndex, 1);
                }
            })

        case 'UPDATE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                if(tripIndex >=0 && action.amount >= 1){
                    draft[tripIndex].amount = Number(action.amount);
                }
            })
        default:
            return state;
        }

}