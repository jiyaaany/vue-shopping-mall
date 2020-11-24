<template>
  <v-container fluid>
    <v-list
      flat
      subheader
      three-line
    >
      <v-subheader>구매 목록</v-subheader>
      <v-list-item-group
        multiple
      >
        <BuyItem v-for="buyItem in buyItems" :key="buyItem.id" :buyItem="buyItem"></BuyItem>    
      </v-list-item-group>
    </v-list>
    <div class="d-flex justify-end">
      <v-btn
        color="primary"
      >선택 상품 구매
      </v-btn>
      <v-btn
        color="secondary"
        class="ml-2"
        @click="showBuyForm"
      >전체 상품 구매
      </v-btn>
    </div>
    <BuyForm v-if="this.isBuying"></BuyForm>
  </v-container>
</template>

<script>
import BuyItem from '@/components/BuyItem.vue';
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

    isBuying: false,
  }),

  components: { BuyItem, BuyForm },

  methods: {
    showBuyForm() {
      this.isBuying = true;
    }
  }
}
</script>