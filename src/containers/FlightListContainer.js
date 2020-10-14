import React from "react";
import FlightList from "../components/FlightList";
import {connect} from "react-redux";

const FlightListContainer = ({flights}) => {
    return (<FlightList flights={flights} />);
}


export const mapStateToProps = (state) => {
    return {
        flights: state.flights.flights
    };
};

export default connect(mapStateToProps)(FlightListContainer)