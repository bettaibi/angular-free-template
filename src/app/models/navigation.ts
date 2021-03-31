
interface NavigationItems{
    title: string;
    path: string;
}

export interface Navigation{
    title: string;
    icon: string;
    subItems?: NavigationItems[];
    path?: string;
}

export const navigations: Navigation[] = [
    {
        title: 'Dashboard',
        icon: 'dashboard',
        path: '/statistics',
    },
    {
        title: 'Custom Components',
        icon: 'library_books',
        subItems: [
            {title: 'Toast Component', path:'/custom-components/toast'},
            {title: 'Alert Component', path:'/custom-components/alert'},
            {title: 'Forget Password', path:'/forget-password'},
        ]
    },
    {
        title: 'Auth',
        icon: 'lock',
        subItems: [
            {title: 'Login', path:'/login'},
            {title: 'Register', path:'/register'},
            {title: 'Forget Password', path:'/forget-password'},
        ]
    },
    {
        title: 'Landing Pages',
        icon: 'pages',
        subItems: [
            {title: 'Login', path:'/login'},
            {title: 'Register', path:'/register'},
            {title: 'Forget Password', path:'/forget-password'},
        ]
    }
]