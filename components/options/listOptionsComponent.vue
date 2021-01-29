<template>
  <v-row>
    <v-col col="12" sm="12" mb="12">
      <v-list>
        <v-list-item link v-for="item in itens" :key="item.id">
          <v-list-item-content>
            <v-list-item-title>
              <v-list-item-avatar tile>
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-avatar>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click.prevent="
            () => {
              $vuetify.theme.dark = $vuetify.theme.dark ? false : true;
            }
          "
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              <v-list-item-avatar tile>
                <v-icon>mdi-theme-light-dark</v-icon>
              </v-list-item-avatar>
              Light Mode
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      itens: [
        {
          id: "1",
          name: "Perfil",
          icon: "mdi-account",
          link: "",
        },
        {
          id: "2",
          name: "Mensagens Title",
          icon: "mdi-message-cog",
          link: "",
        },
        {
          id: "3",
          name: "Estilos de Mensagens",
          icon: "mdi-diamond-stone",
          link: "",
        },
        {
          id: "4",
          name: "Configurações de API",
          icon: "mdi-card-account-details-star",
          link: "",
        },
        // {
        //     id:"",
        //     name:"",
        //     icon: "",
        //     link: "",
        // }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>