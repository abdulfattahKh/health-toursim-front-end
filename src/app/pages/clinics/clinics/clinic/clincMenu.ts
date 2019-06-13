import { NbMenuItem } from '@nebular/theme';

export const CLINIC_MENU: NbMenuItem[] = [

  {
    title: 'List.clinic',
    group: true,
    data: { privilege: ['clinic'] }
  },
  {
    title: 'List.inbox',
    icon: 'nb-home',
    link: 'inbox',
    home: true,
    data: { privilege: ['inbox'] }
  },
  {
    title: "List.profile",
    icon: 'nb-locked',
    link:"profile",
    data: { privilege: ['clinicDescription'] }
  },
  {
    title: "List.treatment",
    icon: 'nb-locked',
    link: 'treatments',
    data: { privilege: ['treatment'] }
  },
  {
    title: "List.stuff",
    icon: 'nb-locked',
    link: 'stuff',
    data: { privilege: ['stuff'] }
  },
  {
    title: "List.reviews",
    icon: 'nb-locked',
    link: 'reviews',
    data: { privilege: ['stuff'] }
  }
];
