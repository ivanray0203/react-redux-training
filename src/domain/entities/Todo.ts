export class Todo {
    id: string
    name: string
    isCompleted: boolean
    date_created: string
    number_of_days: number

    constructor(id: string, name: string, isCompleted: boolean, date_created: string, number_of_days: number) {
        this.id = id
        this.name = name
        this.isCompleted = isCompleted
        this.date_created = date_created
        this.number_of_days = number_of_days
    }
}
