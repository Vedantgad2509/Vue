<template>
  <div>
    <h1>Extract Metadata from URL</h1>
    <input v-model="url" placeholder="Enter URL" />
    <button @click="fetchMetadata">Fetch Metadata</button>

    <div v-if="metadata">
      <h2>Metadata</h2>
      <p><strong>Title:</strong> {{ metadata.title }}</p>
      <!-- <p><strong>Description:</strong> {{ metadata.description }}</p> -->
      <p><strong>Channel Name:</strong> {{ metadata.profileUsername }}</p>

      <img
        :src="metadata.imageSecureUrl"
        alt="Metadata Image"
        v-if="metadata.imageSecureUrl"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      metadata: null,
    };
  },
  methods: {
    async fetchMetadata() {
      const apiKey = "aeb35fee-ccfd-4af1-be43-c89354a15fac";
      try {
        const response = await fetch(
          `https://opengraph.io/api/1.1/site/${encodeURIComponent(
            this.url
          )}?app_id=${apiKey}`
        );
        const data = await response.json();
        console.log(data);

        this.metadata = data.hybridGraph;
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    },
  },
};
</script>
