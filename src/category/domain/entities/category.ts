import {v4 as uuidv4} from 'uuid';

export type CategoryProperties = {
    name: string
    description?: string
    isActive?: boolean
    createdAt?: Date
}

export class Category {
    public readonly id: string;
    constructor(public readonly props: CategoryProperties, id?: string) {
        this.id = id || uuidv4();
        this.description = props.description;
        this.isActive = props.isActive;
        this.props.createdAt = props.createdAt ?? new Date;
    }

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

    private set description(description: string) {
        this.props.description = description ?? null;
    }

    private set isActive(isActive: boolean) {
        this.props.isActive = isActive ?? true;
    }
}