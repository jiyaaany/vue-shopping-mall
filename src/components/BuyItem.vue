<template>
 <v-list-item>
  <v-list-item-avatar>
    <v-img src="http://placehold.it/400x200/efa/aae&text=placehold.it"></v-img>
  </v-list-item-avatar>

  <v-list-item-content>
    <v-list-item-title v-html="buyItem.title"></v-list-item-title>
    <v-list-item-subtitle v-html="buyItem.description"></v-list-item-subtitle>
    <v-list-item-subtitle>가격: {{ buyItem.price }} 원</v-list-item-subtitle>
  </v-list-item-content>

  <div>
    <v-combobox
      v-model="buyItem.quantity"
      :items="cbBoxItems"
      clearable
      outlined
    ></v-combobox>
  </div>
</v-list-item>
</template>

<script>
export default {
  props: {
    buyItem: {
      type: Object,
      required: true,
    }
  },

  data: () => ({
    cbBoxItems: [ 1,2,3,4,5,5,6,7,8,9,10 ],
  })
}
</script>