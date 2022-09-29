
// body append 

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateGrid (gridSize){
    const container = document.getElementById('container');
   
    for (x = 0; x < gridSize; x++) {
    
        const div = document.createElement('div');
        div.className = "row";
        // div.innerText = "O";
    
    
        for (y = 0; y < gridSize; y++) {
            const innerDiv = document.createElement('div');
            innerDiv.className = "item";
            innerDiv.innerText = "g";
            div.appendChild(innerDiv);
    
        }
    
        container.appendChild(div);
    }

}

function clearGrid (){
    const container = document.getElementById('container');
    container.innerHTML = '';
}

function addMouseEvent(){
    const divs = document.querySelectorAll('.item');
    for (div of divs) {
        div.addEventListener("mouseover", function (ev) {
            ev.target.style.backgroundColor = getRandomColor();
            // ev.target.style.backgroundColor = 'blue';
            console.log('hello');
        })
        div.addEventListener("mouseout", function (ev) {
            ev.target.style.backgroundColor = '';
    
        });
    }
}
// generate -> grid (size)
const button = document.getElementById('generateGridbtn')
button.addEventListener('click',function(ev){
    
    let num = prompt("Enter the number of squares");
    
    const errorDiv = document.getElementById('errorMessageContainer')
    if(num >=100){
        errorDiv.innerText = `You entered ${num}, Please select number less than 100`;
        return;
    }else{
        errorDiv.innerText =  '';
    }


    clearGrid();
    generateGrid(num);
    addMouseEvent();
    
    
})

// end 

