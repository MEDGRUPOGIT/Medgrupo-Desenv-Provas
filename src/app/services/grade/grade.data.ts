import { IGrade } from "../../models/grade.model";
import { branches, classes, specialties } from '../domain/domain.data';

const grades = (): IGrade[] => {
    let items: IGrade[] = []
    for (let x = 1; x <= 30; x++) {
        items.push({
            id: x,
            value: getNumbersBetween(20, 100),
            enrollment: getNumbersBetween(111111, 999999),
            branch: branches[getNumbersBetween(0, branches.length - 1)],
            class: classes[getNumbersBetween(0, classes.length - 1)],
            specialty: specialties[getNumbersBetween(0, specialties.length - 1)]
        });
    }
    return items;
}

const getNumbersBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export default grades;