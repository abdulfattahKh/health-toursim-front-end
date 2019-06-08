import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'List.clinics',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    data: { privilege: ['clinics'] }
  },
  {
    title: 'List.clinics',
    icon: 'nb-locked',
    children: [
      {
        title: 'List.allClinics',
        link: "/clinics/allClinics",
        data: { privilege: ['allClinics'] },
      },
      {
        title: 'List.clinicsApplications',
        link: "/clinics/ClinicsByStatus",
        data: { privilege: ['clinicsApplications'] },
      },
      {
        title: 'List.myClinics',
        link: "/clinics/myClinics",
        data: { privilege: ['myClinics'] },
      }
    ]
  },
];
