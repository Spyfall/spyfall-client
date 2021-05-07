<template>
  <sf-container>
    <div class="flex flex-row p-4 w-full">
      <router-link to="/" class="flex-1">geri bacak</router-link>
      <div class="flex flex-row flex-1 justify-around">
        <select name="" id="">
          <option value="">lang</option>
          <option value="">tr</option>
          <option value="">en</option>
        </select>
        <select name="" id="">
          <option value="">kaç spy</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div class="flex flex-row flex-1 justify-end">
        <sf-input placeholder="search"></sf-input>
      </div>
    </div>
  </sf-container>
</template>

<script>
import SfContainer from "../components/base/SfContainer.vue";
import SfInput from "../components/base/SfInput.vue";
export default {
  components: { SfContainer, SfInput },
};
</script>

<style></style>
