<template>
    <div class="closeButton">
        <button :class="{'action': current === index, 'firstBorder': index === 0, 'lastBorder': index ===  list.length - 1 }" v-for="(item, index) in list" :key="index" @click="closeItem(index)">{{item}}</button>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default () { 
                return []
            }
        }
    },
    data() {
        return {
            current: 0
        };
    },

    methods: {
        closeItem (idx) {
           this.current = idx
        }
    },
};
</script>

<style lang="scss" scoped>
.closeButton {
    height: 4rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    button {
        min-width: 3rem;
        height: 2rem;
        padding: .5rem;
        background: #fff;
        border: 1px solid #ccc;
        border-collapse:collapse;
        margin-left: -1px;
        margin-bottom: .2rem;
    }
    .action {
        border: 1px solid #61a5e8 !important;
        color: #61a5e8;
        z-index: 1;
    }
    .firstBorder {
        border-radius: 5px 0 0 5px;
    }
    .lastBorder {
        border-radius: 0 5px 5px 0;
    }
}
</style>