<template>
  <v-container fluid>
    <v-list
      flat
      subheader
      three-line
    >
      <v-subheader>장바구니</v-subheader>
      <v-list-item-group
        multiple
      >
        <CartItem v-for="cartItem in cartItems" :key="cartItem.id" :cartItem="cartItem"></CartItem>    
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
        @click="$router.push({ name: 'BuyList' })"
      >전체 상품 구매
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import CartItem from '@/components/CartItem';
export default {
  data: () => ({
    cartItems: [
      {
        id: 1,
        title: 'cart 1',
        description: 'cart desc 1',
        price: '1234',
        quantity: 1,
      },
      {
        id: 2,
        title: 'cart 2',
        description: 'cart desc 2',
        price: '2234',
        quantity: 1,
      },
      {
        id: 3,
        title: 'cart 3',
        description: 'cart desc 3',
        price: '3234',
        quantity: 1,
      },
      {
        id: 4,
        title: 'cart 4',
        description: 'cart desc 4',
        price: '4234',
        quantity: 1,
      },
      {
        id: 5,
        title: 'cart 5',
        description: 'cart desc 5',
        price: '5234',
        quantity: 1,
      },
      {
        id: 6,
        title: 'cart 6',
        description: 'cart desc 6',
        price: '6234',
        quantity: 1,
      },
    ]
  }),

  components: { CartItem },
}
</script>