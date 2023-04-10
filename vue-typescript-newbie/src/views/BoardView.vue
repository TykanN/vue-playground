<template>
  <div class="card">
    <div class="card-body">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" class="form-control" id="title" v-model="title" />
        <div
          v-if="errors.validations.value.title !== undefined"
          class="alert alert-danger"
        >
          {{ errors.validations.value.title }}
        </div>
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea
          class="form-control"
          id="content"
          rows="10"
          v-model="content"
        />
        <div
          v-if="errors.validations.value.content !== undefined"
          class="alert alert-danger"
        >
          {{ errors.validations.value.content }}
        </div>
      </div>
    </div>
    <div class="card-footer text-right">
      <button type="button" class="btn btn-dark" @click="write">
        게시글 작성
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import * as boardApi from "@/api/board";
import { useErrorStore } from "@/store/error";

let title = "";
let content = "";

let errors = storeToRefs(useErrorStore());
function write() {
  boardApi
    .store(title, content)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}
</script>
