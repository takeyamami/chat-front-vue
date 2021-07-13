<style>
</style>

<template>
  <div>
    <v-main style="max-width:1400px">
      <v-container ml-0 pl-0>
        <v-row style="padding-bottom: 100px;">
        <v-col 
          cols="4"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <a href="/login">ログアウト</a>
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
        <v-col cols="8">
          <div v-for="talk in talks" :key="talk.tid">
            <div v-if="user.uid == talk.user.uid" style="padding-left:30%">
              <p class="subtitle mb-0">{{talk.user.name}}</p>
              <v-card
                max-width="400"
                dark
                color="#41b0ff"
              >
                <v-card-text>
                  <p style="white-space:pre-wrap; word-wrap:break-word;" class="mb-0 white--text">{{talk.message}}</p>
                </v-card-text>
              </v-card>
              <div style="max-width:400px">
                <p class="caption text-right">{{ moment(talk.created_at) }}</p>
              </div>
            </div>
            <div v-else>
              <p class="subtitle mb-0">{{talk.user.name}}</p>
              <v-card
                max-width="400"
              >
                <v-card-text>
                  <p style="white-space:pre-wrap; word-wrap:break-word;" class="mb-0">{{talk.message}}</p>
                </v-card-text>
              </v-card>
              <div style="max-width:400px">
                <p class="caption text-right">{{ moment(talk.created_at) }}</p>
              </div>
            </div>
          </div>
          <div id="form" style="position:fixed; bottom: 0; min-width:600px;">
            <v-layout wrap>
            <v-textarea
              name="message"
              solo
              label="メッセージを入力してください"
              value=""
              no-resize
              rows="3"
            >
            </v-textarea>
            <v-btn fab dark color="cyan" class="mx-2 my-5 submit"><v-icon dark>mdi-pencil</v-icon></v-btn>
            <input type="hidden" name="rid" v-model="id">
            <input type="hidden" name="uid" value="1">
            </v-layout>
          </div>
        </v-col>
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
        right: null,
        user: null,
      }
    },
    created() {
      this.auth()
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
            alert(e)
          });
      },

      auth() {
        this.user = {uid: 1, name: "yamamomi"}
      },
       
      moment(date) {
          return moment(date).format('YYYY/MM/DD HH:mm');
      }
    },

  }
</script>