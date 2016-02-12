function Form() {
    self = this;
    riot.observable(self);
    self.on('update_setting', function(value) {
        settings = value;
    });
    self.on('submit', function(form) {
        //console.log(settings)
        form.name = settings.name;
        qwest.post('http://' + settings.ip + ':628', form)
            .then(function(xhr, response) {
                console.log('self')
            })
            .catch(function(e, xhr, response) {
                // Process the error
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
