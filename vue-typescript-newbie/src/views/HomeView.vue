<template>
  <div class="home">
    <div>
      {{ counter }}
      <br />
      <button @click="plus">+</button>
      <button @click="minus">-</button>
      <br />
      <br />
      <button @click="changeUser">toggle user</button>
    </div>
    {{ props.user }}
    <PlaylistBox
      v-for="(title, i) in playlist_array"
      :key="i"
      v-bind:title="title"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import PlaylistBox from "@/components/PlaylistBox.vue"; // @ is an alias to /src

const props = defineProps({
  user: String,
});

const emit = defineEmits<{
  (event: "changeUser"): void;
}>();

const playlist_array = ["지금 뜨는 콘텐츠", "영화", "드라마", "애니"];
const counter = ref(0);

function plus() {
  counter.value++;
}

function minus() {
  if (counter.value <= 0) {
    alert("더 이상 내릴 수 없습니다.");
    return;
  }
  counter.value--;
}

function changeUser() {
  emit("changeUser");
}
</script>
