
EmployeeManager.Views.Employees = Backbone.View.extend({
    template: _.template($("#tpl-contacts").html()),

    renderOne: (employee) => {
        let itemView = new EmployeeManager.Views.Employee({ model: employee });
        this.$(".contacts-container").append(itemView.render().$el);
    },

    render: () => {
        let html = this.template();
        this.$el.html(html);

        this.collections.each(this.renderOne, this);

        return this;
    }
});