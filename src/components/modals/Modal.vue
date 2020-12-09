<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline" v-text="title" />
        <v-card-text v-text="description"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="cancelMethod"
            v-text="cancelText"
          ></v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="acceptMethod"
            v-text="acceptText"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: true,
    },

    acceptText: {
      type: String,
      default: '확인',
    },

    cancelText: {
      type: String,
      default: '취소',
    },

    dialog: {
      type: Boolean,
      default: false,
      require: true,
    },

    acceptMethod: {
      type: Function,
    },

    cancelMethod: {
      type: Function,
    },
  },

  methods: {
    
   }
}
</script>