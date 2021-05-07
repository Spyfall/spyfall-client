<template>
  <sf-container>
    <div class="flex flex-col flex-1 justify-center items-center p-4">
      <div class="rounded-full w-28 h-28 bg-spyfall-yellow"></div>
      <input
        type="text"
        :value="randomUsernames[Math.floor(Math.random() * 9)]"
        class="w-full sm:w-60 2xl:w-80 bg-spyfall-yellow rounded-full px-3 py-2 my-4 text-xl outline-none placeholder-gray-200 text-white"
      />
      <sf-button @click="log()" text="PLAY"></sf-button>
    </div>
    <div class="flex flex-col flex-1 p-4 justify-around items-center">
      <sf-button
        text="Find Lobby"
        background="spyfall-blue"
        link="/rooms"
        class="w-full sm:w-60 2xl:w-80 my-4 xl:m-0"
      ></sf-button>
      <sf-button
        text="Create"
        background="spyfall-blue"
        class="w-full sm:w-60 2xl:w-80"
      ></sf-button>
    </div>
  </sf-container>
</template>

<script>
import SfButton from "../components/base/SfButton.vue";
import SfContainer from "../components/base/SfContainer.vue";

export default {
  methods: {
    log() {
      console.log("test");
    },
  },
  components: { SfButton, SfContainer },
  data() {
    return {
      randomUsernames: [
        "noodles",
        "rockbee",
        "heart",
        "rhythm",
        "cocoa",
        "carbon",
        "scarface",
        "inception",
      ],
    };
  },
};
</script>

<style scoped></style>
