<template>
  <div class="home">
    <Header></Header>
    <MovieList></MovieList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/header/header.component';
import MovieList from '@/components/movie-list/movie-list.component';

@Component({
  components: {
    Header,
    MovieList
  },
})
export default class Home extends Vue {}
</script>
