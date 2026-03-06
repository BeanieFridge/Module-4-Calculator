const btn = document.querySelector('#calculateBtn')
const num1 = document.getElementById('firstNumber')
const num2 = document.getElementById('secondNumber')
const operator = document.getElementById('operator')
const operationResult = document.getElementById('result')

btn.addEventListener('click', () => {
    const number1 = parseFloat(num1.value)
    const number2 = parseFloat(num2.value)
        const operatorVal = operator.value
        let result
        switch(operatorVal){
            case 'add':
                result = number1 + number2
                break
            case 'subtract':
                result = number1 - number2
                break
            case 'multiply':
                result = number1 * number2
                break
            case 'divide':
                result = number1 / number2
                break
        }
        operationResult.innerText = 'Equals: ' + result
        console.log('they are numbers')
    })

    function resetNumbers(){
        document.getElementById('firstNumber').value = ''
        document.getElementById('secondNumber').value = ''
    }