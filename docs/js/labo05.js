const Grid = Vue.component('Grid', {
    template: `
    <div class="row">
            <div class="col s12 l2">
                <form action="#">
                    <p>
                        <label>
                            <input v-model="waterfilter" type="checkbox" value="water" class="filled-in" checked="checked" @change="isCardSet"/>
                            <span>Water</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input v-model="treesfilter" type="checkbox" value="trees" class="filled-in" checked="checked" @change="isCardSet"/>
                            <span>Trees</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input v-model="mountainsfilter" type="checkbox" value="mountains" class="filled-in" checked="checked" @change="isCardSet"/>
                            <span>Mountains</span>
                        </label>
                    </p>
                </form>
            </div>
            <div class="col s12 l9">
                <div v-cloak v-for="card in cards">
                    <div v-if="card.isSet" class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=card.img>
                                <span class="card-title">{{card.title}}</span>
                                <a v-on:click="toggleFav(card.name)" class="btn-floating halfway-fab waves-effect waves-light red">
                                    <i v-if="card.isFav" class="material-icons">favorite_border</i>
                                    <i v-else class="material-icons">add</i>
                                </a>
                            </div>
                            <div class="card-content">
                                <p>{{card.content}}</p>
                                <input v-model=card.title>  
                                <p><router-link v-bind:to="'/'+card.name">view detals</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    , data() {
        return {
            filters: ["water", "trees", "mountains"],
            waterfilter: true,
            treesfilter: true,
            mountainsfilter: true,
            cards: [
                {
                    name: "card01",
                    title: "card01",
                    img: "images/foto01.jpg",
                    isSet: true,
                    water: true,
                    trees: false,
                    mountains: true,
                    isFav: true,
                    content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                },
                {
                    name: "card02",
                    title: "card02",
                    img: "images/foto02.jpg",
                    isSet: true,
                    water: true,
                    trees: true,
                    mountains: false,
                    isFav: false,
                    content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                },
                {
                    name: "card03",
                    title: "card03",
                    img: "images/foto03.jpg",
                    isSet: true,
                    water: true,
                    trees: false,
                    mountains: true,
                    isFav: false,
                    content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                },
                {
                    name: "card04",
                    title: "card04",
                    img: "images/foto04.jpg",
                    isSet: true,
                    water: true,
                    trees: true,
                    mountains: true,
                    isFav: false,
                    content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                },
                {
                    name: "card05",
                    title: "card05",
                    img: "images/foto05.jpg",
                    isSet: true,
                    water: false,
                    trees: true,
                    mountains: true,
                    isFav: false,
                    content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                },
                {
                    name: "card06",
                    title: "card06",
                    img: "images/foto06.jpg",
                    isSet: true,
                    water: false,
                    trees: true,
                    mountains: false,
                    isFav: false,
                    content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                },
                {
                    name: "card07",
                    title: "card07",
                    img: "images/foto07.jpg",
                    isSet: true,
                    water: true,
                    trees: false,
                    mountains: true,
                    isFav: false,
                    content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                },
                {
                    name: "card08",
                    title: "card08",
                    img: "images/foto08.jpg",
                    isSet: true,
                    water: false,
                    trees: true,
                    mountains: false,
                    isFav: false,
                    content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                },
                {
                    name: "card09",
                    title: "card09",
                    img: "images/foto09.jpg",
                    isSet: true,
                    water: false,
                    trees: false,
                    mountains: true,
                    isFav: false,
                    content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                },
            ]
        }
    },
    methods: {
        toggleFav: function (cardname, e) {
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i].name == cardname) {
                    this.cards[i].isFav = !this.cards[i].isFav;
                    return;
                }
            }
        },
        isCardSet: function (e) {
            for (var i = 0; i < this.cards.length; i++) {
                if ((this.cards[i].water && this.waterfilter) || (this.cards[i].trees && this.treesfilter) || (this.cards[i].mountains && this.mountainsfilter)) {
                    this.cards[i].isSet = true;

                }
                else {
                    this.cards[i].isSet = false;
                }
            }
        }
    }
});

const Card01 = Vue.component('Card01', {
    template: `
            <div>
                <div v-cloak>
                    <div>
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=img>                               
                                <p v-if="isFav">Card added to favourites</p><p v-else>Card not added to favourites</p>
                            </div>
                            <div class="card-content">
                                <p>{{content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            name: "card01",
            title: "card01",
            img: "images/foto01.jpg",
            water: true,
            trees: false,
            mountains: true,
            isFav: true,
            content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
    }
});
const Card02 = Vue.component('Card02', {
    template: `
            <div class="col s12 l9">
                <div v-cloak>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=img>
                                <p v-if="isFav">Card added to favourites</p><p v-else>Card not added to favourites</p>
                            </div>
                            <div class="card-content">
                                <p>{{content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            name: "card02",
            title: "card02",
            img: "images/foto02.jpg",
            water: true,
            trees: false,
            mountains: true,
            isFav: false,
            content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
    }
});
const Card03 = Vue.component('Card03', {
    template: `
            <div class="col s12 l9">
                <div v-cloak>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=img>
                                
                                <p v-if="isFav">Card added to favourites</p><p v-else>Card not added to favourites</p>
                            </div>
                            <div class="card-content">
                                <p>{{content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            name: "card03",
            title: "card03",
            img: "images/foto03.jpg",
            water: true,
            trees: false,
            mountains: true,
            isFav: false,
            content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
    }
});
const Card04 = Vue.component('Card04', {
    template: `
            <div class="col s12 l9">
                <div v-cloak>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=img>
                                
                                <p v-if="isFav">Card added to favourites</p><p v-else>Card not added to favourites</p>
                            </div>
                            <div class="card-content">
                                <p>{{content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            name: "card04",
            title: "card04",
            img: "images/foto04.jpg",
            water: true,
            trees: false,
            mountains: true,
            isFav: false,
            content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
    }
});
const Card05 = Vue.component('Card05', {
    template: `
            <div class="col s12 l9">
                <div v-cloak>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=img>
                                
                                <p v-if="isFav">Card added to favourites</p><p v-else>Card not added to favourites</p>
                            </div>
                            <div class="card-content">
                                <p>{{content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            name: "card05",
            title: "card05",
            img: "images/foto05.jpg",
            water: true,
            trees: false,
            mountains: true,
            isFav: false,
            content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
    }
});
const Card06 = Vue.component('Card06', {
    template: `
            <div class="col s12 l9">
                <div v-cloak>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=img>
                                
                                <p v-if="isFav">Card added to favourites</p><p v-else>Card not added to favourites</p>
                            </div>
                            <div class="card-content">
                                <p>{{content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            name: "card06",
            title: "card06",
            img: "images/foto06.jpg",
            water: true,
            trees: false,
            mountains: true,
            isFav: false,
            content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
    }
});
const Card07 = Vue.component('Card07', {
    template: `
            <div class="col s12 l9">
                <div v-cloak>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=img>
                                
                                <p v-if="isFav">Card added to favourites</p><p v-else>Card not added to favourites</p>
                            </div>
                            <div class="card-content">
                                <p>{{content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            name: "card07",
            title: "card07",
            img: "images/foto07.jpg",
            water: true,
            trees: false,
            mountains: true,
            isFav: false,
            content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
    }
});
const Card08 = Vue.component('Card08', {
    template: `
            <div class="col s12 l9">
                <div v-cloak>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=img>
                                
                                <p v-if="isFav">Card added to favourites</p><p v-else>Card not added to favourites</p>
                            </div>
                            <div class="card-content">
                                <p>{{content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            name: "card08",
            title: "card08",
            img: "images/foto08.jpg",
            water: true,
            trees: false,
            mountains: true,
            isFav: false,
            content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
    }
});
const Card09 = Vue.component('Card09', {
    template: `
            <div class="col s12 l9">
                <div v-cloak>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image">
                                <img v-bind:src=img>
                                
                                <p v-if="isFav">Card added to favourites</p><p v-else>Card not added to favourites</p>
                            </div>
                            <div class="card-content">
                                <p>{{content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            name: "card09",
            title: "card09",
            img: "images/foto09.jpg",
            water: true,
            trees: false,
            mountains: true,
            isFav: false,
            content: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        }
    }
});

const routes = [
    { path: '/overview', component: Grid },
    { path: '/', component: Grid },
    { path: '/card01', component: Card01 },
    { path: '/card02', component: Card02 },
    { path: '/card03', component: Card03 },
    { path: '/card04', component: Card04 },
    { path: '/card05', component: Card05 },
    { path: '/card06', component: Card06 },
    { path: '/card07', component: Card07 },
    { path: '/card08', component: Card08 },
    { path: '/card09', component: Card09 }
]

const router = new VueRouter({
    routes
});


var myApp = new Vue({
    el: '#app',
    router,
    data: {

    },
    methods: {
        toggleFav: function (cardname, e) {
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i].name == cardname) {
                    this.cards[i].isFav = !this.cards[i].isFav;
                    return;
                }
            }
        },
        isCardSet: function (e) {
            for (var i = 0; i < this.cards.length; i++) {
                if ((this.cards[i].water && this.waterfilter) || (this.cards[i].trees && this.treesfilter) || (this.cards[i].mountains && this.mountainsfilter)) {
                    this.cards[i].isSet = true;

                }
                else {
                    this.cards[i].isSet = false;
                }
            }
        }
    }
});