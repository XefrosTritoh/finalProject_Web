<template>
<div>
    <h1 class="is-size-1">
        Sign Up
    </h1>
    <div class="columns">
        <div class="column is-one-third is-offset-one-third">
            <ul class="panel">
                <p class="panel-heading">
                    Sign Up- Input your name
                </p>
                <div class="panel-block">
                <div class="field has-addons">
                <div class="control has-icons-left has-icons-right">
                    <input v-model="name" class="input" type="text" placeholder="Your Name">
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                        </span>
                </div>
                <ul>
                    <div class="control">
                        <button @click="signIn" class="button is-info ">Confirm</button>
                    </div>
                    <div>
                        <p> Your ID is.. {{this.newUser.id}} </p>
                    </div>
                </ul>
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
    name: null,
    alreadyMade: 0,
    newUser: {},
  }),
  methods: {
    async signIn() {
      if (parseInt(!this.name)) {
          this.$toasted.show('Didnt enter a Name', {
          duration: 2500,
          icon: 'exclamation-circle',});
        }
       else {
        this.newUser = await ProfileServer.sign(this.name);
      }
    },
  }
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
