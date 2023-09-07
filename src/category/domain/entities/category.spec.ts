import ID from "../../../@shared/unique-identity-id-vo";
import { Category } from "./category";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

describe('Unit tests to Category Entity', () => {
    const props = {name: 'Movies', description: 'My description', isActive: true, createdAt: new Date()};
    const onlyRequiredProps = {name: 'Movies'};

    let factoryCategory: any;
    let constructorCategory: any;
    let id: string;

    beforeEach(() => {
        id = uuidv4(); 
        factoryCategory = Category.create(onlyRequiredProps);
        constructorCategory = new Category(props, id);
    });

    it('It should create a category instance with only required fields', () => {
        const category = Category.create({name: 'movies'});
        expect(category).toBeInstanceOf(Category);
        expect(category.name).toBe('movies');
    })

    it('It should create a category instance with all attributes', () => {
        const now = new Date();
        const category = new Category({
            categoryId: 'some_string', 
            name: 'movies', 
            description: 'some_description',
            isActive: true,
            createdAt: now
        });
        expect(category.name).toBe('movies');
        expect(category.description).toBe('some_description');
        expect(category.isActive).toBeTruthy();
        expect(category.createdAt).toBe(now);
        expect(category.categoryId).toBe('some_string');
    })

    it('It should return json object through toJSON metod', () => {
        const category = new Category({...props, categoryId: id});
        expect(category.toJSON).toStrictEqual({categoryId: id, name: 'Movies', description: 'My description', isActive: true, createdAt: new Date()});
    })

    it('It should create category with null description if description is not provided', () => {
        const category = Category.create({name: 'Movies'});
        expect(category.description).toBeNull();
    })

    it('It should create category with isActive true if isActive is not provided', () => {
        const category = Category.create({name: 'Movies', description: 'Some description'});
        expect(category.isActive).not.toBeNull();
        expect(category.isActive).toBeTruthy();
    })

    it('It should be possible to create a category with isActive false', () => {
        const category = Category.create({name: 'Movies', description: 'My description', isActive: false});
        expect(category.isActive).toBeFalsy();
    })

    it('It should be possible to change name value through changeName method', () => {
        const category = Category.create({name: 'Movies', description: 'Original description', isActive: true});
        category.changeName('Changed name');
        expect(category.description).toBe('Changed name');
    })

    it('It should be possible to change description value through changeDescription method', () => {
        const category = Category.create({name: 'Movies', description: 'Original description', isActive: true});
        category.changeDescription('Changed description');
        expect(category.description).toBe('Changed description');
    })

    it('It should be possible to deactivate a category', () => {
        const category = Category.create({name: 'Movies', description: 'Some desc', isActive: true});
        category.deactivate();
        expect(category.isActive).toBeFalsy();
    })

    it('It should be possible to activate a category', () => {
        const category = Category.create({name: 'Movies', description: 'Some desc', isActive: false});
        category.activate();
        expect(category.isActive).toBeTruthy();
    })
})