<template>
    <section>
        <div id="top">
            <button @click="next">
                Dalej
            </button>
        </div>
        <div id="page">
            <img 
                id="p1"
                :src="imgNow"
            />
            <div id="text">
                <h1>{{ pages[pageNow].title }}</h1>
                <h2>{{ pages[pageNow].subtitle }}</h2>
                <h3>{{ pages[pageNow].desc }}</h3>
            </div>
        </div>
        <div>
            
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                pageNow: 0,
                pages: [
                    {
                        title: 'Sprawdź',
                        subtitle: 'jak czuje się twój zwierzak',
                        desc: 'Nasza aplikacja połączona z inteligentną obrożą sprawdza stan twojego zwierzaka, dzięki czemu zawsze możesz dowiedzieć się co dzieje się z twoim zwierzakiem.',
                    },
                    {
                        title: 'Dziel się',
                        subtitle: 'radami z innymi',
                        desc: 'Komentj i dziel się informacjami i poradami z innymi włascicielami zwierząt. Porównuj zebrane informacje o twoim pupilu, aby sprawdzić czy wszystko z nim dobrze.',
                    },
                    {
                        title: 'Udostępniaj',
                        subtitle: 'dane swojemu weterynarzowi',
                        desc: 'W razie problemów zdrowotnych twojego pupila możesz utworzyć raport, dzięki któremu lekarz będzie mógł określić stan twojego zwierzęcia, co pomoże w jego diagnozie.',
                    },
                ]
            }
        },
        methods: {
            next() {
                this.pageNow++;
            }
        },
        computed: {
            imgNow() {
                return "./img/welcome/" + ( this.pageNow + 1 ) + ".png";
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

    section {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans', sans-serif;
    }

    section div#top {
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    section div#top button {
        background: none;
        border: none;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        margin: 20px;
        color: #34495e;
    }

    section div#page {
        width: 100vw;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    section div#page img#p1 {
        width: 275px;
        height: 350px;
    }

    section div#page div#text {
        width: 100%;
        height: 200px;
    }

    section div#page div#text h1 {
        font-size: 30px;
        font-weight: 600;
        margin: 5px 0 5px 20px;
        color: #2ecc71;
    }

    section div#page div#text h2 {
        font-size: 24px;
        margin: 5px 0 5px 20px;
        color: #2980b9;
    }

    section div#page div#text h3 {
        width: calc(100vw - 60px);
        font-size: 16px;
        margin: 10px 0 10px 20px;
        color: #34495e;
    }
</style>
