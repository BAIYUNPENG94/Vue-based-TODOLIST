import axios from 'axios';

function RestAPI(info) {
    this.create = function() {
        console.log("Function Triggered [CREATE]");
        axios.post("/todo", {
          content: info,
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    };
}

module.exports = new RestAPI();