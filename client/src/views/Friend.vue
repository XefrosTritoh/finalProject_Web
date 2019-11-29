<template>
<div>

<h1 class="is-size-1">
    Friends List
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

        <div class="column is-one-quarter"><!--Current Friend List-->
            <div class="column">
                <ul class="panel">
                    <p class="panel-heading">
                        Your Friends List
                    </p>
                </ul>
            </div>
        </div>


        <div class="column is-one-quarter"><!--Search bar-->

            <div class="control">
                <input class="input" type="text" placeholder="Find a Friend">
            </div>

            <div class="control">
                <button class="button is-primary">Find</button>
            </div>

        </div>

        <div class="column is-one-quarter"> <!--Mutual Friend List-->
                <ul class="panel">
                    <p class="panel-heading">
                        Mutual Friends
                    </p>
                </ul>
        </div>

    </div>
</div>
</template>

<script>
</script>

<style>
</style>
