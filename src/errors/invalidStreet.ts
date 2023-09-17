import { ApplicationError } from '@/protocols';

export function invalidStreet(): ApplicationError {
  return {
    name: 'InvalidStreet',
    message: 'Digitado rua errado ou CEP',
  };
}
