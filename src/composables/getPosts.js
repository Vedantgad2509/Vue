import { ref } from "vue";

const usePosts = (id = null) => {
  const posts = ref([]);
  const post = ref(null);
  const error = ref(null);


  const load = async () => {
    try {
      let url = 'http://localhost:3000/posts';
      if (id) {
        url += `/${id}`;
      }

      let data = await fetch(url);
      if (!data.ok) {
        throw Error(id ? 'Post not found' : 'No data available');
      }

      const result = await data.json();
      
  
      if (id) {
        post.value = result;
      } else {
        posts.value = result;
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  
  return { posts, post, error, load };
};

export default usePosts;
