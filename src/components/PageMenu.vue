<script>
export default {
    // props: ['title', 'links']
    props: {
        title: {
            type: String,
            required: false
        }, 
        links: Array,
        qtyFavorites: Number,
    }
}
</script>

<template>
    <div>
        <h3 v-if="title"> {{ title }} </h3>
        <ul class="menu">
            <li class="menu-item" v-for="link in links">
                <a :href="link.href">
                    {{ link.text }}
                    <span class="icon" v-if="link.icon"><font-awesome-icon :icon="link.icon" />
                        <span v-if="link.icon === 'fa-regular fa-heart'">
                            0
                        </span>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
</style>