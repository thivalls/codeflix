import ID from "../../../@shared/unique-identity-id-vo";
import { Category } from "./category";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

describe('Unit tests to Category Entity', () => {
    const props = {name: 'Movies', description: 'My description', isActive: true, createdAt: new Date()};
    const onlyRequiredProps = {name: 'Movies'};

    let simpleCategory: any;
    let fullCategory: any;
    let id: string;

    beforeEach(() => {
        id = uuidv4(); 
        simpleCategory = new Category(onlyRequiredProps);
        fullCategory = new Category(props, id);
    });

    it('It should create a category instance with only required fields', () => {
        expect(simpleCategory).toBeInstanceOf(Category);
        expect(simpleCategory.name).toBe(onlyRequiredProps.name);
    })

    it('It should create a category instance with a valid uuid', () => {
        const catWithId = new Category(props, 'fb46e368-c875-4c8a-af26-406fb730c8ef')
        expect(catWithId.name).toBe(props.name);
        expect(catWithId.description).toBe(props.description);
        expect(catWithId.isActive).toBe(props.isActive);
        expect(catWithId.createdAt).toBe(props.createdAt);
        expect(uuidValidate(catWithId.id.id)).toBeTruthy();
    })

    it('It should create a category instance with all attributes', () => {
        expect(fullCategory.name).toBe(props.name);
        expect(fullCategory.description).toBe(props.description);
        expect(fullCategory.isActive).toBe(props.isActive);
        expect(fullCategory.createdAt).toBe(props.createdAt);
        expect(fullCategory.id.id).toBe(id);
        expect(uuidValidate(fullCategory.id.id)).toBeTruthy();
    })

    it('It should create a category id if id is not provided, null or undefined', () => { 
        expect(simpleCategory.id.id.length).toBe(36); 
        expect(typeof simpleCategory.id.id).toBe('string');
        expect(uuidValidate(simpleCategory.id.id)).toBeTruthy();
        expect(simpleCategory.id.id).not.toBeNull();

        simpleCategory = new Category(onlyRequiredProps, null);
        expect(simpleCategory.id.id.length).toBe(36); 
        expect(typeof simpleCategory.id.id).toBe('string');
        expect(uuidValidate(simpleCategory.id.id)).toBeTruthy();
        expect(simpleCategory.id.id).not.toBeNull();

        simpleCategory = new Category(onlyRequiredProps, undefined);
        expect(simpleCategory.id.id.length).toBe(36); 
        expect(typeof simpleCategory.id.id).toBe('string');
        expect(uuidValidate(simpleCategory.id.id)).toBeTruthy();
        expect(simpleCategory.id.id).not.toBeNull();
    })

    it('It should create a category instance with all attributes and ensure strict equal object returned', () => {
        expect(fullCategory.props).toStrictEqual(props);
    })

    it('It should get name through get name method', () => {
        expect(fullCategory.name).toBe(props.name);
    })

    it('It should get description through get description method', () => {
        expect(fullCategory.description).toBe(props.description);
    })

    it('It should return null if description is not provided', () => {
        const {description, ...rest} = props;
        const categoryWithoutDescription = new Category(rest);
        expect(categoryWithoutDescription.description).toBe(null);
    })

    it('It should get isActive through get isActive method', () => {
        expect(fullCategory.isActive).toBe(props.isActive);
    })

    it('It should return undefined if isActive is not provided', () => {
        const {isActive, ...rest} = props;
        const categoryWithoutIsActive = new Category(rest);
        expect(categoryWithoutIsActive.isActive).toBe(true);
        expect(categoryWithoutIsActive.isActive).not.toBeNull();
    })

    it('It should get createdAt through get createdAt method', () => {
        expect(fullCategory.createdAt).toBe(props.createdAt);
    })

    it('It should return undefined if createdAt is not provided', () => {
        const {createdAt, ...rest} = props;
        const categoryWithoutCreatedAt = new Category(rest);
        expect(categoryWithoutCreatedAt.createdAt).toBeInstanceOf(Date);
        expect(categoryWithoutCreatedAt.createdAt).not.toBeNull();
    })

    it('It should be possible to create a category with isActive false', () => {
        const category = new Category({name: 'Movies', description: 'My description', isActive: false, createdAt: new Date()});
        expect(category.isActive).toBeFalsy();
    })

    it('It should be possible to change value through set description method', () => {
        expect(fullCategory.description).toBe('My description');
        fullCategory['description'] = 'changed description';
        expect(fullCategory.description).toBe('changed description');
    })

    it('It should be possible to change value through set isValid method', () => {
        expect(fullCategory.isActive).toBeTruthy();
        fullCategory['isActive'] = false;
        expect(fullCategory.isActive).toBeFalsy();
    })
})