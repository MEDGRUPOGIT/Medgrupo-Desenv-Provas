import { IEntity } from "./utils.model";

export interface IGrade {
    id: number
    value: number,
    enrollment: number,
    specialty: IEntity,
    class: IEntity,
    branch: IEntity,

    position?: number

}

