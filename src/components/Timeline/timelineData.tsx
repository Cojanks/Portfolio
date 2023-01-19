export const data = {
  title: 'Experence',
  items: [
    {
      date: '2020 - Jan',
      isCurrent: true,
      eventType: 'work',
      content: 'Hired at Place 2',
      contentExtras: {
        type: 'list',
        list: ['derp', 'merp'],
      },
    },
    {
      date: '2019 - Dec',

      content: 'Left Place 1',
      contentExtras: {
        type: 'list',
        list: ['la de da', 'okay okay'],
      },
      additionalTimeframeEvents: [
        {
          date: '2019 - Jan',
          content: 'Hired at Place 1',
        },
      ],
    },
  ],
};
