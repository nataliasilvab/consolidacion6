<template>
    <v-container>
      <v-form @submit.prevent="autenticar">
        <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
        <v-text-field v-model="apellido" label="Apellido" required></v-text-field>
        <v-btn color="primary" type="submit">Ingresar</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "auth-view",
    data() {
      return {
        nombre: "",
        apellido: "",
      };
    },
    methods: {
      autenticar() {
        if (this.nombre && this.apellido) {
          this.$router.push({ name: "Admin", params: { nombre: this.nombre, apellido: this.apellido } });
        } else {
          alert("Por favor, ingrese su nombre y apellido.");
        }
      },
    },
  };
  </script>
  