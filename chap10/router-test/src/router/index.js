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
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/members', component: Members },
        { path: '/members/:id', component: MemberInfo},
        {
            path: '/videos', component: Videos,
            children: [
                { path: ':id', component: VideoPlayer}
            ]
        },
    ]
})

export default router