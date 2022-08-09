const Decorator = function (paint_stock) {
    this.paint_stock = [];
}




Decorator.prototype.add_paint_to_stock = function (paint) {
    // this.paint_stock.push(paint)
    for (const item of paint) {
        this.paint_stock.push(item)
    }
}

Decorator.prototype.get_stock_count = function () {
    let ltrs = 0;
    for (const item of this.paint_stock) {
        ltrs += item.capacity
    }
    return ltrs;
}

Decorator.prototype.check_if_enough_paint = function (room, stock) {
    if (room.area < stock) {
        return true;
    } else {
        return false
    }

}
Decorator.prototype.get_painted_son = function (decorator, room) {
    if (decorator.get_stock_count() > room.area) {
        room.painted = true
    }
    else { room.painted = false }
    return room
}
Decorator.prototype.use_up_paint = function (decorator, room) {
    for (item of decorator.paint_stock) {
        if (item.capacity = 0) { continue } else {
            while (item.capacity != 0) {
                item.capacity-- && room.area--, console.log(room.area)

            }
        }




        return decorator.paint_stock
    }
}
module.exports = Decorator