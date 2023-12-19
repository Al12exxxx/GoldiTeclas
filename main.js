var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var Goldi_width = 100;
        var Goldi_height = 90;
        var background_image = "coral.jpg";
        var Goldi_image = "Imagen1.png";
        var Goldi_x = 10;
        var Goldi_y = 10;


        function add() {
            background_img = new Image();
            background_img.onload = uploadBackground;
            background_img.src = background_image;
            Goldi_img = new Image();
            Goldi_img.onload = uploadGoldi;
            Goldi_img.src = Goldi_image;
        }


        function uploadBackground() {
            ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
        }


        function uploadGoldi() {
            ctx.drawImage(Goldi_img, Goldi_x, Goldi_y, Goldi_width, Goldi_height);
        }


        window.addEventListener("keydown", my_keydown);


        function my_keydown(e) {
            keyPressed = e.keyCode;
            console.log(keyPressed);
            if (keyPressed == '38') {
                up();
                console.log("up");
            }
            if (keyPressed == '40') {
                down();
                console.log("down");
            }
            if (keyPressed == '37') {
                left();
                console.log("left");
                
            }
            if(keyPressed == '39')
		{
			right();
			console.log("right");
		}





            // Add other key events as needed
        }


        function up() {
            if (Goldi_y >= 0) {
                Goldi_y = Goldi_y - 10;
                uploadBackground();
                uploadGoldi();
            }
        }


        function down() {
            if (Goldi_y <= canvas.height - Goldi_height) {
                Goldi_y = Goldi_y + 10;
                uploadBackground();
                uploadGoldi();
            }
        }


        function left() {
            if (Goldi_x >= 0) {
                Goldi_x = Goldi_x - 10;
                uploadBackground();
                uploadGoldi();
            }
        }
        function right()
{
    if(Goldi_x <= 700)
    {
        Goldi_x =Goldi_x + 10;
        uploadBackground();
        uploadGoldi();
   }
}
 



