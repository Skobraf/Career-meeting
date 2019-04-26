<template>
    <div class="metier">
        <div class="metier-details" v-if="metiert.nameMetier == indice">
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
    .metier {
        position: relative;
        width: 250px;
    }
    .metier-details {
        padding-left: 10px;
        background: #2E263E;
        border-left: 6px solid #f9be00;
        position: fixed;
        width: 288px;
        top: 166px;
        z-index: 1;
    }
</style>

