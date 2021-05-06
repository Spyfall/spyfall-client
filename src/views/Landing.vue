<template>
  <div class="bg-spyfall-blue w-full h-screen justify-center items-center flex">
    <div class="flex flex-row w-1/2 bg-white rounded-lg shadow-xl">
      <div class="flex flex-col flex-1 justify-center items-center p-4">
        <div class="rounded-full w-20 h-20 bg-spyfall-yellow"></div>
        <input
          type="text"
          placeholder="Username"
          class="bg-spyfall-yellow rounded-full px-3 py-1 my-4 outline-none placeholder-gray-300
          text-white"
        />
        <router-link to="/sa"><sf-button text="PLAY"></sf-button></router-link>
      </div>
      <div class="flex flex-col flex-1 p-4 justify-around">
        <sf-button text="Find Lobby" background="spyfall-blue"></sf-button>
        <sf-button text="Create" background="spyfall-blue"></sf-button>
      </div>
    </div>
  </div>
</template>

<script>
import SfButton from '../components/SfButton.vue';

export default {
  components: { SfButton },
};
</script>

<style scoped></style>
