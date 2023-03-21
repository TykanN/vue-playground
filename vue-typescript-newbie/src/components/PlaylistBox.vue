<template>
  <div class="playlist-box">
    <div class="title-area">
      <h1>{{ title }}</h1>
    </div>

    <div class="video-card"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlaylistBox",
  props: {
    title: String,
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
h1 {
  color: #000;
  font-size: 20px;
  font-weight: bold;
}
.video-card {
  width: 100px;
  height: 200px;
  margin: 20px;
  background-color: red;
}

.title-area {
  text-align: left;
}
</style>
