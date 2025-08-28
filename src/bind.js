Function.prototype.newBind = function(context, ...args) {
    return (...newArgs) => this.apply(context, [...args, ...newArgs]);
};

const test = {
    name:'name1',
    showName: function (last) {
        console.log(this.name + 'and' + last)
    }
}
test.showName('name2')
test.showName.bind({name:'name3'})('name4')
test.showName.newBind({name:'name5'})('name6')