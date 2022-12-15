import { singleton } from 'tsyringe';

export interface IService {
  code: string;
  name: string;
  f: string;
}

@singleton()
export class Services {

  public get(name: string) {
    return name
  }
}
