function leadForm() {
    self = this;
    riot.observable(self);
    self.on('update_setting', function(value) {
        settings = value;
    });
    self.on('submit_lead', function(form) {
        //console.log(settings)
        form.name = settings.name;
        qwest.post('http://' + settings.ip + ':628/lead', form)
            .then(function(xhr, response) {
                window.alert("Form Submitted");
                self.trigger('sucess')
            })
            .catch(function(e, xhr, response) {
                window.alert("Error. Check if you are connected to the server");
            });
    });
    self.on('get_forms', function() {
        temp = Lockr.get('forms');
        if (temp == null) {
            forms = [];
        } else {
            self.trigger('set_forms', temp);
        }

    });
}
