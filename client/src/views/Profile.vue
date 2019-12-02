<template>
<div>

<h1 class="is-size-1">
    Welcome {{this.persona.name}}
</h1>

    <div class="columns">

        <div class="column is-one-quarter">

         <router-link exact-active-class="active" class="button is-primary" to="/friend">
            <i class="fa fa-users fa-pull-left"></i>
            Go to Friends list
        </router-link>
                <router-link exact-active-class="active" class="button is-link" to="/tracker">
            <i class="fa fa-compass fa-pull-left"></i>
            See What other people are saying
        </router-link>
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
    setInterval(async ()=>  this.persona = await ProfileServer.getProfile(User.User_Id), 2500);
  },
  methods: {
    },

};
</script>

<style>
</style>
