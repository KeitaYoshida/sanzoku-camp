<template>
  <main>
    <img src="../assets/img/sanzoku_logo.png" alt="Sanzoku Jr" width="400px" />
    <h1 class="def-color">さん族Jr</h1>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: [],
  components: {},
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