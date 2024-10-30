<template>
  <div>
    <v-container>
      <h1>Escribe tu opinion para el juego: {{ gameName }}</h1>
      <v-form @submit.prevent="agregarOpinion">
        <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
        <v-textarea v-model="texto" label="Opinión" required></v-textarea>
        <v-btn color="primary" type="submit">{{
          editando ? "Actualizar" : "Agregar"
        }}</v-btn>
      </v-form>
      <h1 class="text-center mb-4 font-weight-bold">A continuacion podras ver tu opinion</h1>
      <div v-if="opiniones.length === 0">No existen opiniones para mostrar.</div>
      <div v-else>
        <div v-for="(opinion, index) in opiniones" :key="index">
          <p>{{ opinion.nombre }}: {{ opinion.texto }}</p>
          <v-btn color="yellow" @click="editarOpinion(index)">Editar</v-btn>
          <v-btn color="red" @click="eliminarOpinion(index)">Eliminar</v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "opiniones-view",
  props: ["gameId"],
  data() {
    return {
      gameName: "",
      opiniones: [],
      nombre: "",
      texto: "",
      editando: false,
      indexEditando: null,
    };
  },
  created() {
    this.fetchGameName();
    this.fetchOpiniones();
  },
  methods: {
    fetchGameName() {
      // Aquí puedes hacer una llamada a la API para obtener el nombre del juego usando gameId
      // Por simplicidad, vamos a asignar un nombre estático
      this.gameName = "Nombre del Juego";
    },
    fetchOpiniones() {
      // Aquí puedes cargar las opiniones desde una base de datos o API
      // Por simplicidad, vamos a usar un array vacío
      this.opiniones = [];
    },
    agregarOpinion() {
      if (this.editando) {
        this.opiniones[this.indexEditando] = {
          nombre: this.nombre,
          texto: this.texto,
        };
        this.editando = false;
        this.indexEditando = null;
      } else {
        this.opiniones.push({ nombre: this.nombre, texto: this.texto });
      }
      this.nombre = "";
      this.texto = "";
    },
    editarOpinion(index) {
      this.nombre = this.opiniones[index].nombre;
      this.texto = this.opiniones[index].texto;
      this.editando = true;
      this.indexEditando = index;
    },
    eliminarOpinion(index) {
      this.opiniones.splice(index, 1);
    },
  },
};
</script>
