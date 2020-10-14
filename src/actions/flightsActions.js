import axios from 'axios';

export const SET_FLIGHTS_LOADING = "SET_FLIGHTS_LOADING"
export const SET_ONEWAY_FLIGHTS = "SET_ONEWAY_FLIGHTS"
export const SET_FLIGHTS_ERROR = "SET_FLIGHTS_ERROR"
export const SET_RETURN_FLIGHTS = "SET_RETURN_FLIGHTS"
export const RESET_FLIGHTS = "RESET_FLIGHTS"

export const setFlightsLoading = () => {
    return {
        type: SET_FLIGHTS_LOADING
    }
}
export const setFlightError = () => {
    return {
        type: SET_FLIGHTS_ERROR
    }
}
export const setOneWayFlights = (flights) => {
    return {
        type: SET_ONEWAY_FLIGHTS,
        payload: flights
    }
}
export const resetFlights = (flights) => {
    return {
        type: RESET_FLIGHTS
    }
}
export const setReturnFlights = (flights) => {
    return {
        type: SET_RETURN_FLIGHTS,
        payload: flights
    }
}

const filterDate = (flight, formDate) => {
    const flightDate = new Date(flight.date);
    flightDate.setHours(0,0,0,0);
    const formDepDate = new Date(formDate);
    formDepDate.setHours(0,0,0,0);
    return flightDate.getTime() === formDepDate.getTime()
}

const singleFlight = (data, formData) => {
    let flights = data.filter((flight) => {
        return (flight.origin === formData.originCity && flight.destination === formData.destinationCity) && filterDate(flight, formData.date)
    });
    if(formData.passengers > 1) {
        flights = flights.map(flight => ({...flight, price: flight.price * formData.passengers}))
    }
    return flights
}

export const filterOneWayFlights = (data, formData) => {
    const clonedFormData = {...formData, date: formData.departureDate}
    return singleFlight(data, clonedFormData);
}
export const filterReturnFlights = (data, formData) => {
    const clonedFormData = {...formData, date: formData.returnDate}
    return singleFlight(data, clonedFormData);
}
export const getFlights = (formData) => {
    return (dispatch) => {
        dispatch(setFlightsLoading())
        dispatch(resetFlights())
        axios.get("https://tw-frontenders.firebaseio.com/advFlightSearch.json")
            .then(response => {
                const filteredFlights = filterOneWayFlights(response.data, formData)
                console.log("filteredFlights ==>", filteredFlights);
                dispatch(setOneWayFlights(filteredFlights))
                if(formData.returnDate) {
                    const filteredFlights = filterReturnFlights(response.data, formData)
                    dispatch(setReturnFlights(filteredFlights))
                }
            })
            .catch(() => {
                dispatch(setFlightError())
            })
    }
};