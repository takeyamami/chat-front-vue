<style scoped>
.selected {
  border: 2px dashed orange;
}
</style>

<template>
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            なまえなまえ
          </v-list-item-title>
          <v-list-item-subtitle>
            xxxx@gmail.com
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

    </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'とーく１', icon: '', link: '/1' },
          { title: 'とーく２', icon: '', link: '/2' },
          { title: 'トーク３', icon: '', link: '/3' },
        ],
        right: null,
      }
    },
  }
</script>