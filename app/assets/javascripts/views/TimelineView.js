var TwitterCloneApp = TwitterCloneApp || {};


TwitterCloneApp.TimelineView = Backbone.View.extend ({
    tagName: "div",
    className: "timeline",

    initialize: function() {
        this.collection.on("add", this.addStatus, this);
        this.collection.on("reset", this.render, this);
    },

    addStatus: function(status) {
        var statusView = new TwitterCloneApp.StatusView({ model: status });
        this.$el.append(statusView.render().el);
    },

    render: function() {
        this.collection.each(this.addStatus, this);
    }
});