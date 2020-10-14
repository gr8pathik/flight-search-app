import React, {useState} from "react";
import {Tabs, Tab} from "react-bootstrap";
import FlightSearchForm from "./FlightSearchForm";
import "../styles/SideBar.css"
import {connect} from "react-redux";
import {getFlights} from "../actions/flightsActions";

const SideBar = ({getFlights}) => {
    const [key, setKey] = useState("oneway");

    return (
        <Tabs
            id="flight-form-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="oneway" title="One Way">
                <FlightSearchForm getFlights={getFlights} />
            </Tab>
            <Tab eventKey="return" title="Return">
                <FlightSearchForm getFlights={getFlights} isReturn={true} />
            </Tab>
        </Tabs>
    );
}


export const mapStateToProps = (state) => {
    return {
        flights: state.flights.flights
    };
};

export default connect(mapStateToProps, {getFlights})(SideBar);