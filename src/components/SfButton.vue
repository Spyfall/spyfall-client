<template>
  <button
    class="text-white rounded-full py-2 px-6 text-lg focus:outline-none hover:shadow-lg duration-300"
    :class="[handleBg]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  computed: {
    handleBg() {
      return `bg-${this.background}`;
    },
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: "spyfall-red",
    },
  },
};
</script>

<style></style>
