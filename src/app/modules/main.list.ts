import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'List.dashboard',
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
                link: "/management/roles",
                data: { privilege: ['roles'] },
            },
            {
                title: 'List.users',
                icon: "",
                link: "/management/users",
                data: { privilege: ['users'] },
            },
            {
                title: 'List.privileges',
                icon: "",
                link: "/management/privileges",
                data: { privilege: ['privileges'] },
            },
        ]
    },
    {
        title: 'List.clinics',
        group: true,
        data: { privilege: ['clinics'] }
    },
    {
        title: 'List.clinics',
        icon: "nb-locked",
        data: { privilege: ['clinics'] },
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
    }
];
