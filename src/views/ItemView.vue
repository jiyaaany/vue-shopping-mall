<template>
  <v-container fluid>
    <v-row>
      <Item v-for="item in items" :key="item.id" :item="item" col="3" />
    </v-row>
  </v-container>
</template>

<script>
import Item from '@/components/Item';

export default {
  data: () => ({
    items: [
      {
        id: 1,
        title: 'title1',
        rating: 1.2
      },
      {
        id: 2,
        title: 'title2',
        rating: 4.5
      },
      {
        id: 3,
        title: 'title3',
        rating: 3.0
      },
       {
        id: 4,
        title: 'title4',
        rating: 5.0
      },
      {
        id: 5,
        title: 'title5',
        rating: 4.0
      },
      {
        id: 6,
        title: 'title6',
        rating: 1.0
      }
    ]
  }),

  components: { Item }
}
</script>