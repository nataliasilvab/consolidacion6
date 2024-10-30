<template>
    <div>
      <input v-model="firstName" placeholder="Nombre" />
      <input v-model="lastName" placeholder="Apellido" />
      <button @click="submit">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'admin-view',
    data() {
      return {
        firstName: '',
        lastName: ''
      };
    },
    methods: {
      submit() {
        if (this.firstName && this.lastName) {
          // Lógica para mostrar la información
          console.log('Nombre:', this.firstName, 'Apellido:', this.lastName);
        } else {
          alert('Por favor, ingrese nombre y apellido.');
        }
      }
    }
  };
  </script>
  