//普通队列
function Queue(){
    var items = [];

    this.enqueue = function (element) {
        items.push(element);
        return items
    };
    this.dequeue = function () {
        return items.splice(0,1)[0]
    };
    this.front = function () {
        return items[0]
    };
    this.isEmpty = function(){
        return items.length == 0
    };
    this.size = function () {
        return items.length
    }
    this.print = function () {
        console.log(items.toString());
    }
}

//优先队列
function PriorityQueue() {
    var items = [];

    function QueneElement(priority,element){
        this.priority = priority;
        this.element = element;
    }

    this.enqueue = function (priority,element) {
        var newItem = new QueneElement(priority,element);
        if (items.length == 0){
            items.push(newItem)
        }
        for (var i = 0; i < items.length; i++) {
            if(items[i].priority < newItem.priority){
                items.splice(i,0,newItem);
                break;
            }
        }
    };
    this.dequeue = function () {
        return items.splice(0,1)[0]
    };
    this.front = function () {
        return items[0].element
    };
    this.isEmpty = function(){
        return items.length == 0
    };
    this.size = function () {
        return items.length
    }
    this.print = function () {
        var final = [];
        items.forEach((a)=>{final.push(a.element)});
        console.log(final);
    }
}

//循环队列（也就是有步长，不断循环）
function CircleQueue() {
    var items = [];
    this.enqueue = function (element) {
        items.push(element);
        return items
    };
    this.dequeue = function () {
        return items.splice(0,1)[0]
    };
    this.front = function () {
        return items[0]
    };
    this.isEmpty = function(){
        return items.length == 0
    };
    this.size = function () {
        return items.length
    };
    this.print = function () {
        console.log(items.toString());
    };
    this.runCount = function (count) {
        for (var i = 0; i < items.length; i++) {
            console.log(i);
            if(count == 1){
                return items[i]
            }
            if (i==items.length-1){
                console.log('here');
                i=0
            }
            count--;
        }
    }
}