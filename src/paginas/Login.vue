<template>

<div class="container">
    <form @Login.prevent="login">
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
    <b-col cols="4"><button type="Login">Login</button></b-col>
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

    login () {
    this.$http.post('http://localhost:5000/api/login', { id: this.username, AccessKey: this.password })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },

    loginSuccessful (req) {
        if (!req.data.token) {
            this.loginFailed()
            return
    }

        localStorage.token = req.data.token
        this.error = false

        this.$router.replace(this.$route.query.redirect || '/home')
    },

    loginFailed () {
        console.log(this.error)
        this.error = 'Login failed!'
        delete localStorage.token
    }


}
</script>

<style>

</style>