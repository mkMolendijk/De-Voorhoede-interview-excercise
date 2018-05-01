<template>
  <div class="section">
    <article class="message is-danger" v-if="errors && errors.length">
      <div class="message-header">
        <p>Error</p>
      </div>
      <div class="message-body" v-for="error of errors">
        {{error.message}}
      </div>
    </article>

    <div class="columns is-multiline" v-else-if="posts && posts.length">
      <div class="column is-half" v-for="post of posts">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <router-link :to="{ name: 'BlogPost', params: { slug: post.slug }}">
                  <p class="title is-4">
                    {{post.title}}
                  </p>
                </router-link>
                <p class="subtitle is-6">{{post.social.description}}</p>
              </div>
            </div>
            <div class="content is-vertical-center is-justified">
              <div class="mm-post-info">
                <div class="mm-publish-date">
                  <strong>Published on:</strong>
                  <i>{{post.publishDate}}</i>
                </div>
                <div class="mm-written-by">
                  <strong>Written by:</strong>
                  <i v-for="(author, index) in post.authors">
                    {{ author.name }}<i v-if="index +1 < post.authors.length"> &</i>
                  </i>
                </div>
              </div>
              <div class="mm-author-pictures">
                <div class="mm-picture" v-for="author of post.authors">
                  <figure class="image is-64x64">
                    <img :src="author.image.url" :alt="author.name">
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "BlogPosts",
    data() {
      return {
        posts: [],
        errors: [],
      }
    },

    mounted() {
      axios
        .get('https://voorhoede-colibri-api.now.sh/api/v1/posts')
        .then(response => (this.posts = response.data))
        .catch(e => {
          this.errors.push(e);
        });
    }
  };
</script>

<style scoped>
  .card {
    height: 100%;
  }

  .media-content {
    min-height: 150px;
  }

  .title {
    margin-bottom: 10px;
  }

  .content figure {
    margin: 0;
  }

  .mm-post-info {
    text-align: left;
  }

  .mm-picture {
    margin: 0 5px;
    display: inline-block;
  }
</style>
