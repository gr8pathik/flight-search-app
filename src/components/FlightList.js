import React from 'react';

export default ({flights = []}) => {
    // const flights = [{"arrivalTime":"6:00","date":"2020/11/01","departureTime":"5:00","destination":"Mumbai (BOM)","flightNo":"AI-101","name":"Air India","origin":"Pune (PNQ)","price":3525},{"arrivalTime":"7:10","date":"2020/11/01","departureTime":"6:10","destination":"Mumbai (BOM)","flightNo":"AI-103","name":"Air India","origin":"Pune (PNQ)","price":2537},{"arrivalTime":"22:45","date":"2020/11/01","departureTime":"21:30","destination":"Mumbai (BOM)","flightNo":"AI-114","name":"Air India","origin":"Pune (PNQ)","price":2001}]
    const oneWayFlights = flights.oneWay;
    const returnFlights = flights.return;
    console.log("returnFlights ==>", returnFlights);
    return (
        <>
            <h3>Flights</h3>
            <div className="row">
                <div className="col-6">
                    <h4>One Way</h4>
            {oneWayFlights.length > 0 ? oneWayFlights.map(flight => (<div className="card mb-3" key={flight.flightNo}>
                <div className="card-body row">
                    <div className="col-2">
                        {flight.name}
                        <div><small>{flight.flightNo}</small></div>
                    </div>
                    <div className="col-2">
                        {flight.departureTime}
                        <div><small>{flight.origin}</small></div>
                    </div>
                    <div className="col-2">
                        {flight.arrivalTime}
                        <div><small>{flight.destination}</small></div>
                    </div>
                    <div className="col-2">
                        {flight.arrivalTime}
                        <div><small>Non stop</small></div>
                    </div>
                    <div className="col-2">
                        <strong className="text-danger">&#x20B9; {flight.price}</strong>
                    </div>
                    <div className="col-2"><a href="#" className="btn btn-primary">Book</a></div>
                </div>
            </div>)) :
                <div>No flights found</div>}
                </div>
                {returnFlights.length > 0 &&
                <div className="col-6">
                    <h4>Return</h4>
                {returnFlights.map(flight => (<div className="card mb-3" key={flight.flightNo}>
                        <div className="card-body row">
                            <div className="col-2">
                                {flight.name}
                                <div><small>{flight.flightNo}</small></div>
                            </div>
                            <div className="col-2">
                                {flight.departureTime}
                                <div><small>{flight.origin}</small></div>
                            </div>
                            <div className="col-2">
                                {flight.arrivalTime}
                                <div><small>{flight.destination}</small></div>
                            </div>
                            <div className="col-2">
                                {flight.arrivalTime}
                                <div><small>Non stop</small></div>
                            </div>
                            <div className="col-2">
                                <strong className="text-danger">&#x20B9; {flight.price}</strong>
                            </div>
                            <div className="col-2"><a href="#" className="btn btn-primary">Book</a></div>
                        </div>
                    </div>))}
                </div>}
            </div>
        </>)
}
