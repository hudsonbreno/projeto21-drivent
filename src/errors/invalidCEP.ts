import { ApplicationError } from '@/protocols';

export function invalidCEP(): ApplicationError {
  return {
    name: 'InvalidCep',
    message: 'CEP digitado não é válido',
  };
}
