<template>
  <div
    class="flex flex-row flex-wrap w-full justify-between bg-gray-300 rounded-xl p-2 my-4"
  >
    <!-- TODO: jusitfy between olmicak kaldır orayı bkaıcam (gartic) -->
    <content-item v-for="(item, index) in 6" :key="index"></content-item>
  </div>
</template>

<script>
import ContentItem from "./ContentItem.vue";
export default {
  components: { ContentItem },
};
</script>

<style></style>
