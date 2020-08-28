import { GradeService } from "./grade.service";
import { SimulatorService } from '../simulator/simulator.service';
import { ISimulator, ISimulatorSelected } from 'src/app/models/simulator.model';
import { mergeMap } from 'rxjs/operators';

describe('gradeService', () => {
    let service: GradeService;
    let simulatorService: SimulatorService;
    let simulators: ISimulator[];


    beforeEach(() => {
        service = new GradeService();
        simulatorService = new SimulatorService();
    });

    beforeEach(() => {
        simulatorService.genereteSimulatorDatabase().subscribe((items) => simulators = items)
        service.generateGradesDataBase(simulators).subscribe()
    });

    it('#generateGradesDataBase should generate grades', () => {
        service.generateGradesDataBase(simulators).pipe(mergeMap(() => {
            return service.grades$
        })).subscribe(grades => {
            expect(grades.length).toBeGreaterThan(0)
        })
    });


    it('#generateGradesDataBase should generate grades filter by one simulator', () => {
        const simulatorSelect: ISimulatorSelected = {
            simulator: simulators[0],
            type: simulators[0].types[0]
        }
        service.getGradesOfSimulator(simulatorSelect)
            .subscribe(grades => {
                expect(grades.length).toBeGreaterThan(0)
            })
    });

    it('#Grades$ should me return all my grades from observable', () => {
        service.grades$.subscribe(grades => {
            expect(grades.length).toBeGreaterThan(0)
        })
    })
});