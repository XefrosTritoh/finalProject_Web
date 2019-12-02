<template>
<div>

<h1 class="is-size-1">
    Welcome {{this.persona.name}}
</h1>

    <div class="columns">

        <div class="column is-one-quarter">

          <a class="button is-primary" a href="/friend">View Friend list</a>

        </div>

        <div class="column is-one-quarter">
          <a class="button is-info" a href="/tracker">See what others are saying </a>
        </div>





  </div>
</div>
</template>

<script>
import { ProfileServer } from '../models/Profile';
import { User } from '../models/my-fetchProfile';

export default {
  data: () => ({
    persona: {},
  }),
  async created() {
    setInterval(async ()=>  this.persona == await ProfileServer.getProfile(User.User_Id), 2500);
  },
  methods: {
    },

};
</script>

<style>
</style>
