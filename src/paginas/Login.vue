<template>

<div class="container">
    <form>
    <b-row align-h="center">
        <div class="col-md-6 col-md-3" align-h="center">
            
            <div class="form-login">
            <h4>Login</h4>
            <input v-model="username" type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" />
            <br>
            <input v-model="password" type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="password" />
            <br>
            
            </div>
        </div>
    </b-row>
    <b-row align-h="center">
    <b-col cols="4"><button v-on:click.prevent="login">Login</button></b-col>
  </b-row>
  </form>


</div>

</template>

<script>
export default {
    
    
    data(){
        return {
            username:'',
            password:''
    
        }
          
    },

    methods:{

        login () {
        this.$http.post('http://localhost:5000/api/login', { id: this.username, AccessKey: this.password })
            .then(request => (this.loginResponse = request.data.authenticated))
            if (this.loginResponse == true){
                window.location.href = '/home';
            }
        },

        loginCheck (req) {
            if (!req.data.token) {
                console.log('imhere')
            }
        },

        loginFailed () {
            console.log(this.error)
            this.error = 'Login failed!'
            delete localStorage.token
        }
    }

}
</script>

<style>

</style>