<template>
  <v-col cols="3">
    <v-card>
      <div>
        <v-img
          height="250"
          src="https://picsum.photos/seed/picsum/200/300"
        ></v-img>

        <router-link :to="{ name: 'ItemDetail', params: { id: item.id } }">
          <v-card-title>
            {{ item.title }}
          </v-card-title>
        </router-link>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :value=item.rating
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4">
              {{ item.rating }} (413)
            </div>
          </v-row>

          <div class="my-4 subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>
      </div>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true,
      }
    }
  }
</script>
