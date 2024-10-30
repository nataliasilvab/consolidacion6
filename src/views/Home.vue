<template>
  <v-container>
    <div>
      <h1 class="display-2  mb-4 font-weight-bold">Lista de juegos disponibles</h1>
      <v-row>
        <v-col v-for="game in games" :key="game.id" cols="12" md="4">
          <v-card :loading="loading">
            <template v-slot:progress>
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img :src="game.background_image" height="250"></v-img>
            <v-card-title>{{ game.name }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="game.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="grey--text ms-4">
                  {{ game.rating }} ({{ game.reviews_count }})
                </div>
              </v-row>
              <div class="my-4 text-subtitle-1">
                {{ game.genres.map((genre) => genre.name).join(", ") }}
              </div>
              <div>{{ game.description }}</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-title>Release Date</v-card-title>
            <v-card-text>{{ game.released }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" text @click="opinar(game.id)">Opinar</v-btn>
              <v-icon @click="likeGame" color="red">mdi-heart</v-icon>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home-view",
  computed: {
    ...mapGetters(["games"]),
  },
  created() {
    this.$store.dispatch("fetchGames");
  },
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    games() {
      this.loading = false;
    },
  },
  methods: {
    opinar(gameId) {
      this.$router.push({ name: "Opiniones", params: { gameId } });
    },
    methods: {
  opinar(gameId) {
    this.$router.push({ name: "Opiniones", params: { gameId } });
  },
  likeGame() {
    this.$router.push({ name: 'Admin' });
  },
},

  },
};
</script>
