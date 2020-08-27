import { ISimulator } from "../../models/simulator.model";

const simulatorsData = (): ISimulator[] => {
    const simulators: ISimulator[] = [];

    for (let x = 1; x <= 10; x++) {
        simulators.push({
            id: x,
            name: `Simulador ${x}`,
            types: [
                {
                    name: `Prova Objetiva`,
                    id: 1
                },
                {
                    name: `Prova Final`,
                    id: 2
                },
            ]
        });
    };
    return simulators;
}

export default simulatorsData;