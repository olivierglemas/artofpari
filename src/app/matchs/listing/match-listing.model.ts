import * as dayjs from 'dayjs';

import { ShellModel } from '../../shell/data-store';

export class MatchItemModel {
  slug: string;
  logo: string;
  name: string;
  code: string;
  description: string;
  // Default mock value
  // expirationDate = '12/01/2018';
  expirationDate: string = dayjs().add(5, 'day').format('MM/DD/YYYY HH:mm:ss') as string;
}

export class MatchListingModel extends ShellModel {
  items: Array<MatchItemModel> = [
    new MatchItemModel(),
    new MatchItemModel(),
    new MatchItemModel(),
    new MatchItemModel()
  ];

  constructor() {
    super();
  }
}
