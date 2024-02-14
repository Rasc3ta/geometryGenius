const getValues = (Event) => {
    const inputs = Event.target.parentElement.getElementsByTagName('input');

    const value1 = parseFloat(inputs[0].value);
    const value2 = parseFloat(inputs[1].value);

    return [value1, value2]
} 


const triangleArea = (Event) => {
    const valueArray = getValues(Event);
    
    const area = .5 * valueArray[0] * valueArray[1];
    console.log(area);
}
const triangle = document.getElementById('triangle');

triangle.querySelector('button').addEventListener('click', triangleArea);