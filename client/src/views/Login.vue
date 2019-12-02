<template>
<div>
    <h1 class="is-size-1">
        Login
    </h1>
    <div class="columns">
        <div class="column is-one-third is-offset-one-third">
            <ul class="panel">
                <p class="panel-heading">
                    Login
                </p>
                <div class="panel-block">
                <div class="field has-addons">
                <div class="control has-icons-left has-icons-right">
                    <input v-model="id" class="input" type="text" placeholder="Your ID">
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                        </span>
                </div>
                    <div class="control">
                        <button @click="Input" class="button is-info is-rounded">Login</button>
                    </div>
                </div>
                    <p class="help is-danger"></p>
                </div>
            </ul>
        </div>
    </div>
</div>

</template>

<script>

import { ProfileServer } from '../models/Profile';

export default {
  data: () => ({
    id: null,
  }),
  methods: {
    Input() {
      if (parseInt(this.id) < 1 || !this.id) {
        this.$toasted.show('Didnt enter a valid ID number', {
          duration: 2500,
          icon: 'exclamation-circle',
        });
      } else {
        ProfileServer.login(this.id);
      }
    },
  },
};
</script>

<style lang="scss">
    .fas.fa-exclamation-triangle {
        display: none;
    }
    .is-danger {
        .fa-exclamation-triangle {
            display: inline;
            color: red;
        }
        .input {
            border-color: red;
        }
    }
</style>
