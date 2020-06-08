import { Iuser } from './iuser';

export class User implements Iuser {
  comptE_NT: string;
  nom: string;
  prenom: string
  reF_COLLABORATEUR: number;

  constructor(obj?: Partial<User>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
