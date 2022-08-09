const assert = require('assert')
const Decorator = require('../decorator.js')
const Room = require('../room.js')
const Paint = require('../paint.js')

describe('setUp',function(){
    let room1;
    let decorator1;
    let paint1;
        this.beforeEach(function(){
            room1=new Room(4);
            decorator1=new Decorator();
            paint1=new Paint(3);
            paint2=new Paint(4);
        })

        describe('room',function(){

            it('should have an area',function(){
                const actual= room1.area;
                assert.strictEqual(actual,4)
            })
            it('should not be painted',function(){
                const actual = room1.painted;
                assert.strictEqual(false,actual)
            })
            it('should be able to be painted',function(){
                room1.paint_it();
                const actual = room1.painted;
                assert.strictEqual(true,actual)
            })
        })
        describe('paint',function(){
            it('should have number of liters of paint',function(){
                const actual=paint1.capacity;
                assert.strictEqual(actual,3)
            })
            it('should be able to check if it is empty',function(){
                const actual=paint1.empty;
                assert.strictEqual(false,actual)
            })
            it('should be able to empty itself of paint', function(){
                paint1.make_empty();
                const actual = paint1.capacity;
                const actual2=paint1.empty;
                assert.strictEqual(0,actual)
                assert.strictEqual(true,actual2)
            })

        describe('decorator',function(){
            it('should start with an empt paint stock',function(){
                const actual=decorator1.paint_stock;
                assert.deepEqual([],actual)
            })
            it('should be able to add a can of paint to paint stock',function(){
                paint_to_add=[paint1]
                decorator1.add_paint_to_stock(paint_to_add);
                const actual=decorator1.paint_stock.length;
                assert.strictEqual(actual,1)
            })
            it('should be able to calculate total ltrs paint in stock',function(){
                const paint_to_add=[paint1,paint2]
                decorator1.add_paint_to_stock(paint_to_add);
                const actual=decorator1.get_stock_count();
                assert.strictEqual(actual,7)
            })
            it('should calculate wether it has enough paint to paint a room',function(){
                const paint_to_add=[paint1,paint2]
                decorator1.add_paint_to_stock(paint_to_add)
                const stock_avaliable=decorator1.get_stock_count()
                const actual = decorator1.check_if_enough_paint(room1,stock_avaliable)
                assert.strictEqual(actual,true)
            })
            it('should be able to paint room if there is enough paint in stock',function(){
                const paint_to_add=[paint1,paint2]
                decorator1.add_paint_to_stock(paint_to_add)
                const result=decorator1.get_painted_son(decorator1,room1)
                const actual=result.painted;
                assert.strictEqual(actual,true)

            })
            it('should be able to decrease amount of paint in stock when painting a room',function(){
                const paint_to_add=[paint1,paint2];
                decorator1.add_paint_to_stock(paint_to_add);
                const result = decorator1.use_up_paint(decorator1,room1); 
                
                const actual1=result[0].capacity;
                // console.log(actual1)
                const actual2=result[1].capacity;
                // console.log(actual2)
                assert.strictEqual(actual1,0)
                assert.strictEqual(actual2,3)
            })

        })





        })






})
