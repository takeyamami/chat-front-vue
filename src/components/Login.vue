<template>
  <div>
    <v-main>
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">ログイン</h1>
        </v-card-title>
        <v-form>
          <v-card-text>
            <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="メールアドレス"
            prepend-icon="mdi-account-circle"
            ></v-text-field>
            <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            name="input-10-1"
            label="パスワード"
            hint="At least 6 characters"
            counter
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
            color="primary"
            elevation="4"
            raised
            large
            rounded
            to="/"
            >ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-main>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        showPassword: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 6 || 'Min 6 characters',
          emailMatch: () => (`The email and password you entered don't match`),
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
  }
</script>