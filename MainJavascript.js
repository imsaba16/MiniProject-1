//Variable Assign
    var image;
    var image2;

//Upload Function Module
    function upload(){
    var fileInput = document.getElementById("file1")
    var filename = fileInput.value;

    image = new
    SimpleImage(fileInput);
    image2 = new
    SimpleImage(fileInput);
    var canvas =
        document.getElementById("can");
    image.drawTo(canvas);
    }
//Greyscale Module
    function makegrey()
    {
        for(var pixel of image2.values())
            {
                var avg = (pixel.getRed() +pixel.getGreen() + pixel.getBlue())/3;
                pixel.setRed(avg);
                pixel.setGreen(avg);
                pixel.setBlue(avg);
            }

    //Greyscale Printing Module
        var imgCanvas = document.getElementById("can2")
        image2.drawTo(imgCanvas)
    }
//Greyscale Module Ends Above

//Red Filter Module
    function makeRed ()
     {
        for (var pixel of image2.values()) 
            {
                var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
                pixel.setRed(255);
                pixel.setGreen(avg);
                pixel.setBlue(avg);
            }
    //Red Filter Printing Module
        var imgcanvas = document.getElementById("can2");
        image2.drawTo(imgcanvas);
    }
//Red Filter Module Ends Above
    

//Blue Filter Module
    function makeBlue() 
    {
        for (var pixel of image2.values())
            {
                var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
                pixel.setRed(avg);
                pixel.setGreen(avg);
                pixel.setBlue(255);
            }
    //Blue Filter Printing Module
        var imgcanvas = document.getElementById("can2");
        image2.drawTo(imgcanvas);
    }
//Blue Filter Module Ends Above

//Green Filter Module
    function makeGreen() 
    {
        for (var pixel of image2.values())
            {
                var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
                pixel.setRed(avg);
                pixel.setGreen(255);
                pixel.setBlue(avg);
            }
    //Green Filter Printing Module
        var imgcanvas = document.getElementById("can2");
        image2.drawTo(imgcanvas);
    }
//Green Filter Module Ends Above


//Color Invertion Module
    function makeInvert()
    {
        can2.style.webkitFilter = "invert(500%)";

    //Color Invertion Printing Module
        var imgcanvas = document.getElementById("can2");
        image2.drawTo(imgcanvas);
    }
//Color Invertion Module Ends Above

//Rainbow Effect Module
//Main rainbow Function
    function makeRainbow () 
    {
    //For Loop to get pixel info
        for (var pixel of image.values())
        {
                
            var x = pixel.getX();
            var y = pixel.getY();
            //If statement 1 to work with Red Pixels
                if (x < image.getWidth()/3)
                {
                    pixel.setRed(255);
                }
                else
                {
                    pixel.setRed(pixel.getRed());
                }

            //If statement 2 to work with Green Pixel
                if (x > image.getWidth()/3)
                {
                    pixel.setGreen(153);
                }
                else
                {
                    pixel.setGreen(pixel.getGreen());
                }

             //If statement 3 to work with Blue Pixel    
            if (x > image.getWidth()/3*2)
            {
                pixel.setBlue(255);
            }
            else
            {
                pixel.setBlue(pixel.getBlue());
            }
            
        }
     //For Loop Ends above
     //Ranibow Effect Printing Module
        var imgcanvas = document.getElementById("can2");
        image2.drawTo(imgcanvas);
    
    }
//Rainbow Effect Module Ends Above


//Blur Effect Modlue Start Here
    function makeBlur()
    {
        can2.style.webkitFilter = "blur(10px)";  
    //Blur Effect Printing Module
        var imgcanvas = document.getElementById("can2");
        image2.drawTo(imgcanvas);
    }


//Unblur Effect Module Start Here
    function UnBlur()
    {
       can2.style.webkitFilter = "blur(0px)";
    }


//Reset Effect Button Module
    function resetImg()
    {
        upload();
        can2.style.webkitFilter = "blur(0px)";
    //Reset Effect Printing Module
    var imgcanvas = document.getElementById("can2");
    image2.drawTo(imgcanvas);
    }

//Clear all Images Module
    function doClear()
    {
        var d1 = document.getElementById ("can2");
        var ctx = d1.getContext("2d");
        ctx.clearRect(0,0,d1.width,d1.height);
        d1.style.backgroundColor = "clear";
    }

