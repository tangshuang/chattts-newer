import { DesktopOutline, HomeOutline, StorefrontOutline, DocumentOutline } from '@vicons/ionicons5';
import { VoiceActivate } from '@vicons/carbon';
import { PersonVoice20Regular } from '@vicons/fluent';

export default [
    {
        name: 'home',
        path: '/',
        component: () => import('./views/home/index.vue'),
        title: '首页',
        icon: HomeOutline,
    },
    {
        name: 'webui',
        path: '/webui',
        component: () => import('./views/webui/index.vue'),
        title: 'WebUI',
        icon: DesktopOutline,
    },
    {
        name: 'forge',
        path: '/forge',
        component: () => import('./views/forge/index.vue'),
        title: 'Forge',
        icon: StorefrontOutline,
    },
    {
        name: 'seed',
        path: '/seed',
        component: () => import('./views/seed/index.vue'),
        title: '音色种子',
        icon: PersonVoice20Regular,
    },
    {
        name: 'clone',
        path: '/clone',
        component: () => import('./views/clone/index.vue'),
        title: '声音克隆',
        icon: VoiceActivate,
    },
    {
        name: 'resource',
        path: '/resource',
        component: () => import('./views/resource/index.vue'),
        title: '学习资料',
        icon: DocumentOutline,
    },
];
