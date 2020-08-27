export interface IGrade {
    value: number,
    enrollment: number,
    specialty: IEntity,
    class: IEntity,
    branch: IEntity
}

export interface IEntity {
    id: number,
    name: string
}
