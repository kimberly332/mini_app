export default {
        name: "TheMiniCard",

        props: ["mini"],

        // data needs to be a function inside a component
        data: function() {
            return {
                // store variables
                mini_id: this.mini.id,
                mini_img_og: this.mini.image_og,
                mini_model: this.mini.model
            }
        },

        template: 
         `
         <div @click="clickedCard()" :id="'content' + mini_id"><img :src="'images/' + mini_img_og" :alt="mini_model + 'Images'"></div>
         `,
        
        created: function() {
            console.log(`created ${this.mini.model}'s card`);
        },

        methods: {
            clickedCard() {
                console.log("clikced on the card. need to show data");

                // deliver data to parent
                this.$emit("showmydata", this.mini);
            },
        }
}