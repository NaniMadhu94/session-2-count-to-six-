var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(function () {
            console.log(this.yelp);
        }.bind(this));
    }
};
foot.kick();

