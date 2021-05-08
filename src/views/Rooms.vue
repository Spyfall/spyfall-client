<template>
  <sf-container>
    <div class="flex flex-row flex-wrap w-full">
      <div class="flex flex-1 items-center">
        <router-link to="/">geri bacak</router-link>
      </div>
      <div class="flex flex-row flex-1 justify-around">
        <sf-select>
          <option value="">spy</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </sf-select>
        <sf-select>
          <option value="">lang</option>
          <option value="">tr</option>
          <option value="">en</option>
        </sf-select>
      </div>
      <div class="flex flex-row flex-1 justify-end">
        <sf-input placeholder="search"></sf-input>
      </div>
    </div>
    <Content></Content>
  </sf-container>
  <!-- TODO: kullanıcı ismi nasıl geliyor sayfa değişiminde ve component yapısı nasıl olacak 
  (rooms header, rooms footer veya birden fazla yerde kullanacağım şeyler mi) -->
</template>

<script>
import SfContainer from "../components/base/SfContainer.vue";
import SfInput from "../components/base/SfInput.vue";
import SfSelect from "../components/base/SfSelect.vue";
import Content from "../components/Rooms/Content.vue";
export default {
  components: { SfContainer, SfInput, SfSelect, Content },
};
</script>

<style></style>
