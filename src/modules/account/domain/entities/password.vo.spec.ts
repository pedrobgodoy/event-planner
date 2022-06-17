import { Password } from './password.vo';
import * as bcrypt from 'bcrypt';

describe('Password Unit Test', () => {
  it('should create a password', () => {
    const password = Password.create('RuUxVT5yrJm%afhL');
    expect(bcrypt.compareSync('RuUxVT5yrJm%afhL', password.hash)).toBeTruthy();
  });

  it("shouldn't create a password with less than 6 characters", () => {
    expect(() => Password.create('123')).toThrowError('Password must be at least 6 characters');
  });

  it("shouldn't create a password without number", () => {
    expect(() => Password.create('abcdefg')).toThrowError('Password must contain at least one number');
  });

  it("shouldn't create a password without a symbol", () => {
    expect(() => Password.create('abcdefg5')).toThrowError('Password must contain at least one symbol');
  });

  it("shouldn't create a password without a upper case character", () => {
    expect(() => Password.create('abcdefg5!')).toThrowError('Password must contain at least one upper case character');
  });

  it("shouldn't create a password without a lower case character", () => {
    expect(() => Password.create('ABCDEFG5!')).toThrowError('Password must contain at least one lower case character');
  });
});
