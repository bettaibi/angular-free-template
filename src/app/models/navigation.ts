
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