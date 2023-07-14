<template>
  <div class="post">
    <header class="post_header">
      <p class="post_meta">
        <span class="post_date">{{ date_for_html }}</span>
        •
        <span class="post_tag">{{ tag }}</span>
      </p>
      <h4>
        <a :href="post_url" class="post_title" :title="title">
          {{ title }}
        </a>
      </h4>
    </header>

    <div class="post_description">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    post_url: String,
    title: String,
    description: String,
    tag: String,
    create_date: Date,
    post_img: {
      type: String,
      required: false
    }
})

const date_for_html = computed(() => {
  let date = new Date(props.create_date);
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`
})
</script>

<style scoped>
.post {
  padding-bottom: 30px;
  padding-right: 50px;
  min-width: 300px;
}

.post_meta {
  font-size: 13px;
  font-weight: bold;
  margin: 1.2em 0;
  word-spacing: 0.05em;
  line-height: 1.6em;
}

.post_date {
  color: #8d7edc;
}

.post_tag {
  text-transform: uppercase;
  color: #F5A623;
}

.post_title {
  color: #646cff;
  font-size: 1.25rem;
  margin: 0.0625rem 0 0.5rem 0;
  margin-left: 10px;
}

.post_tile :hover {
  color: #5a92a6;
}

.post_description {
  margin: 0.0625rem 0 0.5rem 0;
  margin-left: 10px;
  font-family: "Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: normal;
  color: var(--vp-c-text-1);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-size: 15px;
}
</style>