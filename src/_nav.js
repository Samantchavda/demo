export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
        },
        {
            title: true,
            name: 'Vue binding',
            class: '',
            wrapper: {
              element: '',
              attributes: {}
            }
        },
        {
            name: 'Data Bindings',
            url: '/binding/Databindings'
        },
        {
            name: 'Other Bindings',
            url: '/binding/Otherbindings',
        },
        {
            title: true,
            name: 'Controll Binding',
            class: '',
            wrapper: {
              element: '',
              attributes: {}
            }
          },
          {
            name: 'Controll',
            url: '/Controll',
            children: [
                {
                    name: 'Input text',
                    url: '/Controll/inputtag',
                },
                {
                    name: 'Checkbox Binding',
                    url: '/Controll/Checkboxtag'
                }
            ]
        },
        {
            title: true,
            name: 'Extras'
          },
          {
            name: 'Pages',
            url: '/pages',
            icon: 'icon-star',
            children: [
              {
                name: 'Error 404',
                url: '/pages/404'
              }
            ]
          }
    ]
}