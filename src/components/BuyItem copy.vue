<template>
 <v-list-item>
  <template v-slot:default="{ active }">
    <v-list-item-action>
      <v-checkbox :input-value="active"></v-checkbox>
    </v-list-item-action>

    <v-list-item-avatar>
      <v-img src="http://placehold.it/400x200/efa/aae&text=placehold.it"></v-img>
    </v-list-item-avatar>

    <v-list-item-content class="ml-3">
      <v-list-item-title v-text="buyItem.title" />
      <v-list-item-subtitle v-text="buyItem.description" />
      <v-list-item-subtitle>가격: {{ buyItem.price }} 원</v-list-item-subtitle>
    </v-list-item-content>
  </template>
  </v-list-item>
</template>

<script>
export default {
  props: {
    buyItem: {
      type: Object,
      required: true,
    }
  }
}
</script>