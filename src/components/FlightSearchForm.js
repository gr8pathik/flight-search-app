import React, {useState} from "react";
import {Button, Form} from "react-bootstrap"
import { Typeahead } from 'react-bootstrap-typeahead';
import cities from '../data/cities.json'

const FlightSearchForm = ({isReturn, getFlights}) => {
    const [flightDetails, setFlightDetails] = useState({
        originCity: [],
        destinationCity: [],
        departureDate: "",
        returnDate: "",
        passengers: 0
    });
    const onFormChange = (selectedValue, formField) => {
        setFlightDetails({...flightDetails, [formField]: selectedValue })
    }
    const handleSearch = () => {
        console.log("flightDetails =>", flightDetails)
        const alterFlightDetails = {
            ...flightDetails,
            originCity: flightDetails.originCity[0],
            destinationCity: flightDetails.destinationCity[0],
        }
        getFlights(alterFlightDetails);
    }
    return (<Form className="m-3">
        <Form.Group controlId="formOriginCity">
            <Typeahead
                id="origin-city"
                labelKey="name"
                onChange={(selectedCity) => onFormChange(selectedCity, "originCity")}
                options={cities}
                placeholder="Enter origin city"
                selected={flightDetails.originCity}
            />
        </Form.Group>
        <Form.Group controlId="formOriginDestination">
            <Typeahead
                id="destination-city"
                labelKey="name"
                onChange={(selectedCity) => onFormChange(selectedCity, "destinationCity")}
                options={cities}
                placeholder="Enter origin destination"
                selected={flightDetails.destinationCity}
            />
        </Form.Group>
        <Form.Group controlId="formDepartureDate">
            <Form.Control type="date" placeholder="Departure date" onChange={(e) => onFormChange(e.target.value, "departureDate")}/>
        </Form.Group>
        {isReturn && <Form.Group controlId="formReturnDate">
            <Form.Control type="date" placeholder="Return date" onChange={(e) => onFormChange(e.target.value, "returnDate")}/>
        </Form.Group>}
        <Form.Group controlId="formPassengers">
            <Form.Control as="select" placeholder="Select Passengers" onChange={(e) => onFormChange(e.target.value, "passengers")}>
                <option value={0}>Select Passengers</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </Form.Control>
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSearch}>
            Search
        </Button>
    </Form>)
}

export default FlightSearchForm