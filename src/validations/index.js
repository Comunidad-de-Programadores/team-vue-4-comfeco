class ValidationForms {
    validInput(type, dato){
        console.log(type);
        let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let pass  = /^(?=.*[a-z]){2,}(?=.*[A-Z]){2,}(?=.*\d)(?=.*[$@$!%*?&]){2,}([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
        if (type =='email') {
            return email.test(dato);
        } else if (type =='pass'){
            return pass.test(dato);
        }
    }
}

export default ValidationForms;
