<template>
  <div class="content mm-post-view">
    <div class="section">
      <div class="back-btn is-pulled-left">
        <transition name="slide-fade">
          <router-link :to="{ name: 'BlogPosts' }" class="button mm-btn">Back</router-link>
        </transition>
      </div>
      <div class="mm-post-title-container">
        <h1 class="mm-post-title">{{ post.title }}</h1>
      </div>
    </div>
    <div class="section is-vertical-center is-justified">
      <div class="mm-author-info">
        <div>
          <strong>
            Published on:
          </strong>
          <i>{{ post.publishDate }}</i>
        </div>
        <div>
          <strong>
            Written by:
          </strong>
          <i v-for="(author, index) in post.authors">
            {{ author.name }}<i v-if="index +1 < post.authors.length"> &</i>
          </i>
        </div>
      </div>
      <div class="mm-author-pictures">
        <div class="mm-picture" v-for="author of post.authors">
          <div class="image is-128x128">
            <img :src="author.image.url" :alt="author.name">
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-html="post.body">
    </div>
    <div class="section">
      <div class="back-btn is-pulled-left">
        <transition name="slide-fade">
          <router-link :to="{ name: 'BlogPosts' }" class="button mm-btn">Back</router-link>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "BlogPost",
    data() {
      return {
        loading: false,
        post: [],
        errors: [],
      }
    },

    mounted() {
      this.loading = true;
      axios
        .get('https://voorhoede-colibri-api.now.sh/api/v1/posts/' + this.$route.params.slug)
        .then(response => (this.post = response.data))
        .catch(e => {
          this.errors.push(e);
        });
    },
  }
</script>

<style scoped>
  .mm-post-view {
    text-align: left;
  }

  .mm-btn {
    background-color: #EDDD3E;
    border: none;
  }

  .mm-post-title {
    text-align: center;
  }

  .mm-picture {
    margin: 0 10px;
    display: inline-block;
  }
</style>
