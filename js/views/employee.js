
EmployeeManager.Views.Employee = Backbone.View.extend({
    tagName: "li",
    className: "media col-md-6 col-lg-4",
    template: _.template($("#tpl-contact").html()),

    events: {
        "click .delete-employee": "onClickDelete"
    },

    initialize: () => {
        this.listenTo(this.model, "remove", this.remove);
    },

    render: () => {
        let html = this.template(this.model.toJSON());
        this.$el.append(html);
        return this;
    },

    onClickDelete: (event) => {
        event.preventDefault();
        this.model.collection.remove(this.model);
    }
});