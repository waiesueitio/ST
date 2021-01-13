
var config={
    type:Phaser.AUTO,
    width:1280,
    height:200,
    parent: 'canvas',
    scene:{
        init:init,
        preload:preload,
        create:create,
        update:update
    }
};

var game=new Phaser.Game(config);
var kaiju;

function init(){

}

function preload(){
    this.load.image("back","/images/back.png");
    this.load.spritesheet("kaiju","/images/chara.png",{frameWidth:80,frameHeight:120});
}

function create(){
    this.add.image(640,100,"back");
    this.anims.create({
        key:"left",
        frameRate:10,
        frames:this.anims.generateFrameNumbers("kaiju",{start:0,end:2}),
        repeat:-1
    })
    this.anims.create({
        key:"center",
        frameRate:1,
        frames:this.anims.generateFrameNumbers("kaiju",{start:3,end:4}),
        repeat:-1
    })
    this.anims.create({
        key:"right",
        frameRate:10,
        frames:this.anims.generateFrameNumbers("kaiju",{start:5,end:7}),
        repeat:-1
    })
    kaiju=this.add.sprite(640,100,"kaiju");
    kaiju.play("center");
}

function update(){

}

