<template>
  <v-container fluid>
    <v-subheader>구매 목록</v-subheader>
    <BuyForm></BuyForm>
  </v-container>
</template>

<script>
import BuyForm from '@/components/BuyForm.vue';

export default {
  data: () => ({
    buyItems: [
      {
        id: 1,
        title: '빼빼로',
        description: '롯데 빼빼로',
        price: '1500'
      },
      {
        id: 2,
        title: 'test',
        description: '롯데 빼빼로123',
        price: '44444'
      },
      {
        id: 3,
        title: 'test4',
        description: '롯데 빼빼로23',
        price: '25252'
      },
      {
        id: 4,
        title: 'test2',
        description: '롯데 빼빼로4546',
        price: '3424'
      },
    ],
  }),

  components: { BuyForm },
}
</script>