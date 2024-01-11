AFRAME.registerComponent('log', {
    schema: {
        message : {type: 'string', default: 'Hello World!!'}
    },
    init: function(){
        console.log(this.data.message) ;  
        //Live Cyclers// 
    }   ,    
    update : function(){
        // do something when the component data is updated
    }  ,
    tick : function(){
        //do something in every tick or in every frame 
        console.log("HELLOOOOOO")
    }  ,
    remove: function(){
        // do something when the component or its entity is removed/ 
    }             
 })