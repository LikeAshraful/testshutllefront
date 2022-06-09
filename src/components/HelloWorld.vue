<template>
  <div class="hello" style="width:100%;">
    <h1>{{ msg }}</h1>
    <table class="table table-striped" style="width:50%; margin: 0 auto;">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th scope="col">Last login reset</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'User Table',
      users:[]
    }
  },
  methods: {
        getUsers() {
            Vue.http.get("http://127.0.0.1:8000/api/auth/users").then(result => {
                this.users = result.data
                console.log(result.data)
            }, error => {
                console.error(error)
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
