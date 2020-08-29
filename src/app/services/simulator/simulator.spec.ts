import { SimulatorService } from "./simulator.service";

describe('SimulatorsService', () => {
    let service: SimulatorService;

    beforeEach(() => { service = new SimulatorService() });

    it('#genereteSimulatorDatabase should create all simulators', () => {
        service
            .genereteSimulatorDatabase()
            .subscribe(simulators => {
                expect(simulators.length).toBeGreaterThan(0)
            })
    });

    beforeEach(() => service.genereteSimulatorDatabase().subscribe());

    it('#simulators should me return my simulators from observable', () => {
        service.simulators$.subscribe(simulators => {
            expect(simulators.length).toBeGreaterThan(0)
        })
    })
});