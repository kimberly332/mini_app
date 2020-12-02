import { fetchData } from "./components/TheDataMiner.js";
import MiniCard from "./components/TheMiniCard.js";

(() => {

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            cars: [],
            
            current_model: "",
            current_price: "",
            current_image_url: "mini_cooper_main.jpg",
            current_detail: ""
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php") // fetch data from database, store into this.cars 
                .then(data => {
                    // push the mini data into cars array
                    data.forEach(mini => this.cars.push(mini));
                })
                .catch(err => alert(err));
        },

        // run a method when you change our view (update the DOM with Vue)
        updated: function() {
            console.log("Vue just updated the DOM");
        },

        methods: {
            showMiniData(target) {
                console.log("clicked to view mini data", target.model)

                // update data
                this.current_model = target.model;
                this.current_price = target.price;
                this.current_image_url = target.image;
                this.current_detail = target.detail;

            }
        },

        components: {
            "mini-card": MiniCard
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();