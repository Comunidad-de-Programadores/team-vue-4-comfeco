<template>
    <div class="login">
        <form action method="post" autocomplete="on" @submit.prevent="login">        
            <div class="input-group">
                <label id="email-lbl" for="email" class="input-group__label" >
                    Correo electr&oacute;nico</label>
                <span class="fas fa-user"></span>
                <input type="email" name="email" id="email" v-model="form.email" class="input-group__input" placeholder="Correo electr&oacute;nico" />
            </div>
            <div class="input-group">
                <label id="password-lbl" for="password" class="input-group__label" >
                    Contraseña</label>
                <span class="fas fa-lock"></span>
                <input :type="isPwd ? 'password' : 'text'" name="password" id="password" v-model="form.password" class="input-group__input" placeholder="Contraseña" />
                <span :class="isPwd ? 'far fa-eye' : 'far fa-eye-slash'"
                 @click="isPwd = !isPwd" ></span>
            </div>
            <div class="row">
                <div class="col">
                    <button type="button" class="link">
                        ¿Olvidaste tu contraseña?
                    </button>
                </div>
                <div class="col">
                    <input type="checkbox" class="input-group__check" 
                        id="remember" v-model="form.remember" />
                    <label class="input-group__check-label" for="remember">
                        Mantenerme conectado
                    </label>                
                </div>
            </div>        
            <button type="submit" class="button">
                <span class="fas fa-door-open"></span> Ingresar
            </button>
        </form>
        <p class="text-center">Tambien puedes iniciar con tus redes</p>
        <button type="submit" class="button" @click="logInWithFacebook">
            <i class="fa fa-facebook"></i>        
            Ingresar con Facebook
        </button>
        <button type="submit" class="button">
            <i class="fa fa-google"></i>
            Ingresar con Google
        </button>
    </div>
</template>

<script>
export default {
    name: "PxLogin",
    data(){
        return{
            form:{
                email:'',
                password:'',
                remember:false
            },
            isPwd: true,           
        }
    },
    methods: {
        login(){
            console.log(this.form);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
