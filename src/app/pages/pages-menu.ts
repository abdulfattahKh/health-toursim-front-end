import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'List.dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    data: { privilege: [1, 2, 3] }
  },
  {
    title: 'List.features',
    group: true,
    data: { privilege: [1, 2, 3] }
  },
  // {
  //   title: 'auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'login',
  //       link: '/auth/signin',
  //     },
  //     {
  //       title: 'register',
  //       link: '/auth/signup',
  //     },
  //     {
  //       title: 'requestPassword',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'resetPassword',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },

  {
    title: "List.profile",
    icon: 'nb-locked',
    data: { privilege: [1, 2, 3, 72] },
  },
  {
    title: "List.information",
    icon: 'nb-locked',
    data: { privilege: [2, 3] },
    children: [
      {
        title: 'List.review',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },
      {
        title: 'List.description',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },
      {
        title: 'List.addVideo',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },
      {
        title: 'List.addPictures',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },
      {
        title: 'List.addPictures',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },
      {
        title: 'List.currency',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },
      {
        title: 'List.currency',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },
      {
        title: 'List.openingHours',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },
      {
        title: 'List.premises',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },


      {
        title: 'List.Services',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },

      {
        title: 'List.paymentInformation',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },
      {
        title: 'List.suggestedTravelAgency',
        icon: "",
        link: "management/roles",
        data: { privilege: [2, 3] },
      },

      {
        title: 'List.langauges',
        icon: "",
        link: "management/roles",
        data: { privilege: [1, 2, 3, 72] },
      },
    ]
  },
  {
    title: 'List.reviews',
    icon: "",
    link: "management/roles",
    data: { privilege: [2, 3] },
    children: [
      {
        title: 'List.invitePateintsToLeaveAReview',
        icon: "",
        link: "management/roles",
        data: { privilege: [2] },
      },
      {
        title: 'List.inviteTouristToLeaveAReview',
        icon: "",
        link: "management/roles",
        data: { privilege: [2] },
      },
    ]
  },
  {
    title: 'List.treatments',
    icon: "",
    link: "management/roles",
    data: { privilege: [2] }
  },
  {
    title: "List.management",
    icon: 'nb-locked',
    data: { privilege: [1, 2, 3] },
    children: [
      {
        title: 'List.roles',
        icon: "",
        link: "management/roles",
        data: { privilege: [1, 2, 3] },
      },
      {
        title: 'List.users',
        icon: "",
        link: "management/users",
        data: { privilege: [1, 2, 3] },
      },
      {
        title: 'List.privileges',
        icon: "",
        link: "management/privileges",
        data: { privilege: [1, 2, 3] },
      }
    ]
  },
  {
    title: 'List.stuff',
    icon: "",
    link: "management/privileges",
    data: { privilege: [2, 3] },
  },
  {
    title: 'List.inbox',
    icon: "",
    link: "management/roles",
    data: { privilege: [2, 3] },
  },
];
