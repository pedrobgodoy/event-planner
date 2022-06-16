const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export class Email {
  private constructor(public readonly value: string) {}

  public static create(value: string): Email {
    if (!emailReg.test(value)) throw new Error('Email is not valid');
    return new Email(value);
  }
}
