<template>
  <div class="card">
    <div class="card-body">
      <div class="form-group">
        <label for="userid">아이디</label>
        <input type="text" class="form-control" id="userid" v-model="userid" />
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
    </div>
    <div class="card-footer text-right">
      <button type="button" class="btn btn-dark" @click="login">로그인</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as authApi from "@/api/auth";

var userid = "";
var password = "";

function login() {
  authApi
    .login(userid, password)
    .then((response) => {
      console.log(response.data.token);
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
