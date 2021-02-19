<template>
  <div class="main">
    <h1 id="heading">Fill To Enter</h1>
    <div class="formone">
      <form action="" method="get">
        <input type="text" name="" id="" placeholder="Name" v-model="name" />
        <input type="email" name="" id="" placeholder="Email" v-model="email" />
        <input type="date" name="" id="" placeholder="DOB" v-model="dob" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Phone Number"
          v-model="phone"
        />
        <button type="submit" v-on:click="clicked()">submit</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.main {
  text-align: center;
  font-family: Consolas, monaco, monospace;
}
.formone {
  width: 50%;
  margin-left: 230px;
}
input {
  width: 100%;
  margin-bottom: 10px;
  height: 30px;
  color: red;
  border-radius: 15px;
  border: 2px solid aliceblue;

  text-align: center;
  background-color: cadetblue;
}
button {
  background-color: aqua;
  width: 200px;
  height: 30px;
  border: 2px solid black;
  border-radius: 15px;
}
#heading {
  color: rgb(123, 50, 168);
}
</style>
<script>

const sendbody =(data)=>{
  fetch("http://localhost:8080/",{
          method:"POST",
          body:JSON.stringify(data)
        })
}
export default {
  name: "Register",
  props: {
    // name: String,
    // email: String,
    // dob: String,
    // phone: String,
  },
  data() {
    return {
      name: "Enter your Name",
      email: "Enter Your mail",
      dob: "Enter Your DOB",
      phone: "Enter Your Phone",
    };
  },
  methods: {
    clicked() {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)) {
        let dat = {
          name:this.name,
          email:this.email
        }
        sendbody(dat);
        this.$router.push('list');
      }else{
        alert("enter a valid email")
      }
    },
  },
};
</script>