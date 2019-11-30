<template>
<div>

<h1 class="is-size-1">
    Tracker info
</h1>

    <div class="columns">

        <div class="column is-one-quarter">

            <ul class="panel">
                <p class="panel-heading">
                    Currently signed in as..
                </p>

            <figure class="image is-128x128">
                <img src="">
            </figure>
            </ul>
        </div>

        <div class="column is-one-quarter"><!--List of Recent Tracks-->
            <div class="column">
                <ul class="panel">
                    <p class="panel-heading">
                        Recent Tracks from you and your friends
                    </p>

                    <li v-for="(p, i) in posts.Tracker " :key="i" class="panel-block" >
                    <span class="panel-icon">
                    <i class="fas" aria-hidden="true"></i>
                    </span>
                    {{p.name}} <p> : </p> {{p.msg}}
                </li>

                </ul>
            </div>
        </div>


        <div class="column is-one-quarter"><!--Search bar-->

        <div class="control">
            <p>Name:</p>
        <input class="input is-rounded" type="text" v-model="Name" id="Name" required/>
        </div>

        <div class="control">
            <p>Message:</p>
        <input class="input is-rounded" type="text" v-model="Message" id="Message">
        </div>

            <div class="column is-one-quarter">
                <button @click="addData" class="button is-info is-rounded">Add</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { TrackServer } from '../models/Tracker';

export default {
  data: () => ({
    posts: [],
    name: '',
    msg: '',
    Name: '',
    Message: '',
  }),
  async created() {
    setInterval(async () => this.posts === await TrackServer.getTracks(), 2500);
  },
  methods: {
    addData() {
      if (!this.Name || !this.Message) {
        this.$toasted.show('Didnt enter a Name and a Message', {
          duration: 2500,
          icon: 'exclamation-circle',
        });
      } else {
        const name = document.getElementById('Name').value;
        const msg = document.getElementById('Message').value;
        const input = { name, msg };
        TrackServer.addToTracker(input);
      }
    },
  },

};
</script>

<style>
</style>
