<template>
  <v-container fluid>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="150"
      max-width="250"
      src="https://picsum.photos/id/11/500/300"
    ></v-img>
    <p v-text="item.title"></p>
    <v-btn
      class="ma-2"
      color="primary"
      icon
      outlined
      @click.stop="dialog = true">
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
    <v-btn
      class="ma-2"
      color="secondary"
      outlined
      rounded
      :to="{ name: 'BuyList' }"
    >구매하기</v-btn>
    <Modal description="장바구니에 상품이 담겼습니다. 장바구니로 이동하실래요?" accept-text="이동" cancel-text="계속 쇼핑하기" :dialog="dialog" :accept-method="moveCart" ></Modal>
  </v-container>
</template>
<script>
import Modal from '@/components/modals/Modal';

export default {
  data: () => ({
    item: {
      id: 1,
      title: 'title1',
      rating: 1.2
    }, 
    dialog: false,
  }),

  components: { Modal },

  methods: {
    moveCart() {
      this.$router.push({ name: 'CartList' });
    }
  }
}
</script>
