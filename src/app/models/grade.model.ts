import { IEntity } from "./utils.model";

export interface IGrade {
    value: number,
    enrollment: number,
    specialty: IEntity,
    class: IEntity,
    branch: IEntity
}

