function PerviousPicture() {
    let picChangeElements = document.querySelectorAll('.PicChange');

    for (let i = 0; i < picChangeElements.length; i++) {
        let element = picChangeElements[i];


        element.addEventListener('click', function () {

            let parentDiv = this.parentElement;
            let ImageContainer = parentDiv.previousElementSibling;
            let Checking = ImageContainer.getAttribute('name');

            if (Checking.indexOf('1') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('1', '3');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else if (Checking.indexOf('2') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('2', '1');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else if (Checking.indexOf('3') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('3', '2');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else
                console.log('Error')

        })
    }
}

function NextPicture() {
    let picChangeElements = document.querySelectorAll('.PicChangeN');

    for (let i = 0; i < picChangeElements.length; i++) {
        let element = picChangeElements[i];


        element.addEventListener('click', function () {

            let parentDiv = this.parentElement;
            let ImageContainer = parentDiv.previousElementSibling;


            let Checking = ImageContainer.getAttribute('name');

            if (Checking.indexOf('1') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('1', '2');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else if (Checking.indexOf('2') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('2', '3');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else if (Checking.indexOf('3') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('3', '1');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else
                console.log('Error')
        })
    }

}
let chart = []
function AddToCart() {

    let ChartElements = document.querySelectorAll('.AddToChartbutton');
    
    for (let i = 0; i < ChartElements.length; i++) {
        let element = ChartElements[i];

        element.addEventListener('click', function () {

            let divElement = element.previousElementSibling;

            let imgElement = divElement.previousElementSibling;

            chart.push(imgElement.previousElementSibling.name)
           
            console.log(chart)
        })
    }

} 

function playGame() {
    if( document.getElementById('GameDiv').style.display == 'none'){
        document.getElementById('GameDiv').style.display = ''
        document.getElementById('GameStartandStop').value = 'Stop Game'
        document.getElementById('GameDiv').innerHTML = '<canvas width="400" height="400" id="game" style="border: 3px dashed;">'+
        '</canvas>'
        
    }
    else{
        document.getElementById('GameDiv').style.display = 'none'
        document.getElementById('GameStartandStop').value = 'Play Game Again' 
        document.getElementById('GameDiv').innerhtml = ''
    }

    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');


    var grid = 16;
    var count = 0;

    var snake = {
        x: 160,
        y: 160,

        dx: grid,
        dy: 0,


        cells: [],

        maxCells: 4
    };
    var apple = {
        x: 320,
        y: 320
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    function loop() {
        requestAnimationFrame(loop);


        if (++count < 6) {
            return;
        }

        count = 0;
        context.clearRect(0, 0, canvas.width, canvas.height);


        snake.x += snake.dx;
        snake.y += snake.dy;


        if (snake.x < 0) {
            snake.x = canvas.width - grid;
        }
        else if (snake.x >= canvas.width) {
            snake.x = 0;
        }


        if (snake.y < 0) {
            snake.y = canvas.height - grid;
        }
        else if (snake.y >= canvas.height) {
            snake.y = 0;
        }


        snake.cells.unshift({ x: snake.x, y: snake.y });


        if (snake.cells.length > snake.maxCells) {
            snake.cells.pop();
        }


        context.fillStyle = 'red';
        context.fillRect(apple.x, apple.y, grid - 1, grid - 1);


        context.fillStyle = 'green';
        snake.cells.forEach(function (cell, index) {

            context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

            if (cell.x === apple.x && cell.y === apple.y) {
                snake.maxCells++;

                apple.x = getRandomInt(0, 25) * grid;
                apple.y = getRandomInt(0, 25) * grid;
            }


            for (var i = index + 1; i < snake.cells.length; i++) {

                if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                    snake.x = 160;
                    snake.y = 160;
                    snake.cells = [];
                    snake.maxCells = 4;
                    snake.dx = grid;
                    snake.dy = 0;

                    apple.x = getRandomInt(0, 25) * grid;
                    apple.y = getRandomInt(0, 25) * grid;
                }
            }
        });
    }


    document.addEventListener('keydown', function (e) {

        if (e.which === 37 && snake.dx === 0) {
            snake.dx = -grid;
            snake.dy = 0;
        }

        else if (e.which === 38 && snake.dy === 0) {
            snake.dy = -grid;
            snake.dx = 0;
        }

        else if (e.which === 39 && snake.dx === 0) {
            snake.dx = grid;
            snake.dy = 0;
        }

        else if (e.which === 40 && snake.dy === 0) {
            snake.dy = grid;
            snake.dx = 0;
        }
    });
    requestAnimationFrame(loop);
   }

