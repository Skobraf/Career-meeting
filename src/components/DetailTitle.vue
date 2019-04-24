<template>
    <div class="secteur-title">
        <div class="logo">
            <i class="fas fa-hotel"></i>
        </div>
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    props:['title'],
    name:'detaildTitle'
}
</script>
<style lang="scss" scoped>
    .secteur-title {
        display: flex;
        border-radius: 12px;
        width: 360px;
        height: 57px;
        margin: 0 auto;
        background: #2E263E;
        h2 {
            text-transform: uppercase;
        }
    }
    .logo {
        padding: 14px;
        border-radius: 50%;
        background: #743088;
        margin: 6px 10px;
    }
</style>

