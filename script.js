let result = document.getElementById('result');

function appendCharacter(char){

    result.value += char;
}
function deleteCharacter(){

    result.value = result.value.slide(0,-1);
}
function clearResult(){

    result.value = '';
}
function calculateResult(){

    let expression = result.value;
    
    try{

        let answer = eval(expression);
        result.value = answer;
    }catch(error){
        result.value = 'Error';
    }
}