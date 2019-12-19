<template>
<div>

<h1 class="is-size-1">
    Tracker info
</h1>

    <div class="columns">

        <div class="column is-one-quarter">

            <ul class="panel">
                <p class="panel-heading">
                    Currently signed in as {{this.persona.name}}
                </p>
            </ul>
        </div>

        <div class="column is-one-quarter"><!--List of Recent Tracks-->
            <div class="column">
                <ul class="panel">
                    <p class="panel-heading">
                        Recent
                    </p>

                    <li v-for="(p, i) in posts " :key="i" class="panel-block" >
                    <span class="panel-icon">
                    <i class="fas" aria-hidden="true"></i>
                    </span>
                    {{p.name}} <p> : </p> {{p.msg}}
                </li>

                </ul>
            </div>
        </div>


        <div class="column is-one-quarter"><!--Add bar-->

        <div class="control">
            <p>Name: {{this.persona.name}} </p>
        </div>

        <div class="control">
            <p>Message:</p>
        <input class="input is-rounded" v-model="Message"  type="text" id="Message">
        </div>

            <div class="column is-one-quarter">
                <button @click="addData" class="button is-info is-rounded">Add</button>
            </div>
        </div>



        <div class="column is-one-quarter">
        <p>Find a recent message by name</p>
        <v-select :options="['Xefros' , 'Joey', 'Jude', 'Tetrarch']" v-model="input" @input="getData"></v-select>
        <p> {{last.input}} </p>
        </div>

    </div>
</div>
</template>


<script>
import { TrackServer } from '../models/Tracker';
import { User } from '../models/my-fetchProfile'
import { ProfileServer } from '../models/Profile';

export default {
  data: () => ({
    posts: [],
    persona: {},
    last: {},
    Message: '',
    input: '',
  }),
  async created() {
    setInterval(async ()=>  this.posts = await TrackServer.getTracks(), 2500);
    setInterval(async ()=>  this.persona = await ProfileServer.getProfile(User.User_Id), 2500);
  },
  methods: {
    addData() {
      if (!this.Message) {
        this.$toasted.show('Didnt enter a Message', {
          duration: 2500,
          icon: 'exclamation-circle',
        });
      } else {
        const input = { name: this.persona.name, msg: this.Message };
        TrackServer.addToTracker(input);
      }
    },
    async getData(){
      this.last = await TrackServer.getTracksDy(this.input)
    }
  },
};
</script>

<style>
</style>
