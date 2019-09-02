<template>
  <div id="app">
    <v-app class="wf-roundedmplus1c">
      <v-toolbar flat color="transparent">
        <v-spacer></v-spacer>
        <v-btn text color="success" to="/">home</v-btn>
        <v-btn text color="success" to="/about">about</v-btn>
      </v-toolbar>
      <router-view />
    </v-app>
  </div>
</template>
