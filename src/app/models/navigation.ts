
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
        title: 'E-Commerce',
        icon: 'shopping_cart',
        subItems: [
            {title: 'Products', path:'/auth/login'},
            {title: 'Product Details', path:'/auth/register'},
        ]
    },
    {
        title: 'Invoice',
        icon: 'receipt',
        path: '/statistics',
    },
    {
        title: 'Email',
        icon: 'email',
        path: '/statistics',
    },
    {
        title: 'Chat',
        icon: 'textsms',
        path: '/statistics',
    },
    {
        title: 'To-Do',
        icon: 'playlist_add_check',
        path: '/statistics',
    },
    {
        title: 'Scrumboard',
        icon: 'developer_board',
        path: '/statistics',
    },
    {
        title: 'Profile',
        icon: 'account_circle',
        path: '/statistics',
    },
    {
        title: 'Search',
        icon: 'search',
        path: '/statistics',
    },
    {
        title: 'Coming Soon',
        icon: 'alarm_on',
        path: '/statistics',
    },
    {
        title: 'Auth',
        icon: 'lock',
        subItems: [
            {title: 'Login', path:'/auth/login'},
            {title: 'Register', path:'/auth/register'},
            {title: 'Forgot', path:'/auth/forgot-password'},
            {title: 'Lockscreen', path:'/auth/lockscreen'},
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
    },
    {
        title: 'Custom Components',
        icon: 'library_books',
        subItems: [
            {title: 'Toast Component', path:'/custom-components/toast'},
            {title: 'Alert Component', path:'/custom-components/alert'},
            {title: 'Forget Password', path:'/forget-password'},
        ]
    }
]