import { ValueObject } from "./abstract-value-object";

class ObjectValueStub extends ValueObject {
    constructor(readonly name: string) {
        super();
    }
}

class ObjectValueStubDiff extends ValueObject {
    constructor(readonly name: string) {
        super();
    }
}

class ComplexObjectValueStub extends ValueObject {
    constructor(readonly name: string, age: number, document: string) {
        super();
    }
}

describe('value object unit test', () => {
    
    it('Should compare two differents objects and return false', () => {
        const objectValueStub1 = new ObjectValueStub('any name in the world');
        const objectValueStub2 = new ObjectValueStub('any name in the earth');
        expect(objectValueStub1.equals(objectValueStub2)).toBeFalsy();
    });

    
    it('Should compare two equals objects and return true', () => {
        const objectValueStub1 = new ObjectValueStub('any name in the world');
        const objectValueStub2 = new ObjectValueStub('any name in the world');
        expect(objectValueStub1.equals(objectValueStub2)).toBeTruthy();
    });

    it('Should compare two complex objects and return true', () => {
        const objectValueStub1 = new ComplexObjectValueStub('any name in the world', 33, '123.456.789-02');
        const objectValueStub2 = new ComplexObjectValueStub('any name in the world', 33, '123.456.789-02');
        
        expect(objectValueStub1.equals(objectValueStub2)).toBeTruthy();
    });

    it('Should compare two objects and return false if one of them to be null', () => {
        const objectValueStub1 = new ComplexObjectValueStub('any name in the world', 33, '123.456.789-02');
        const objectValueStub2: any = null;
        
        expect(objectValueStub1.equals(objectValueStub2)).toBeFalsy();
    });

    it('Should compare two objects and return false if one of them to be undefined', () => {
        const objectValueStub1 = new ComplexObjectValueStub('any name in the world', 33, '123.456.789-02');
        const objectValueStub2: any = undefined;
        
        expect(objectValueStub1.equals(objectValueStub2)).toBeFalsy();
    });

    it('Should compare two objects from different classes and return false', () => {
        const objectValueStub1 = new ObjectValueStub('any name in the world');
        const objectValueStub2 = new ObjectValueStubDiff('any name in the world');
        
        expect(objectValueStub1.equals(objectValueStub2)).toBeFalsy();
    });
});