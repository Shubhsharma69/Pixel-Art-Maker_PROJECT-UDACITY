//make grid
function makeGrid() {

  //grid height width and canvas selected
  const gridHeight = document.getElementById('height').value;
  
  const gridWidth = document.getElementById('width').value;
  
  const canvas = document.getElementById('pixel_canvas');

  
  canvas.innerHTML = '';

  //for loop
  for (let i = 0; i < gridHeight; i++) {
    let row = canvas.insertRow(i);

    
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);

      //add event listener
      cell.addEventListener('click', function(event) {
        
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}

//select size picker
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  
  makeGrid();
});
