<template>
  <div id="app">
    <v-app>
      <v-toolbar flat color="transparent">
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/">home</v-btn>
        <v-btn text color="primary" to="/about">about</v-btn>
      </v-toolbar>
      <router-view />
    </v-app>
  </div>
</template>
