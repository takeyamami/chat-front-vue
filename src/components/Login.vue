<template>
    <v-form>
    <v-container>
      <div 
        class="text-h5 d-flex align-center justify-center pa-10 mx-auto"
        max-width="550"
        min-height="76"
        outlined
      >
        ログイン
      </div>
      <v-row 
        justify="center"
        align-content="center"
        >
        <v-col
          cols="12"
          sm="6"
        >
         <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="メールアドレス"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="password"
            :append-icon="mdi-eye-off"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="パスワード"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
      <v-btn
        color="primary"
        elevation="4"
        raised
        large
        rounded
      >ログイン</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 6 || 'Min 6 characters',
          emailMatch: () => (`The email and password you entered don't match`),
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        }
      }
    },
  }
</script>