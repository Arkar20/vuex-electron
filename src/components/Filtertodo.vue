<template>
    <div class="d-inline">
        <select  @change="changelimit">
            <option value="200" selected>200</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="100">100</option>
        </select>
    </div>
</template>

<script>
import {mapActions} from "vuex"
    export default {
        methods: {
            ...mapActions(['filtertodo']),
            changelimit(e) {
                let limit=e.target.options[e.target.options.selectedIndex].innerText
                this.filtertodo(limit)
           }
        },
    }
</script>

<style lang="scss" scoped>

</style>