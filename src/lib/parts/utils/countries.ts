import { writeFileSync, readFileSync, existsSync } from 'fs';
import { tmpdir } from 'os';
import { singleton } from 'tsyringe';
import { EApiActions } from '../../../ressources/comon';
import { sleep } from '../../../ressources/helpers';
import { Query } from '../../query/query.module';

export interface ICountry {
  id: number;
  rus: string;
  eng: string;
  chn: string;
  visible: boolean;
  retry: boolean;
  rent: boolean;
  multiService: boolean;
}

export interface ICountryList {
  updatedAt: number;
  countries: ICountry[];
}

@singleton()
export class Countries {

  public async get(name: string, lang?: 'rus' | 'eng' | 'chn') {
    return name
  }

  public async toNumber(name: string, lang?: 'rus' | 'eng' | 'chn') {
    return name
  }
}
