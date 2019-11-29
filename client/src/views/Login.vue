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
                    <input v-model="name" class="input" type="text" placeholder="Your ID">
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                        </span>
                </div>
                    <div class="control">
                        <a class="button is-info" @click.prevent="Input">
                            Login
                        </a>
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
    name: '',
  }),
  methods: {
    Input() {
      ProfileServer.Login();
      console.log(this.name);
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
