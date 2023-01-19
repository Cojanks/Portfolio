export const data = {
  title: 'Experence',
  items: [
    {
      date: '2020 - Jan',
      eventType: 'work',
      content: 'Hired at Place 2',
      contentExtras: {
        type: 'list',
        list: ['derp', 'merp'],
      },
    },
    {
      date: '2019 - Dec',
      isCurrent: true,
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
