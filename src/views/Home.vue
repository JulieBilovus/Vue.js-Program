<template>
  <div class="home">
    <Header></Header>
    <MovieList></MovieList>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/header/header.component';
import MovieList from '@/components/movie-list/movie-list.component';
import Footer from '@/components/footer/footer.component';

@Component({
  components: {
    Footer,
    Header,
    MovieList
  },
})
export default class Home extends Vue {}
</script>
