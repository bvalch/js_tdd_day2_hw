const Paint = function (capacity, empty=false) {
    this.capacity = capacity;
    this.empty = empty;

}


Paint.prototype.make_empty=function(){
    this.capacity=0;
    this.empty=true

}

module.exports=Paint