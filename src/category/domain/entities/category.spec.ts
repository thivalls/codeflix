import { Category } from "./category";

describe('Unit tests to Category Entity', () => {
    const props = {name: 'Movies', description: 'My description', isActive: true, createdAt: new Date()};
    const onlyRequiredProps = {name: 'Movies'};

    it('Show create a category instance with only required fields', () => {
        const category = new Category(onlyRequiredProps);
        expect(category).toBeInstanceOf(Category);
        expect(category.props.name).toBe(onlyRequiredProps.name);
    })

    it('Show create a category instance with all attributes', () => {
        const category = new Category(props);
        expect(category.props.name).toBe(props.name);
        expect(category.props.description).toBe(props.description);
        expect(category.props.isActive).toBe(props.isActive);
        expect(category.props.createdAt).toBe(props.createdAt);
    })

    it('Show create a category instance with all attributes and ensure strict equal object returned', () => {
        const category = new Category(props);
        expect(category.props).toStrictEqual(props);
    })

    it('It should get name through get name method', () => {
        const category = new Category(props);
        expect(category.name).toBe(props.name);
    })

    it('It should get description through get description method', () => {
        const category = new Category(props);
        expect(category.description).toBe(props.description);
    })

    it('It should return null if description is not provided', () => {
        const {description, ...rest} = props;
        const category = new Category(rest);
        expect(category.description).toBe(null);
    })

    it('It should get isActive through get isActive method', () => {
        const category = new Category(props);
        expect(category.isActive).toBe(props.isActive);
    })

    it('It should return undefined if isActive is not provided', () => {
        const {isActive, ...rest} = props;
        const category = new Category(rest);
        expect(category.isActive).toBe(true);
        expect(category.isActive).not.toBeNull();
    })

    it('It should get createdAt through get createdAt method', () => {
        const category = new Category(props);
        expect(category.createdAt).toBe(props.createdAt);
    })

    it('It should return undefined if createdAt is not provided', () => {
        const {createdAt, ...rest} = props;
        const category = new Category(rest);
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.createdAt).not.toBeNull();
    })

    it('It should be possible to create a category with isActive false', () => {
        const category = new Category({name: 'Movies', description: 'My description', isActive: false, createdAt: new Date()});
        expect(category.isActive).toBeFalsy();
    })
})