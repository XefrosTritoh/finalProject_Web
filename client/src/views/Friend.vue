<template>
<div>

<h1 class="is-size-1">
    Friends List
</h1>

    <div class="columns">

        <div class="column is-one-quarter">

                <p class="panel-heading">
                    Currently signed in as..
                </p>
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

<div class="column is-one-half"><!--Search bar-->
<ul>


        <div class="column is-one-quarter"><!--Search bar-->
            <div class="control">
                <input class="input" type="text" placeholder="ID number">
            </div>

            <div class="control">
                <button class="button is-primary">Search</button>
            </div>
        </div>

        <div class="column is-one-quarter"><!--Add bar-->

            <div class="control">
                <input class="input" type="text" placeholder="ID number">
            </div>

            <div class="control">
                <button class="button is-link">Add</button>
            </div>
        </div>

        <div class="column is-one-quarter"><!--Delete bar-->
            <div class="control">
                <input class="input" type="text" placeholder="ID number">
            </div>

            <div class="control">
                <button class="button is-danger">Delete</button>
            </div>
        </div>
        </ul>
</div>

</div>
</div>
</template>

<script>
</script>

<style>
</style>
