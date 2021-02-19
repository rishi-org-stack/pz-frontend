<template>
  <div class="main">
    <h1>List Of Users</h1>
    <div class="listofusers">
      <div class="userinfo" v-for="user in listuser" :key="user.id">
        <div class="info">
          <p class="label">Name</p>
          <p>
            <b>{{user.Name}}</b>
          </p>
          <p class="label">Email</p>
          <p>
            <b>{{ user.Email }}</b>
          </p>
          <p class="label">Date Of Birth</p>
          <p>
            <b>{{ user.Dob }}</b>
          </p>
          <p class="label">phone</p>
          <p>
            <b>{{ user.PhoneNumber }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
* {
  background-color: rgb(81, 19, 180);
}
h1 {
}
.userinfo {
  border: 2px solid rgb(153, 15, 153);
  margin-bottom: 2px;
  text-align: left;
  border-radius: 15px;
}
.info {
  margin-left: 10px;
}

p {
  color: aliceblue;
  font: 200;
}
.label {
  color: black;
}
</style>
<script>
export default {
  name: "List",
  data() {
    let listuserdata = {};
    listuserdata["listuser"] = [];
      fetch("http://localhost:8080/all", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((d) => {
          d.forEach(element => {
            listuserdata["listuser"].push(element)
          }); 
          console.log(d);
          return d;
        })
    return listuserdata;
  },
  methods: {
    fetchusers() {
      // listall();
      // console.log(listall());
    },
  },
};
</script>