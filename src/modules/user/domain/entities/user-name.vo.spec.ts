import { Name } from './user-name.vo';

describe('Name Unit Test', () => {
  it('should create name with 3 characters', () => {
    const userName = Name.create('abc');
    expect(userName.value).toBe('abc');
  });

  it("shouldn't create name with less than 3 characters", () => {
    expect(() => Name.create('ab')).toThrowError('Name must be at least 3 characters');
  });

  it("shouldn't create name with non-alphanumeric characters", () => {
    expect(() => Name.create('abc123')).toThrowError('Name must be alphanumeric');
  });

  it("shouldn't create name with more than 30 characters", () => {
    expect(() => Name.create('a'.repeat(31))).toThrowError('Name must be less or equal to 30 characters');
  });

  it('should create name with 30 characters', () => {
    const userName = Name.create('a'.repeat(30));
    expect(userName.value).toBe('a'.repeat(30));
  });
});
