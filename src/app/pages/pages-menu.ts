import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    //data: { privilege: ['dashboard'] }
  },
  {
    title: 'features',
    group: true,
    //data: { privilege: ['features'] }
  },
  {
    title: 'auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'logIn',
        link: '/auth/signin',
      },
      {
        title: 'register',
        link: '/auth/signup',
      },
      {
        title: 'requestPassword',
        link: '/auth/request-password',
      },
      {
        title: 'resetPassword',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: "management",
    icon: 'nb-locked',
    //data: { privilege: ['management'] },
    children: [
      {
        title: 'roles',
        icon: "",
        link: "",
        //data: { privilege: ['roles'] },
      },
      {
        title: 'privileges',
        icon: "",
        link: "",
        //data: { privilege: ['privileges'] },
      }
    ]
  }
];
