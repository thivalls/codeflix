import { Category } from "./category";

describe('Unit tests to Category Entity', () => {
    const fullProps = {categoryId: 'uuid', name: 'movies', description: 'some description', isActive: true, createdAt: new Date()};
    const requiredProps = {name: 'movies'};

    it('It should create a category with factory method using only required fields', () => {
        const category = Category.create(requiredProps);
        
        expect(category.categoryId).toBeUndefined();
        expect(category).toBeInstanceOf(Category);
        expect(category.name).toBe('movies');
        expect(category.description).toBeNull();
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.isActive).toBeTruthy();
    })

    it('It should create a category with factory method using all fields', () => {
        const category = Category.create(fullProps);
        
        expect(category).toBeInstanceOf(Category);
        expect(category.categoryId).toBe('uuid');
        expect(category.name).toBe('movies');
        expect(category.description).toBe('some description');
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.isActive).toBeTruthy();
    })

    it('It should create a category with constructor method using only required fields', () => {
        const category = new Category(requiredProps);
        
        expect(category.categoryId).toBeUndefined();
        expect(category).toBeInstanceOf(Category);
        expect(category.name).toBe('movies');
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.isActive).toBeTruthy();
    })

    it('It should create a category with constructor method using all fields', () => {
        const category = new Category(fullProps);
        
        expect(category).toBeInstanceOf(Category);
        expect(category.categoryId).toBe('uuid');
        expect(category.name).toBe('movies');
        expect(category.description).toBe('some description');
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.isActive).toBeTruthy();
    })

    it('It should be possible to create a category with isActive false', () => {
        const category = Category.create({name: 'movies', description: 'My description', isActive: false});
        expect(category.isActive).toBeFalsy();
    })

    it('It should be possible to change name value through changeName method', () => {
        const category = Category.create({name: 'movies', description: 'Original description', isActive: true});
        category.changeName('Changed name');
        expect(category.name).toBe('Changed name');
    })

    it('It should be possible to change description value through changeDescription method', () => {
        const category = Category.create({name: 'movies', description: 'Original description', isActive: true});
        category.changeDescription('Changed description');
        expect(category.description).toBe('Changed description');
    })

    it('It should be possible to deactivate a category', () => {
        const category = Category.create({name: 'movies', description: 'Some desc', isActive: true});
        category.deactivate();
        expect(category.isActive).toBeFalsy();
    })

    it('It should be possible to activate a category', () => {
        const category = Category.create({name: 'movies', description: 'Some desc', isActive: false});
        category.activate();
        expect(category.isActive).toBeTruthy();
    })

    it('It should be possible to get JSON format with toJSON method', () => {
        const category = Category.create(fullProps);
        expect(category.toJSON()).toStrictEqual(fullProps);
    })
})