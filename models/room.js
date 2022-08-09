const Room = function(area,painted = false){
    this.area=area;
    this.painted=painted;

}
module.exports=Room



Room.prototype.paint_it=function(){
    this.painted=true;
}
// Taxi.prototype.get_num_passangers = function () {
//     return this.passangers.length;
// }