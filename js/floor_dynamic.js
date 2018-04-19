var balls = {"x": 32, "y": 352, "vy": 1, "vx": 1};
window.onload = function () {
    var digital = [
        {"x": 0, "y": 0}, {"x": 1, "y": 0}, {"x": 1, "y": 2}, {"x": 2, "y": 2}, {"x": 1, "y": 2}, {
            "x": 1,
            "y": 4
        }, {"x": 2, "y": 4}, {
            "x": 1,
            "y": 4
        }, {"x": 1, "y": 0}, {"x": 0, "y": 0}
    ];
    var dynamic = document.getElementById('dynamic');
    dynamic.width = 450;
    dynamic.height = 450;
    var context = dynamic.getContext('2d');
    // context.strokeStyle = "#c9cbcc";
    // oneStep(context);
    setInterval(
        function () {
            oneStep(context);
        },
        50
    );

    function drawChessBoard() {
        for (var i = 0; i < 3; i++) {
            context.moveTo(30 + i * 80, 30);
            context.lineTo(30 + i * 80, 420);
            context.stroke();
            context.moveTo(30 + i * 80 + 4, 30);
            context.lineTo(30 + i * 80 + 4, 420);
            context.stroke();
            context.fillStyle = "#000";
            context.font = "15px Arial";
            context.fillText("E" + (i + 1), 30 + i * 80 - 5, 435);

        }
        for (var j = 0; j < 5; j++) {
            context.moveTo(30, 30 + j * 80);
            context.lineTo(420, 30 + j * 80);
            context.stroke();
            context.moveTo(30, 30 + j * 80 + 4);
            context.lineTo(420, 30 + j * 80 + 4);
            context.stroke();
            context.fillStyle = "#000";
            context.font = "15px Arial";
            context.fillText("L" + (5 - j), 430, 30 + j * 80 + 7);
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                context.beginPath();
                context.fillStyle = "#fff";
                context.arc(30 + i * 80 + 2, 30 + j * 80 + 2, 10, 0, 2 * Math.PI);
                context.fill();
                context.stroke();
                context.closePath();
            }
        }

    }

    function oneStep(cxt) {
        // var canvas = cxt.canvas;
        cxt.clearRect(0, 0, dynamic.width, dynamic.height);
        cxt.beginPath();
        context.strokeStyle = "#c9cbcc";
        drawChessBoard();
        move(cxt);
    }

    var speedx;
    var speedy;
    var a = 0;
        setInterval(function () {
            if (a < digital.length - 1) {
                a+=1;
            }else{
                a=0;
            }
        },2000);
        var startPointx = digital[a].x * 80 + 30 + 2;
        var startPointy = -digital[a].y * 80 + 4 * 80 + 30 + 2;
    function move(cxt) {
        cxt.beginPath();
        cxt.strokeStyle = "#ff9732";
        cxt.fillStyle = "#ff9732";
        cxt.arc(32, 352, 10, 0, Math.PI * 2);
        cxt.stroke();
        cxt.fill();
        for (var i = a; i < a + 1; i++) {
            context.save();
            if ((i + 1) >= digital.length) {
                return;
            } else {
                if (((digital[i + 1].x - digital[i].x) > 0) && ((digital[i + 1].y - digital[i].y) === 0)) {
                    startPointy = -digital[a].y * 80 + 4 * 80 + 30 + 2;
                    speedy = 0;
                    startPointy += speedy;
                    if (startPointx >= digital[i + 1].x * 80 + 30 + 2) {
                        speedx = 0;
                        startPointx += speedx;
                    } else {
                        speedx = (digital[i + 1].x - digital[i].x)*2;
                        startPointx += speedx;
                    }
                }
                else if (((digital[i + 1].x - digital[i].x) < 0) && ((digital[i + 1].y - digital[i].y) === 0)) {
                    startPointy = -digital[a].y * 80 + 4 * 80 + 30 + 2;
                    speedy = 0;
                    startPointy += speedy;
                    if (startPointx < digital[i + 1].x * 80 + 30 + 2) {
                        speedx = 0;
                        startPointx -= speedx;
                    } else {
                        speedx = -(digital[i + 1].x - digital[i].x)*2;
                        startPointx -= speedx;
                    }
                }
                else if (((digital[i + 1].y - digital[i].y) < 0) && ((digital[i + 1].x - digital[i].x) === 0)) {
                    startPointx = digital[i].x * 80 + 30 + 2;
                    speedx = 0;
                    startPointx += speedx;
                    if (startPointy > (-digital[i + 1].y * 80 + 4 * 80 + 30 + 2)) {
                        speedy = 0;
                        startPointy += speedy;
                    } else {
                        speedy = (digital[i + 1].y - digital[i].y)*2;
                        startPointy -= speedy;
                    }
                }
                else if (((digital[i + 1].y - digital[i].y) > 0) && ((digital[i + 1].x - digital[i].x) === 0)) {
                    startPointx = digital[i].x * 80 + 30 + 2;
                    speedx = 0;
                    startPointx += speedx;
                    if (startPointy < (-digital[i + 1].y * 80 + 4 * 80 + 30 + 2)) {
                        speedy = 0;
                        startPointy += speedy;
                    } else {
                        speedy=-(digital[i + 1].y - digital[i].y)*2;
                        startPointy += speedy;
                    }
                }
            }
            context.restore();
        }
        // cxt.save();
        cxt.beginPath();
        cxt.moveTo(digital[a].x * 80 + 30 + 2, -digital[a].y * 80 + 4 * 80 + 30 + 2);
        cxt.lineTo(startPointx - 2, startPointy - 2);
        if((speedy<0&&speedx===0)||(speedx<0&&speedy===0)){
            cxt.strokeStyle="#153ba8";
        }else{
            cxt.strokeStyle="#ff9732";
        }
        cxt.stroke();
        cxt.restore();
        cxt.beginPath();
        cxt.fillStyle = "#ff9732";
        cxt.arc(startPointx, startPointy, 10, 0, Math.PI * 2);
        cxt.fill();
    }
};
