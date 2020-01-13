import * as dayjs from 'dayjs';

import { ShellModel } from '../../shell/data-store';

export class AgoraItemModel {
  slug: string;
  logo: string;
  name: string;
  code: string;
  description: string;
  // Default mock value
  // expirationDate = '12/01/2018';
  expirationDate: string = dayjs().add(5, 'day').format('MM/DD/YYYY HH:mm:ss') as string;
}

export class AgoraListingModel extends ShellModel {
  items: Array<AgoraItemModel> = [
    new AgoraItemModel(),
    new AgoraItemModel(),
    new AgoraItemModel(),
    new AgoraItemModel()
  ];

  constructor() {
    super();
  }
}
