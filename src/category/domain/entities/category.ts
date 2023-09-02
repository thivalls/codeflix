import ID from "../../../@shared/unique-identity-id-vo"

export type CategoryProperties = {
    name: string
    description?: string
    isActive?: boolean
    createdAt?: Date
}

export class Category {
    public readonly id: ID;
    constructor(public readonly props: CategoryProperties, id?: string) {
        this.id = ID.create(id);
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