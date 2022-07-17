import axios from 'axios';

function RestAPI() {
//================= Dashboard Part =======================//
    this.get = function() {
      console.log("Function Triggered [GET]");
      axios.get("/todo", {
          params: {}
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    };
    this.getById = function(id) {
      console.log("Function Triggered [GET BY ID]");
      axios.get("/todo/" + id, {
        params: {}
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    };
    this.create = async function(info) {
      var result;
      console.log("Function Triggered [CREATE]");
      console.log(info)
      await axios.post("/todo", {
        content: info,
      })
      .then(res => {
        console.log(res.data);
        result = true;
      })
      .catch(err => {
        console.log(err);
        result = false;
      })

      return result;
    };
    this.put = function(id, info) {
      console.log("Test Function Triggered [PUT]");
      axios.put("/todo/" + id, {
        content: info
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    };
    this.deleteItem = function(id) {
      console.log("Test Function Triggered [PUT]");
      axios.delete("/todo/" + id)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    };
//=======================================================//

//============ Create and Login Part ====================//
    this.createUser = async function(info) {
      var result;
      console.log("Function Triggered [CREATE]");
      console.log(info)
      //This post url need to be changed in the future
      await axios.post("/todo/user", {
        content: info,
      })
      .then(res => {
        console.log(res.data);
        result = true;
      })
      .catch(err => {
        console.log(err);
        result = false;
      })

      return result;
    };
//=======================================================//

}

const instance = new RestAPI();
export default instance;