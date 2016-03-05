function Manager() {
    self = this;
    riot.observable(self);
    self.on('set_setting', function(value) {
        Lockr.set('settings', value);
        RiotControl.trigger('update_setting', value);
        window.alert("Settings Updated");
    });
    self.on('get_setting', function() {
        temp = Lockr.get('settings');
        if (temp == null) {
            temp = {
                debugging: false,
                ip: "1.2.3.4",
                name: "Scout",
                pass: "ha nope lol",
            }
            RiotControl.trigger('update_setting', temp);
        } else {
            RiotControl.trigger('update_setting', temp);
        }
    });
}
