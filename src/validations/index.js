class ValidationForms {
  validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validPass(pass) {
    var re = /^(?=.*[a-z]){2,}(?=.*[A-Z]){2,}(?=.*\d)(?=.*[$@$!%*?&]){2,}([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
    return re.test(pass);
  }
}

export default ValidationForms;
