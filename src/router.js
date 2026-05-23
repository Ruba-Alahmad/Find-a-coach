import { createRouter , createWebHistory} from "vue-router";


import coachDetails from './pages/coaches/coachDetails.vue';
import coachesList from './pages/coaches/coachesList.vue';
import coachRegistration from './pages/coaches/coachRegistration.vue';
import contactCoach from './pages/requests/contactCoach.vue';
import requestsReceived from './pages/requests/requestsReceived.vue';
import notFound from './pages/notFound.vue';



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: coachesList},
        {path: '/coaches/:id', component: coachDetails,props: true,
         children:[
            {path: 'contact', component: contactCoach},
         ]},
        {path: '/register', component: coachRegistration},
        {path: '/requests', component: requestsReceived},
        {path: '/notFound(.*)', component: notFound},
    ]
});
export default router;