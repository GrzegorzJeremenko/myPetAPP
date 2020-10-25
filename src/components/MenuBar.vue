<template>
    <section>
        <div
            v-for="option in options"
            v-on:click="change(option.pageName, option.id)"
            :key="option.id"
        >
            <i 
                class="icon"
                :style="{
                    color: option.select ? '#8e44ad' : '#7f8c8d'
                }"
            >
                {{ displayIcon(option.icon) }}
            </i>
            <h1
                :style="{
                    color: option.select ? '#8e44ad' : '#7f8c8d'
                }"
            >
                {{ option.name }}
            </h1>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'MenuBar',
    data() {
        return {
            options: [
                {
                    id: 0,
                    name: 'Start',
                    pageName: '/',
                    icon: '&#xe800;',
                    select: true,
                },
                {
                    id: 1,
                    name: 'Pupile',
                    pageName: '/mypets',
                    icon: '&#xf1b0;',
                    select: false,
                },
                {
                    id: 2,
                    name: 'Synchronizacja',
                    pageName: '/',
                    icon: '&#xe803;',
                    select: false,
                },
                {
                    id: 3,
                    name: 'Ustawienia',
                    pageName: '/settings',
                    icon: '&#xe802;',
                    select: false,
                },
            ]
        }
    },
    methods: {
        displayIcon(str) {
            let parser = new DOMParser();
            let dom = parser.parseFromString('<!doctype html><body>' + str, 'text/html');
            return dom.body.textContent;
        },
        change(pageName, id) {
            if(id != 2) {
                for(let option of this.options) option.select = false;
                this.options[id].select = true;
                this.$router.push(pageName);
            } else {
                document.location.reload(true);
            }
        }
    }
}
</script>

<style scoped>
    section {
        position: fixed;
        top: calc(100% - 60px);
        width: 100%;
        height: 60px;
        -webkit-box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.75);
        z-index: 999;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #fff;
    }

    div {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    i {
        width: 20px;
        height: 20px;
        font-size: 20px;
        transition: ease color 250ms;
    }

    h1 {
        font-size: 12px;
        margin: 5px 0 0 0;
        transition: ease color 250ms;
    }
</style>
