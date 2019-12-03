<template>
<div>

<h1 class="is-size-1">
    Friends List
</h1>

    <div class="columns">

        <div class="column is-one-quarter">

                <p class="panel-heading">
                    Currently signed in as {{this.persona.name}}
                </p>
        </div>

        <div class="column is-one-quarter"><!--Current Friend List-->
            <div class="column">
                <ul class="panel">
                    <p class="panel-heading">
                        Your Friends List
                    </p>

                    <li v-for="(p, i) in list " :key="i" class="panel-block" >
                    <span class="panel-icon">
                    <i class="fas" aria-hidden="true"></i>
                    </span>
                    {{p.id}} : {{p.name}}
                    </li>
                </ul>
            </div>
        </div>

<div class="column is-one-half"><!--Search bar-->
<ul>


        <div class="column is-one-quarter"><!--Search bar-->
            <div class="control">
                <input class="input" type="text" v-model="idfSearch" placeholder="ID number">
            </div>

            <div class="control">
                <button @click="find" button class="button is-primary">Search</button>
            </div>
        </div>

        <div class="column is-one-quarter"><!--Add bar-->

            <div class="control">
                <input class="input" type="text" v-model="idfAdd" placeholder="ID number">
            </div>

            <div class="control">
                <button @click="add" class="button is-link">Add</button>
            </div>
        </div>

        <div class="column is-one-quarter"><!--Delete bar-->
            <div class="control">
                <input class="input" type="text" v-model="idfDel" placeholder="ID number">
            </div>

            <div class="control">
                <button @click="del" class="button is-danger">Delete</button>
            </div>
        </div>
        </ul>
</div>

</div>
</div>
</template>

<script>
import { FriendServer } from '../models/Friend';
import { User } from '../models/my-fetchProfile'
import { ProfileServer } from '../models/Profile';

export default {
  data: () => ({
    list: [],
    persona: {},
    idfSearch: null,
    idfAdd: null,
    idfDel: null,
  }),
  async created() {
    setInterval(async ()=>  this.persona = await ProfileServer.getProfile(User.User_Id), 2500);
    setInterval(async ()=>  this.list = await FriendServer.Get(User.User_Id), 2500);
  },
  methods: {

    find() {
      if (!this.idfSearch) {
        this.$toasted.show('Didnt enter a FriendID', {
          duration: 2500,
          icon: 'exclamation-circle',
        });
      } else {
          var message = FriendServer.Find(this.idfSearch).name;
          this.$toasted.show(message, {
          duration: 2500,
          icon: 'exclamation-circle'
      })}
    },

    add() {
      if (!this.idfAdd) {
        this.$toasted.show('Didnt enter a FriendID', {
          duration: 2500,
          icon: 'exclamation-circle',
        });
      } else {
        FriendServer.Add(this.persona.id, this.idfAdd);
      }
    },
    del() {
      if (!this.idfDel) {
        this.$toasted.show('Didnt enter a FriendID', {
          duration: 2500,
          icon: 'exclamation-circle',
        });
      } else {
        FriendServer.Delete(this.persona.id, this.idfDel);
      }
    },
  },

};
</script>

<style>
</style>
