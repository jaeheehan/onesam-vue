import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/pages/Home.vue";
import About from "@/components/pages/About.vue";
import Members from "@/components/pages/Members.vue";
import Videos from "@/components/pages/Videos.vue";
import MemberInfo from "@/components/pages/MemberInfo.vue";
import VideoPlayer from "@/components/pages/VideoPlayer.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/members', name: 'members', component: Members },
        { path: '/members/:id', name: 'members/id', component: MemberInfo},
        {
            path: '/songs', name: 'videos', component: Videos,
            children: [
                { path: ':id', name: 'videos/id', component: VideoPlayer}
            ]
        },
    ]
})

export default router