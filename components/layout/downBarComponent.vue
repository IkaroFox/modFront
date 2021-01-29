<template>
  <v-bottom-navigation v-model="value" shift>
    <v-btn :to="{ name: link.link }" v-for="link in links" :key="link.name">
      <span>{{ link.name }}</span>

      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "Home",
        icon: "mdi-home",
        link: "home",
      },
      {
        name: "Chat",
        icon: "mdi-chat",
        link: "chat",
      },
      {
        name: "Arquivos",
        icon: "mdi-file",
        link: "files",
      },
      {
        name: "Opções",
        icon: "mdi-cog",
        link: "config",
      },
    ],
    value: 1,
  }),
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>