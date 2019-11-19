let Mobile = function (name, type) {
    this.name = name;
    this.type = type;
    this.msg = '';
    this.inbox = [];
    this.outbox = [];

    this.writeMsg = function (value) {
        this.msg = value;
    };
    this.sendMsg = function (mobile) {
        this.outbox.push(this.msg);
        mobile.receiveMsg(this.msg);
        this.msg = '';
    };
    this.receiveMsg = function (msg) {
        this.inbox.push(msg);
    };
};