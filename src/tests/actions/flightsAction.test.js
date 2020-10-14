import axios from "axios"
import MockAdapter from "axios-mock-adapter";
import flights from "../../data/flights.json"
import {filterOneWayFlights} from "../../actions/flightsActions";

describe("Flight Action", () => {
    const mock = new MockAdapter(axios);
    beforeEach(() => {
        mock.onGet("https://tw-frontenders.firebaseio.com/advFlightSearch.json").reply(200, flights);
    })
    afterEach(() => {
        mock.reset()
    })
    describe("Origin and Destination", () => {
        it("should filter the data with provided origin and destination", () => {
            const formData = {
                originCity: "Pune (PNQ)",
                destinationCity: "Mumbai (BOM)"
            }
            const filteredFlights = filterOneWayFlights(flights, formData)
            expect(filteredFlights.length).toBe(4)
        })

        it("should filter the data with provided origin and destination with different data", () => {
            const formData = {
                originCity: "Bengaluru (BLR)",
                destinationCity: "Pune (PNQ)"
            }
            const filteredFlights = filterOneWayFlights(flights, formData)
            expect(filteredFlights.length).toBe(2)
        })

        it("should filter the data with same origin and destination", () => {
            const formData = {
                originCity: "Pune (PNQ)",
                destinationCity: "Pune (PNQ)"
            }
            const filteredFlights = filterOneWayFlights(flights, formData)
            expect(filteredFlights.length).toBe(0)
        })
    })
    describe("Departure Date", () => {
        it("should filter the data with provided departure date", () => {
            const formData = {
                departureDate: "2020-11-01"
            }
            const filteredFlights = filterOneWayFlights(flights, formData)
            expect(filteredFlights.length).toBe(17)
        })
        it("should filter the data with provided departure date not matched", () => {
            const formData = {
                departureDate: "2020-11-20"
            }
            const filteredFlights = filterOneWayFlights(flights, formData)
            expect(filteredFlights.length).toBe(0)
        })
    })
    describe("Origin city, destination city and departure Date", () => {
        it("should filter the data with provided departure date", () => {
            const formData = {
                departureDate: "2020-11-01",
                originCity: "Pune (PNQ)",
                destinationCity: "Mumbai (BOM)"
            }
            const filteredFlights = filterOneWayFlights(flights, formData)
            expect(filteredFlights.length).toBe(3)
        })
        it("should filter the data with provided departure date", () => {
            const formData = {
                departureDate: "2020-11-02",
                originCity: "Bengaluru (BLR)",
                destinationCity: "Delhi (DEL)"
            }
            const filteredFlights = filterOneWayFlights(flights, formData)
            expect(filteredFlights.length).toBe(1)
        })
    })
})