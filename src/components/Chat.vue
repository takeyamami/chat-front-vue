<style>
</style>

<template>
  <div>
    <v-main>
      <v-container ml-0 pl-0>
        <v-row>
        <v-col 
          cols="3"
        >
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
        </v-col>
        <v-col cols="7">
          <v-card
            class="mt-5"
            max-width="344"
            v-for="talk in talks"
            :key="talk.tid"
          >
            <v-card-text>
              <p style="white-space:pre-wrap; word-wrap:break-word;">{{talk.message}}</p>
            </v-card-text>
          </v-card>
        </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
  export default {
    data () {
      
      return {
        items: [
          { title: 'とーく１', icon: '', link: '/chat/1' },
          { title: 'とーく２', icon: '', link: '/chat/2' },
          { title: 'トーク３', icon: '', link: '/chat/3' },
        ],
        talks: null,
        right: null
      }
    },
    created () {
      this.getRequest()
    },

    methods: {
      getRequest() {
        this.axios
          .get('http://localhost:8080/talk/list/1')
          .then(response => {
            this.talks = response.data
          })
          .catch((e) => {
            alert(e);
          });
      }
    }
  }
</script>