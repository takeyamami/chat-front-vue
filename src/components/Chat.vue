<style>
</style>

<template>
  <div>
    <v-main style="max-width:1200px">
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
          <div v-for="talk in talks" :key="talk.tid">
            <p class="subtitle mb-0">{{talk.user.name}}</p>
            <v-card
              max-width="344"
            >
              <v-card-text>
                <p style="white-space:pre-wrap; word-wrap:break-word;" class="mb-0">{{talk.message}}</p>
              </v-card-text>
            </v-card>
            <div style="max-width:334px">
              <p class="caption text-right">{{ moment(talk.created_at) }}</p>
            </div>
          </div>
        </v-col>
        <input type="hidden" v-model="id">
        </v-row>        
      </v-container>
    </v-main>
  </div>
</template>

<script>
  import moment from "moment";

  export default {
    props: {
      id: String
    },
    data () {
      
      return {
        items: [
          { title: 'とーく１', icon: '', link: '/chat/1' },
          { title: 'とーく２', icon: '', link: '/chat/2' },
          { title: 'トーク３', icon: '', link: '/chat/3' },
          { title: 'トーク4', icon: '', link: '/chat/4' },
          { title: 'トーク5', icon: '', link: '/chat/5' },
          { title: 'トーク6', icon: '', link: '/chat/6' },
          { title: 'トーク7', icon: '', link: '/chat/7' },
          { title: 'トーク8', icon: '', link: '/chat/8' },
        ],
        talks: null,
        right: null
      }
    },
    beforeUpdate () {
      this.getRequest()
    },

    methods: {
      getRequest() {
        this.axios
          .get('http://localhost:8080/talk/list/' + this.id)
          .then(response => {
            this.talks = response.data
          })
          .catch((e) => {
            alert(e);
          });
      },
      
      moment(date) {
          return moment(date).format('YYYY/MM/DD HH:mm');
      }
    },

  }
</script>