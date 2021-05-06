<template>
  <div class="bg-spyfall-blue w-full h-screen justify-center items-center flex">
    <div class="flex flex-row w-1/3 bg-white rounded-lg shadow-xl">
      <div class="flex flex-col flex-1 justify-center items-center p-4">
        <div class="rounded-full w-28 h-28 bg-spyfall-yellow"></div>
        <input
          type="text"
          placeholder="Username"
          class="bg-spyfall-yellow rounded-full px-3 py-2 my-4 text-xl outline-none placeholder-gray-200 text-white w-full"
        />
        <sf-button text="PLAY"></sf-button>
      </div>
      <div class="flex flex-col flex-1 p-4 justify-evenly">
        <sf-button text="Find Lobby" background="spyfall-blue"></sf-button>
        <sf-button text="Create" background="spyfall-blue"></sf-button>
      </div>
    </div>
  </div>
</template>

<script>
import SfButton from "../components/SfButton.vue";

export default {
  components: { SfButton },
};
</script>

<style scoped></style>
