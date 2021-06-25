<template>
    <v-container>
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
          link
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
        <v-app-bar app>
            ほげほげ
        </v-app-bar>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'とーく１', icon: '' },
          { title: 'とーく２', icon: '' },
          { title: 'トーク３', icon: '' },
        ],
        right: null,
      }
    },
  }
</script>