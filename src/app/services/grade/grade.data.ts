import { IGrade } from "../../models/grade.model";
import { branches, classes, specialties } from '../domain/domain.data';
import { ISimulator } from 'src/app/models/simulator.model';

/**
 * Generate grades randomly between  others dates data;
 */

const qtd_grades = 1000;

const grades = (simulators: ISimulator[]): IGrade[] => {
    let items: IGrade[] = []
    for (let x = 1; x <= qtd_grades; x++) {
        const simulator = simulators[getNumbersBetween(0, simulators.length - 1)]
        items.push({
            id: x,
            value: getNumbersBetween(20, 100),
            enrollment: getNumbersBetween(111111, 999999),
            branch: branches[getNumbersBetween(0, branches.length - 1)],
            class: classes[getNumbersBetween(0, classes.length - 1)],
            specialty: specialties[getNumbersBetween(0, specialties.length - 1)],
            simulator_id: simulator.id,
            simulator_type_id: simulator.types[getNumbersBetween(0, simulator.types.length - 1)].id
        });
    }
    return items;
}

const getNumbersBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export default grades;