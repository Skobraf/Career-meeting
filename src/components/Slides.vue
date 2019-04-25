<template>
    <div class="slide">
        <h2>Dans quel secteur veux-tu exercer ton futur métier?</h2>
         <img :src="'./images/'+img+'.png'" v-bind:alt="pic">
    </div>
</template>

<script>
export default {
    name: 'slides',
    props:['title','img']
}
</script>
<style lang="scss" scoped>
    h2 {
        margin-left: 20px;
        padding-left: 25px;
        &::before  {
            content: '';
            border: 2px solid #f9be00;
            margin-right: 10px;
            position: absolute;
            left: 30px;
            height: 25px;
        }
    }
    img {
        width: 200px;
    }
</style>

