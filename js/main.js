import { fetchData } from "./components/TheDataMiner.js";
// import MiniCard from "./components/TheMiniCard.js";

(() => {

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            cars: [],
            
            car_id: 0,

            model: "",
            price: "",
            image_url: "mini_cooper_main.jpg",
            detail: ""
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php")
                .then(data => {
                    // push the mini data into cars array
                    data.forEach(mini => this.cars.push(mini));
                    console.log(this.cars);
                })
                .catch(err => alert(err));
        },

        // run a method when you change our view (update the DOM with Vue)
        updated: function() {
            console.log("Vue just updated the DOM");
        },

        methods: {
            logClicked() {
                console.log("clicked on a mini name");
            },

            clickedCard(event) {
                console.log("clikced on the card. need to show data");
                
                // figure out which car need to be displayed by finding id
                this.car_id = parseInt(event.currentTarget.id[event.currentTarget.id.length-1]);
                
                // update car info
                this.model = this.cars[this.car_id-1]["model"];
                this.price = this.cars[this.car_id-1]["price"];
                this.image_url = this.cars[this.car_id-1]["image"];
                this.detail = this.cars[this.car_id-1]["detail"];
                

            },
        },

        // components: {
        //     "mini-card": MiniCard
        // }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();