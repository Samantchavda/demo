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
            name: 'CSS Bindings',
            url: '/binding/Cssbindings',
        },
        {
            name: 'Other Bindings',
            url: '/binding/Otherbindings',
        },
        {
            title: true,
            name: 'Components Binding',
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
                },
                {
                    name: 'Radio Binding',
                    url: '/Controll/Radiotag'
                },
                {
                    name: 'Select Binding',
                    url: '/Controll/Selecttag'
                },
                {
                    name: 'Form',
                    url: '/Controll/Form'
                }
            ]
        },
        {
            name: 'Notifications',
            url: '/Notifications',
            children: [
                {
                    name: 'Alerts',
                    url: '/Notifications/Alerts'
                },
                {
                    name: 'Modals',
                    url: '/Notifications/Modals'
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