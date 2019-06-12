import { NbMenuItem } from '@nebular/theme';

export const CLINIC_MENU: NbMenuItem[] = [
  {
    title: 'List.clinicProfile',
    icon: 'nb-home',
    link: '/pages/clinicProfile',
    home: true,
    data: { privilege: ['clinicProfile'] }
  },
  {
    title: "List.addDescription",
    icon: 'nb-locked',
    data: { privilege: ['clinicDescription'] }
  }
];
