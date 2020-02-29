function generateGrid(gridSize)
{
    let containerSize = 960;
    const container = document.querySelector('#container');
    //clear canvas
    container.innerHTML='';

    //generate new canvas
    container.style = `margin: 25px auto 0px auto; line-height: ${containerSize/gridSize}px; width: ${containerSize}px; height: ${containerSize}px;`;

    for(let i = 0; i < gridSize *gridSize; i++)
    {   
        const div = document.createElement('div');
        div.style = `display: inline-block; margin: 0;vertical-align: top; width: ${containerSize/gridSize}px; height: ${containerSize/gridSize}px;`;
        div.onmouseover = function changeColor(){
                this.style.backgroundColor = `rgba(${getRanomNum()},${getRanomNum()},${getRanomNum()},1)`;
        };

        container.append(div);
    }
}

const button = document.querySelector("#clearButton");
button.addEventListener('click',(e) =>
{
    const container = document.querySelector('#container');
    container.childNodes.forEach(child => {
        child.style.backgroundColor = 'white';
    });

    generateGrid(prompt('How many squares per side do you want your new grid to be?', '16'));
    
});

function getRanomNum(){
    return Math.floor(Math.random() * Math.floor(255));
}

generateGrid(16);