export const fakeNotification = [
  // 0 -> Normal
  // 1 -> Warning
  // 2 -> Urgent

  {
    type: 'PLM Treasurer - Cashier',
    message: 'Your payment is successfully encoded by the cashier',
    timePosted: '09/19/2023 11:01 AM',
    notificationType: 0,
  },

  {
    type: 'PLM CRS - Admin',
    message: 'The end is near, please pay your balance immediately',
    timePosted: '09/19/2023 11:01 AM',
    notificationType: 1,
  },

  {
    type: 'PLM Treasurer - Cashier',
    message:
      'Your payment is on hold by the cashier, please contact the cashier for more details',
    timePosted: '09/19/2023 11:01 AM',
    notificationType: 2,
  },

  {
    type: 'SYSTEM MESSAGE',
    message: 'Your account has been created successfully!',
    timePosted: '09/18/2023 11:01 AM',
    notificationType: 0,
  },
];
