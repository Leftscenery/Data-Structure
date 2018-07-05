//先进后出，和一摞书、一摞盘子的结构类似
function Stack() {
    var items = [];

    //方法
    this.push = function (element) {
        arguments.length <= 1 ? items.push(element) : null;
    }
    this.pop = function () {
        return items.pop()
    }
    this.peek = function () {
        return items[items.length-1]
    }
    this.isEmpty = function () {
        return items.length == 0
    }
    this.clear = function () {
        items = []
    }
    this.size = function () {
        return items.length
    }
}