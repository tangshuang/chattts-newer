<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router';
import { NConfigProvider, darkTheme, NMessageProvider, NLoadingBarProvider, NModalProvider, NDialogProvider, NIcon, NMenu, NLayoutSider, NLayout } from 'naive-ui';
import { ref, computed, onMounted, onUnmounted, h, shallowRef, defineAsyncComponent } from 'vue';
import routes from './routes';

const route = useRoute();
const router = useRouter();

const media = window.matchMedia(' (prefers-color-scheme: dark)');

const isDarkMode = ref(media.matches);
const darkOverrides = {
  common: {
    primaryColor: '#2d8cf0',
    primaryColorHover: '#227fe2',
    primaryColorPressed: '#227fe2',
    primaryColorSuppl: '#2d8cf0',
  },
  Button: {
    textColor: '#fff',
    textColorHover: '#227fe2',
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: '#fff',
        textColorHover: '#227fe2',
      },
    },
  },
};
const lightOverrides = {
  common: {
    primaryColor: '#2d8cf0',
    primaryColorHover: '#227fe2',
    primaryColorPressed: '#227fe2',
    primaryColorSuppl: '#2d8cf0',
  },
  Button: {
    textColor: '#2d8cf0',
    textColorHover: '#227fe2',
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: '#2d8cf0',
        textColorHover: '#227fe2',
      },
    },
  },
};
const theme = computed(() => isDarkMode.value ? darkTheme : undefined);
const overrides = computed(() => isDarkMode.value ? darkOverrides : lightOverrides);

const onChange = () => {
  isDarkMode.value = media.matches;
};

onMounted(() => {
  media.addEventListener('change', onChange);
});

onUnmounted(() => {
  media.removeEventListener('change', onChange);
});

// -------

const collapsed = ref(localStorage.getItem('MENU_PAGES_COLLAPSED') === 'true');

const handleCollapsed = () => {
    collapsed.value = !collapsed.value;
    localStorage.setItem('MENU_PAGES_COLLAPSED', collapsed.value + '');
};

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
};
const menus = routes.map((item) => {
  const { name, title, icon } = item;
  return {
    key: name,
    label: title,
    icon: renderIcon(icon),
  };
});

const activeMenuKey = ref(menus[0].key);

function handleChangeMenu(name) {
  const item = routes.find(item => item.name === name)!;
  router.push(item.path);
}

onMounted(() => {
  setTimeout(() => {
    const currentPath = route.path;
    const item = routes.find(item => item.path === currentPath);
    if (item) {
      activeMenuKey.value = item.name;
    }
  }, 100);
});

// --

const pages = routes.map((route) => {
  const { name, component } = route;
  const Component = defineAsyncComponent(component);
  return {
    name,
    component: Component,
  };
});
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="overrides">
    <n-loading-bar-provider>
      <n-modal-provider>
        <n-dialog-provider>
          <n-message-provider>
            <n-layout has-sider class="container">
              <n-layout-sider
                  bordered
                  collapse-mode="width"
                  :collapsed-width="64"
                  :width="240"
                  :collapsed="collapsed"
                  show-trigger
                  @collapse="handleCollapsed"
                  @expand="handleCollapsed"
              >
                  <n-menu
                      :collapsed="collapsed"
                      :collapsed-width="64"
                      :collapsed-icon-size="22"
                      :options="menus"
                      v-model:value="activeMenuKey"
                      @update:value="handleChangeMenu"
                  />
              </n-layout-sider>
              <n-layout class="main">
                <!-- <router-view></router-view> -->
                <div class="page" v-for="page in pages" :key="page.name" v-show="page.name === route.name">
                  <component :is="page.component" />
                </div>
              </n-layout>
            </n-layout>
          </n-message-provider>
        </n-dialog-provider>
      </n-modal-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style socped>
.container {
  width: 100vw;
  height: 100vh;
}
.page {
  width: 100%;
  height: 100%;
}
</style>