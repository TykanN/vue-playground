<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PlaylistBox
      v-for="(title, i) in playlist_array"
      :key="i"
      v-bind:title="title"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlaylistBox from "@/components/PlaylistBox.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    PlaylistBox,
  },
  data() {
    return {
      playlist_array: ["지금 뜨는 콘텐츠", "영화", "드라마", "애니"],
    };
  },
});
</script>
