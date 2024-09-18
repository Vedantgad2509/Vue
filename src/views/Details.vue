<template>
    <div v-if="error">
        {{ error }}

    </div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
  
</template>

<script>
import getPost from '../../composables/getPost';

export default {
    props:['id'],
    setup(props){
        const{post,error,load}=getPost(props.id)
        load()
        return {post,error}
    }

}
</script>

<style scoped>
.post {
  background-color: #f9f9f9;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.pre {
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  line-height: 1.6;
  color: #555;
}

.error {
  color: #d9534f;
  background-color: #f2dede;
  padding: 10px;
  border: 1px solid #ebccd1;
  border-radius: 4px;
  margin: 10px 0;
  font-weight: bold;
  font-size: 16px;
}
</style>