export type CategoryProperties = {
    name: string
    description?: string
    isActive?: boolean
    createdAt?: Date
}

export class Category {
    constructor(public readonly props: CategoryProperties) {}

    get name(): string {
        return this.props.name;
    }

    get description(): string | undefined {
        return this.props.description;
    }

    get isActive(): boolean | undefined {
        return this.props.isActive;
    }

    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }
}