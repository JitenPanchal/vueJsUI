import Countries  from '@/components/administration/countries'
import Regions  from '@/components/administration/regions'
import Roles  from '@/components/administration/roles'
import Sources  from '@/components/administration/Sources'
import Users  from '@/components/administration/users'
import EditUser  from '@/components/administration/edit-user'
import AddUser  from '@/components/administration/add-user'


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
        path: '/administration/user/create',
        name: 'AddUser',
        component: AddUser
    },
    {
        path: '/administration/user/:id',
        name: 'User',
        component: EditUser
    }
]