<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

        <router-link exact-active-class="active" class="navbar-item" to="/profile">
            <i class="fa fa-user fa-pull-left"></i>
            Profile
        </router-link>

        <router-link exact-active-class="active" class="navbar-item" to="/friend">
            <i class="fa fa-users fa-pull-left"></i>
            Friends
        </router-link>
                <router-link exact-active-class="active" class="navbar-item" to="/tracker">
            <i class="fa fa-compass fa-pull-left"></i>
            Tracker
        </router-link>

    </div>

    <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a class="button is-light">
                Log in
            </a>
            </div>
        </div>
    </div>

    </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
    .active {
        background-color: aliceblue;
        font-weight: bold;
    }
    .kind-of-active {
        background-color: rgb(244, 248, 252);
        font-weight: 100;
    }
</style>
