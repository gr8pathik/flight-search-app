import {
    SET_ONEWAY_FLIGHTS,
    SET_FLIGHTS_ERROR,
    SET_FLIGHTS_LOADING,
    SET_RETURN_FLIGHTS,
    RESET_FLIGHTS
} from "../actions/flightsActions";

const defaultSchema = {
    loading: false,
    error: false,
    flights: {
        oneWay: [],
        return: []
    }
}

export default (state = defaultSchema, action) => {
    switch (action.type) {
        case SET_FLIGHTS_LOADING:
            return {...state, loading: true, error: false}
        case SET_ONEWAY_FLIGHTS:
            return {...state, loading: false, error: false, flights: {...state.flights, oneWay: action.payload}}
        case SET_RETURN_FLIGHTS:
            return {...state, loading: false, error: false, flights: {...state.flights, return: action.payload}}
        case SET_FLIGHTS_ERROR:
            return {...state, loading: false, error: false}
        case RESET_FLIGHTS:
            return {...defaultSchema}
        default:
            return state;
    }
};