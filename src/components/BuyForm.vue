<template>
  <v-container>
    <v-list three-line>
    <template>
      <BuyItem v-for="buyItem in buyItems" :key="buyItem.id" :buyItem="buyItem"></BuyItem>
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
import BuyItem from '@/components/BuyItem';
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
    },
    buyItems: [
      {
        id: 1,
        title: '빼빼로',
        description: '롯데 빼빼로',
        price: '1500',
        quantity: 1,
      },
      {
        id: 2,
        title: 'test',
        description: '롯데 빼빼로123',
        price: '44444',
        quantity: 1,
      },
      {
        id: 3,
        title: 'test4',
        description: '롯데 빼빼로23',
        price: '25252',
        quantity: 1,
      },
      {
        id: 4,
        title: 'test2',
        description: '롯데 빼빼로4546',
        price: '3424',
        quantity: 1,
      },
    ],
  }),

  components: { BuyItem },

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        location.replace('/order/list');
      }
    },
    reset () {
      this.$refs.form.reset()
    },
  }
}
</script>