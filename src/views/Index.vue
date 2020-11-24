<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <core-view />
  </v-app>
</template>

<script>
import CoreAppBar from '@/components/core/AppBar';
import CoreDrawer from '@/components/core/Drawer';
import CoreView from '@/components/core/View';

export default {
    components: {
        CoreAppBar: CoreAppBar,
        CoreDrawer: CoreDrawer,
        CoreView: CoreView,
    }
}
</script>