function Manager() {
    riot.observable(this);
    self = this;
    self.on('set_setting', function(value) {
        value.used = true;
        Lockr.set('settings', value);
    });
    self.on('get_setting', function() {
        temp = Lockr.get('settings');
        if (temp.used) {
            self.trigger('set', temp);
        } else {
            temp = {
                debugging: false,
                ip: "1.2.3.4",
                name: "Scout",
            }
            self.trigger('set', temp);
        }

    });
    this.getSetting = function() {
        temp = Lockr.get('settings');
        if (temp.used) {
            //self.trigger('set', temp);
        } else {
            temp = {
                debugging: false,
                ip: "1.2.3.4",
                name: "Scout",
            }
        }
        return temp;
    }
}
