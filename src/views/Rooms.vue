<template>
  <sf-container>
    <div class="flex flex-row justify-around p-4 w-full">
      <router-link to="/">geri bacak</router-link>
      <select name="" id="">
        <option value="">dropdown lang</option>
        <option value="">tr</option>
        <option value="">en</option>
      </select>
      <select name="" id="">
        <option value="">kaç spy</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <input type="text" placeholder="search" />
    </div>
  </sf-container>
</template>

<script>
import SfContainer from "../components/SfContainer.vue";
export default {
  components: { SfContainer },
};
</script>

<style></style>
