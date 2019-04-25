<template>
    <div class="secteur">
        <ul>
            <li v-for="secteur, index in secteurs">
                <router-link
                    :to="{ name: 'secteur', params: { secteurId: index }}">
                    {{secteur.nameSecteur}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'secteur',
    computed: {
        secteurs() {
            return this.$store.state.secteur;
        }
    }
}
</script>
