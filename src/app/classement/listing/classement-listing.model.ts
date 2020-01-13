import * as dayjs from 'dayjs';

import { ShellModel } from '../../shell/data-store';

export class ClassementItemModel {
  slug: string;
  logo: string;
  name: string;
  code: string;
  description: string;
  // Default mock value
  // expirationDate = '12/01/2018';
  expirationDate: string = dayjs().add(5, 'day').format('MM/DD/YYYY HH:mm:ss') as string;
}

export class ClassementListingModel extends ShellModel {
  items: Array<ClassementItemModel> = [
    new ClassementItemModel(),
    new ClassementItemModel(),
    new ClassementItemModel(),
    new ClassementItemModel()
  ];

  constructor() {
    super();
  }
}
