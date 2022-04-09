LipX=0;
LipY=0;
function preload()
{
    lipstick = loadImage('https://i.postimg.cc/jSycSVc3/l1.png');
}

function draw()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        console.log("lip x = " + results[0].pose.nose.x);
        console.log("lip y = " + results[0].pose.nose.y);
        LipX = results[0].pose.nose.x;
        LipY = results[0].pose.nose.y;
        console.log("lip x  = " + noseX);
        console.log("lip y = " + noseY);
    }
}


function draw()
{
    image(video, 0, 0, 300, 300);
    image(lipstick, LipX, LipY, 30, 25);
}


function filtered_image()
{
    save('filter.png');
}