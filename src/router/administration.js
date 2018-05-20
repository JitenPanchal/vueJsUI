import Countries  from '@/components/administration/countries'
import Regions  from '@/components/administration/regions'
import Roles  from '@/components/administration/roles'
import Sources  from '@/components/administration/Sources'
import Users  from '@/components/administration/users'
import User  from '@/components/administration/user'


export const routes = [
    {
        path: '/administration/countries',
        name: 'Countries',
        component: Countries
    },
    {
        path: '/administration/regions',
        name: 'Regions',
        component: Regions
    },
    {
        path: '/administration/roles',
        name: 'Roles',
        component: Roles
    },
    {
        path: '/administration/sources',
        name: 'Sources',
        component: Sources
    },
    {
        path: '/administration/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/administration/user',
        name: 'User',
        component: User
    }

]