AFRAME.registerComponent('move-box',{
    schema:{
        move_x : {
            type:'number',
            default:0.09
        }
    },
    tick : function(){
        this.data.move_x += 0.01
        var pos = this.el.getAttribute("position") ;
        console.log(pos);   
        pos.x = this.data.move_x;
        this.el.setAttribute('position', {x: pos.x, y: pos.y, z:pos.z})
    }
})