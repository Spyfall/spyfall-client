<template>
  <router-link
    :to="link"
    class="text-white rounded-full  text-2xl  hover:shadow-lg duration-300 text-nowrap"
    :class="[handleBg]"
  >
    <button class="w-full h-full py-2 px-6 focus:outline-none">
      {{ text }}
    </button>
  </router-link>
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
    link: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style></style>
