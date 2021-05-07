<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="text-spyfall-yellow p-1 rounded-t-md border-b-4 border-spyfall-yellow hover:bg-gray-200 focus:bg-gray-200 outline-none duration-200"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "placeholder",
    },
  },
};
</script>

<style></style>
