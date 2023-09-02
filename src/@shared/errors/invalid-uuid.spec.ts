import InvalidUuidError from "./invalid-uuid";

describe('Invalid uuid error unit test', () => {
    it('Should create a new Error without message', () => {
        const suv = new InvalidUuidError();
        const defaultMessage = 'ID must be a valid UUID';
        const errorName = 'InvalidUuidError';

        expect(suv).toBeDefined();
        expect(suv.message).toEqual(defaultMessage);
        expect(suv.name).toEqual(errorName);
    });

    it('Should create a new Error with message', () => {
        const testMessage = 'Any message';
        const suv = new InvalidUuidError(testMessage);
        const errorName = 'InvalidUuidError';

        expect(suv).toBeDefined();
        expect(suv.message).toEqual(testMessage);
        expect(suv.name).toEqual(errorName);
    });
});