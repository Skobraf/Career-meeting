<template>
    <div class="metierinfo">
        <div class="metierinfo-details" v-if="metiert.nameMetier == indice">
            <h4>{{metiert.nameMetier}}</h4>
            <hr>
            <p>{{metiert.diplomeReq}}</p>
            <hr>
            <p>{{metiert.expérience}}</p>
            <hr>
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

<style lang="scss" scoped>
    .metierinfo {
        position: relative;
        width: 250px;
        h2 {
            padding-left: 15px;
        }
    }
    .metierinfo-details {
        padding-left: 10px;
        background: #2E263E;
        border-left: 6px solid #f9be00;
        position: fixed;
        width: 288px;
        height: 370px;
        top: 166px;
        z-index: 1;
        h4 {
            margin: 10px 0;
        }
        p {
            margin: 7px 0;
            font-size: 14px;
        }
        hr {
            margin:0;
        }
    }
</style>

