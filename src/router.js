import { createRouter , createWebHistory} from "vue-router";


import coachDetails from './pages/coaches/coachDetails.vue';
import coachesList from './pages/coaches/coachesList.vue';
import coachRegistration from './pages/coaches/coachRegistration.vue';
import contactCoach from './pages/requests/contactCoach.vue';
import requestsReceived from './pages/requests/requestsReceived.vue';
import notFound from './pages/notFound.vue';
import UserAuth from "./pages/auth/UserAuth.vue";
import store from './store/index.js'



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: coachesList},
        {path: '/coaches/:id', component: coachDetails,props: true,
         children:[
            {path: 'contact', component: contactCoach},
         ]},
        {path: '/register', component: coachRegistration, meta: {requiresAuth:true}},
        {path: '/requests', component: requestsReceived, meta: {requiresAuth:true}},
        {path:'/auth', component: UserAuth, meta: {requiresUnauth:true}},
        {path: '/:notFound(.*)', component: notFound},
    ]
    });
    router.beforeEach(function(to, _, next){
        if(to.meta.requiresAuth && !store.getters.isAuthenticated){
            next('/auth');
        }
        else if(to.meta.requiresUnauth && store.getters.isAuthenticated){
            next('/coaches')
        }
        else{
            next()
        }
    })
        
    
    


export default router;