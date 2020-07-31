function Trails() {
    const box = document.getElementById("newYear");
    var renderer = PIXI.autoDetectRenderer(box.offsetWidth, box.offsetHeight, {
        antialias: true,
        transparent: true
    });
    var stage = new PIXI.Container();
    var self = this;

    this.circleRadius = 15;
    this.trailX = 100;
    this.trailY = 100;
    this.sourceX = 0;
    this.sourceY = 0;
    this.trailSpeed = 3;
    this.trailAlpha = 3;
    this.colorType = 'random';

    function init() {
        box.appendChild(renderer.view);
        renderer.view.style.position = "absolute"
        renderer.view.style.display = "block";
        renderer.view.style.top = "0px";
        renderer.view.style.left = "0px";
        stage.interactive = true;
        document.addEventListener('mousemove', createRect);
    }

    function returnColor() {
        var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
        var color = '0x';
        for (var i = 2; i < 8; i++) {
            color += (arr[getRandomInt(arr.length - 1)]);
        }
        return color;
    }

    function createRect(e) {

        var color;
        if (self.colorType == 'blue') {
            arr = ['0x123456', '0x345678', '0x567890', '0x7890ab', '0x90abcd'];
            color = arr[getRandomInt(arr.length)]
        } else if (self.colorType == 'melon') {
            arr = ['0xffcccc', '0xff9999', '0xcc3333', '0xcc6666', '0x993333', '0x663333'];
            color = arr[getRandomInt(arr.length)];
        } else {
            color = returnColor();
        }
        var scale = Math.random();
        var dx = ((e.pageX) - 15) + (getRandomInt(self.trailX) - (self.trailX * .5));
        var dy = ((e.pageY) - 15) + (getRandomInt(self.trailY) - (self.trailY * .5));
        var ox = ((e.pageX) - 15) + (getRandomInt(self.sourceX) - (self.sourceX * .5));
        var oy = ((e.pageY) - 15) + (getRandomInt(self.sourceY) - (self.sourceY * .5));

        var graphics = new PIXI.Graphics();
        graphics.beginFill(color);
        graphics.drawCircle(self.circleRadius, self.circleRadius, self.circleRadius);

        var disobj = new PIXI.Container();
        disobj.addChild(graphics);
        disobj.pivot.x = .5;
        disobj.pivot.y = .5;

        TweenMax.set(disobj.position, {
            x: ox,
            y: oy
        });
        TweenMax.set(disobj, {
            alpha: 0
        });
        TweenMax.set(disobj.scale, {
            x: .5,
            y: .5
        });
        TweenMax.to(disobj, 1, {
            alpha: Math.random() * .25 + .5,
            ease: Expo.easeOut
        });
        TweenMax.to(disobj.scale, .35, {
            x: scale,
            y: scale,
            ease: Back.easeOut
        });
        TweenMax.to(disobj, self.trailAlpha, {
            alpha: 0,
            ease: Expo.easeOut,
            delay: .35
        });
        TweenMax.to(disobj.position, self.trailSpeed, {
            ease: Expo.easeOut,
            x: dx,
            y: dy
        });
        TweenMax.to(disobj.scale, 3, {
            x: 0,
            y: 0,
            ease: Expo.easeOut,
            delay: .35,
            onComplete: remove,
            onCompleteParams: [graphics, disobj]
        });

        stage.addChild(disobj);
    }

    function remove(graphics, disobj) {
        disobj.removeChild(graphics);
        graphics.clear();
        graphics = null;
        stage.removeChild(disobj);
        disobj = null;
    }

    function getRandomInt($n) {
        return Math.floor((Math.random() * $n) + 1);
    }

    function animate() {
        renderer.render(stage);
        requestAnimationFrame(animate);
    }

    init();

    // run the render loop
    animate();

}

var trails = new Trails();