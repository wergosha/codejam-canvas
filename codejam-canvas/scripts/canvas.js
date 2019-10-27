let canvas, ctx, type;

document.addEventListener('DOMContentLoaded', (ev) => {
    
    document.getElementById('b1').onclick = function() {
        canvas = document.getElementById("c1");
        ctx = canvas.getContext("2d");
        canvas.width = 512;
        canvas.height = 512;
        type = 'hex'
        readTextFile('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json');
    };  
    document.getElementById('b2').onclick = function() {
        canvas = document.getElementById("c1");
        ctx = canvas.getContext("2d");
        canvas.width = 512;
        canvas.height = 512;
        type = 'rgb'
        readTextFile('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json');
    };  
    document.getElementById('b3').onclick = function() {
        canvas = document.getElementById("c1");
        ctx = canvas.getContext("2d");
        canvas.width = 512;
        canvas.height = 512;
        type = 'png'
        draw();
    };  
});

function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                json = JSON.parse(rawFile.responseText);
                draw();
            }
        }
    }
    rawFile.send(null);
}

function draw() {
    x = 0;
    y = 0;
    width = 512 / json.length;
    height = 512 / json.length;

    for (i = 0; i < json.length; i++) {
        for (j = 0; j < json.length; j++) {
            if (type == 'hex') {
                ctx.fillStyle = '#' + json[i][j];
                ctx.fillRect(x, y, width, height)
                x += 512 / json.length;
            } else if (type == 'rgb') {
                ctx.fillStyle = 'rgb(' + json[i][j] + ')';
                ctx.fillRect(x, y, width, height)
                x += 512 / json.length;
            } else if (type == 'png') {
                drawing = new Image();
                drawing.src = 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-2/codejam-canvas/data/image.png?raw=true'; 
                drawing.onload = function() {
                    ctx.drawImage(drawing,0,0, canvas.width, canvas.height);
                };
            }
        }
        y += 512 / json.length;
        x = 0;
    }
}     





