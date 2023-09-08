import ID from "./abstract-value-object";
import { validate as uuidValidate } from "uuid";

describe('Unique identifier uuid unit test', () => {

    const validateSpy = jest.spyOn(ID.prototype as any, 'validate');

    beforeEach(() => {
        validateSpy.mockClear();
    })

    it('Should create a new ID without id param', () => {
        const suv = ID.create();

        expect(suv).toBeDefined();
        expect(suv.id.length).toBe(36);
        expect(uuidValidate(suv.id)).toBeTruthy();
    });

    it('Should create a new ID with a valid id param', () => {
        const validId = '2ea8afb9-0696-4859-a43e-ac8d62f7ea02';
        const suv = ID.create(validId);

        expect(suv).toBeDefined();
        expect(suv.id.length).toBe(36);
        expect(suv.id).toEqual(validId);
        expect(validateSpy).toBeCalledTimes(1);
        expect(validateSpy).toBeCalledWith(validId);
        expect(() => ID.create(validId)).not.toThrow();
    });

    it('Should throw InvalidUuidError if a invalid ID is provided', () => {
        const invalidId = 'any_invalid_id';
        expect(() => ID.create(invalidId)).toThrow('ID must be a valid UUID');
        expect(validateSpy).toBeCalledTimes(1);
        expect(validateSpy).toBeCalledWith(invalidId);
    });
});