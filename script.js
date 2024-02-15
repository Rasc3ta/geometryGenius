// making functions for event listeners:

const getValues = (Event) => {
    const inputs = Event.target.parentElement.getElementsByTagName('input');

    const value1 = parseFloat(inputs[0].value);
    const value2 = parseFloat(inputs[1].value);

    return [value1, value2]
} 

const displayResult = (area, shape) => {
    const display = document.getElementById('cardBody');

    const h3 = document.createElement('h3');
    h3.innerHTML = `Area of ${shape} : ${area} cm<sup>2</sup>` ;
    h3.style.fontSize = '1.25rem';
    h3.style.fontWeight = '800';

    display.appendChild(h3)
}

const triangleArea = (Event) => {
    const valueArray = getValues(Event);
    
    const area = .5 * valueArray[0] * valueArray[1];
     
    displayResult(area, "triangle")
}


const rectangleArea = (Event) => {
    const valueArray = getValues(Event);
    
    const area =  valueArray[0] * valueArray[1];

    displayResult(area, "rectangle")
}



// adding event listeners :

document.getElementById('triangle').querySelector('button').addEventListener('click', triangleArea);


document.getElementById('rectangle').querySelector('button').addEventListener('click', rectangleArea);

