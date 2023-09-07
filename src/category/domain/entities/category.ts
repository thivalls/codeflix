import ID from "../../../@shared/unique-identity-id-vo"

export type CategoryProperties = {
    categoryId?: string
    name: string
    description?: string
    isActive?: boolean
    createdAt?: Date
}

export type CategoryFactoryProperties = {
    name: string
    description?: string | null
    isActive?: boolean
}

export class Category {

    categoryId: string;
    name: string;
    description: string | null;
    isActive: boolean;
    createdAt: Date;

    constructor(props: CategoryProperties, id?: string) {
        this.categoryId = props.categoryId;
        this.name = props.name;
        this.description = props.description ?? null;
        this.isActive = props.isActive ?? true;
        this.createdAt = props.createdAt ?? new Date();
    }

    static create(props: CategoryFactoryProperties): Category {
        return new Category(props);
    }

    public changeName(name: string): void {
        this.name = name;
    }

    public changeDescription(description: string): void {
        this.description = description;
    }

    public activate(): void {
        if(!this.isActive) this.isActive = true;
    }
    
    public deactivate(): void {
        if(this.isActive) this.isActive = false;
    }

    public toJSON(): CategoryProperties {
        return {
            categoryId: this.categoryId,
            name: this.name,
            description: this.description,
            isActive: this.isActive,
            createdAt: this.createdAt,
        }
    }
}