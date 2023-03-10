import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notication content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notication content with less than 5 caracteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notication content with more than 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
