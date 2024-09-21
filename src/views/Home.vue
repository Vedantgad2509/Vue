<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <post-list :posts="posts" />
  </div>
</template>

<script setup>
import PostList from "@/components/PostList.vue";
import { ref } from "vue";
import getPosts from "@/composables/getPosts";
import { onMounted } from "vue";

const { posts, error, load } = getPosts();

onMounted(async () => {
  await load();
});
</script>
