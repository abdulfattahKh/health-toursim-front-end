import { NbMenuItem } from '@nebular/theme';

export const CLINIC_MENU: NbMenuItem[] = [
  {
    title: 'List.profile',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    data: { privilege: ['dashboard'] }
  },
  {
    title: 'List.features',
    group: true,
    data: { privilege: ['features'] }
  },
  {
    title: "List.management",
    icon: 'nb-locked',
    data: { privilege: ['management'] },
    children: [
      {
        title: 'List.roles',
        icon: "",
        link: "/pages/management/roles",
        data: { privilege: ['roles'] },
      },
      {
        title: 'List.users',
        icon: "",
        link: "/pages/management/users",
        data: { privilege: ['users'] },
      },
      {
        title: 'List.privileges',
        icon: "",
        link: "/pages/management/privileges",
        data: { privilege: ['privileges'] },
      },
    ]
  },
  {
    title: 'List.clinics',
    icon: "nb-locked",
    link: "/clinics",
    data: { privilege: ['clinics'] },
  }
];
