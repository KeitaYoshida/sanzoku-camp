<template>
  <v-container>
    <v-layout wrap text-center>
      <v-flex xs12>
        <Title />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Title from "../components/com/title/Title";

export default {
  props: [],
  components: { Title },
  data: function() {
    return {};
  },
  computed: {
    ...mapState({
      target: "target"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    init() {}
  }
};
</script>

<style lang="scss" scoped>
</style