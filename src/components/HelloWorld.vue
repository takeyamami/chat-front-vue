<template>
  <v-container>
      <v-btn @click="sampleAjax">Ajax</v-btn>
  </v-container>
</template>

<script>
import axios from 'axios';
 
export default {
  name: 'HelloWorld',
  methods: {
    sampleAjax : function() {
      axios.get("http://localhost:8080/api/hello")
        .then((res) => {
          alert("status=" + res.status + ":" + res.data);
        });
    }
  }
}
</script>
