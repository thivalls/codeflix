import {v4 as uuidv4, validate as uuidValidate} from 'uuid';
import InvalidUuidError from './errors/invalid-uuid';

export default class ID {
    public readonly id;
    constructor(id?:string) {
        this.id = id ?? uuidv4();
        this.validate(this.id);
    }

    static create(id?:string) : ID {
        return new ID(id);
    }

    private validate(id:string): void {
        if(!uuidValidate(this.id))
            throw new InvalidUuidError();
    }
}