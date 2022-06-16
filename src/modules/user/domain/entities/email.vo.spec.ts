import { Email } from './email.vo';

describe('Email Unit Test', () => {
  it('should create email with valid value', () => {
    const email = Email.create('test@test.com');
    expect(email.value).toBe('test@test.com');
  });

  it("shouldn't create email with invalid value", () => {
    expect(() => Email.create('test')).toThrowError('Email is not valid');
    expect(() => Email.create('@test.com')).toThrowError('Email is not valid');
    expect(() => Email.create('test@test')).toThrowError('Email is not valid');
  });
});
