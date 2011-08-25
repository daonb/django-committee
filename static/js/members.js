var member = (function() {

    // Define a local copy of member
    var member = function(mk) {
        return new member.fn.init(mk);
    }

member.fn = member.prototype = {
    constructor: member,
    init: function (mk) {
        this.mk = mk;
        return this;
    },
    render: function (bold) {
        // draw the member based on this.mk
        residence_centrality 
    }
}
