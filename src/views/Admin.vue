<template>
  <v-container>
    <v-form>
      <v-text-field 
        v-model="item.title"
        :counter="255"
        label="상품명"
        required
        color="deep-purple accent-4"
      ></v-text-field>

      <v-textarea
          v-model="item.description"
          label="상품설명"
          color="deep-purple accent-4"
      ></v-textarea>

      <v-text-field
        v-model="item.price"
        label="가격"
        type="number"
        color="deep-purple accent-4"
      ></v-text-field>

      <v-combobox
        v-model="item.quantity"
        :items="quantities"
        label="수량"
        color="deep-purple accent-4"
      ></v-combobox>

      <v-file-input
        v-model="item.files"
        color="deep-purple accent-4"
        counter
        label="상품 이미지"
        multiple
        placeholder="상품 이미지 선택"
        prepend-icon="mdi-paperclip"
        :show-size="1000"
      >
        <template v-slot:selection="{ index, text }">
          <v-chip
            v-if="index < 2"
            color="deep-purple accent-4"
            dark
            label
            small
          >
            {{ text }}
          </v-chip>

          <span
            v-else-if="index === 2"
            class="overline grey--text text--darken-3 mx-2"
          >
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </v-file-input>
        
      <div class="d-flex justify-end mt-3">
        <v-btn
          type="submit"
          color="deep-purple accent-4"
          style="color: white;"
        >상품등록</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    item: {
      title: '',
      description: '',
      price: null,
      quantity: 1,
      files: []
    },

    quantities: [...Array(100).keys()].map(v => v + 1),
  })
}
</script>