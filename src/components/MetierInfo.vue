<template>
    <div>
        <div v-if="metiert.nameMetier == indice">
            <h3>{{metiert.nameMetier}}</h3>
            <p>{{metiert.diplomeReq}}</p><br>
            <p>{{metiert.expérience}}</p><br>
            <p>{{metiert.description}}</p>
        </div>
        <h2 v-else>{{metiert.nameMetier}}</h2>
    </div>
</template>

<script>
export default {
    props: ['metiert', 'indice'],
    name: 'metierDetail'

}
</script>

<style>
.active {
        color:red;
    }
</style>

