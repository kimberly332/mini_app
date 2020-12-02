export default {
        name: "TheMiniCard",

        props: ["mini"],

        // data needs to be a function inside a component
        // data: function() {
        //     return {
        //         myName: this.mini.name,
        //         myRole: this.mini.role,
        //         program: "IDP"
        //     }
        // },

        template: 
        `<div>
            <img :src="'images/' +  mini.image" :alt='mini.model + " image"'>
            <h2>{{ mini.model }}</h2>
            <h3>All-Inclusive Price: {{ mini.price}}</h3>
            <p>{{ mini.detail }}</p>
        </div>`,
        
        created: function() {
            console.log(`created ${this.mini.model}'s card`);
        },

        methods: {
            logClicked() {
                console.log(`fired from inside ${this.mini.name}'s the component!`);
                this.$emit("showmydata", this.mini);
            }
        }
}