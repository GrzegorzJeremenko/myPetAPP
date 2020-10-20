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
        <div id="bottom">
            <div class="mid"></div>
            <div class="mid">
                <i 
                    class="icon" 
                    v-if="pageNow == 0"
                >
                    &#xf111;
                </i>
                <i 
                    class="icon" 
                    v-else
                >
                    &#xf10c;
                </i>
                <i 
                    class="icon" 
                    v-if="pageNow == 1"
                >
                    &#xf111;
                </i>
                <i 
                    class="icon" 
                    v-else
                >
                    &#xf10c;
                </i>
                <i 
                    class="icon" 
                    v-if="pageNow == 2"
                >
                    &#xf111;
                </i>
                <i 
                    class="icon" 
                    v-else
                >
                    &#xf10c;
                </i>
            </div>
            <div 
                class="mid"
                style="justify-content: flex-end;"
            >
                <img src="../assets/logo.png" />
            </div>
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
                if(this.pageNow < 2) {
                    document.getElementById('page').style.opacity = "0";
                    setTimeout((scope) => { scope.pageNow++; }, 250, this);

                    setTimeout(() => { document.getElementById('page').style.opacity = "1"; }, 300);
                } else {
                    this.$router.push('/login');
                }
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
    section {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    section div#top {
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    section div#bottom {
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    section div#bottom div.mid {
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #34495e;
    }

    section div#bottom div.mid img {
        width: 60px;
        height: 60px;
        margin: 0 10px 0 0;
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
        transition: ease opacity 250ms;
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
