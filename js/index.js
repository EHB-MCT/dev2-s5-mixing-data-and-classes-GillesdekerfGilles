"use strict";
import Joke from "./joke.js";
const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {

        fetch('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=sexist&type=single&amount=3')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                /*       console.log(data.jokes[1].joke); */
                /*   for (let i = 0; i < data.jokes.length; i++) {
                      console.log(data.jokes[i].joke);
                      
                  } */
                console.log(data.Jokes);
                data.jokes.forEach(function (j) {
                    const joke = new Joke(j.setup, j.delivery);
                    app.items.push(joke)
                })
            });




    },
    onSearch() {},
    render(message) {
        let htmlString = ``

        /*         document.querySelector('#messageContainer').insertAdjacentHTML("beforeend", htmlString) */
    }

}
app.init()