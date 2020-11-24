<template>
  <v-container>
    <v-list three-line>
    <template>
      <v-list-item
      >
        <v-list-item-avatar>
          <v-img src="http://placehold.it/400x200/efa/aae&text=placehold.it"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="123123"></v-list-item-title>
          <v-list-item-subtitle v-html="456456"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="buyer.name"
      :counter="10"
      :rules="nameRules"
      label="이름"
      required
    ></v-text-field>

    <v-text-field
      v-model="buyer.email"
      :rules="emailRules"
      label="이메일 주소"
      required
    ></v-text-field>

    <div class="d-flex">
      <v-select
        v-model="buyer.province"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="시/도"
        required
      ></v-select>

      <v-text-field
        v-model="buyer.city"
        :counter="10"
        label="지역/도시"
        required
      ></v-text-field>
    </div>
    <div class="d-flex justify-end">
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        주문하기
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        다시 작성
      </v-btn>
    </div>
  </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      '강원도',
      '경기도',
      '경상남도',
      '경상북도',
    ],
    buyer: {
      name: '',
      email: '',
      province: '',
      city: '',
    }
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
  }
}
</script>