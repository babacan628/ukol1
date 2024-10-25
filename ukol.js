<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Program</title>
    <style>
        body { font-family: Arial, sans-serif; }
        label { display: block; margin-top: 10px; }
        button { margin-top: 10px; }
        #output { margin-top: 20px; }
    </style>
</head>
<body>
    <h1>JavaScript Program</h1>

    <label for="age">How old are you:</label>
    <input type="number" id="age" placeholder="Věk">
    <button onclick="checkAccess()">Check checkAccess</button>

    <h2>Sum of 2 numbers</h2>
    <label for="num1">num 1:</label>
    <input type="number" id="num1" placeholder="First number">
    <label for="num2">num 2:</label>
    <input type="number" id="num2" placeholder="Second number">
    <button onclick="calculateSum()">sum the answer</button>

    <div id="output"></div>

    <script>
        function checkAccess() {
            const age = parseInt(document.getElementById('age').value);
            const output = document.getElementById('output');

            if (age >= 18) {
                output.innerHTML = "Acess granted<br>";
                displayNumbers();
            } else {
                output.innerHTML = "acess denied";
            }
        }

        function displayNumbers() {
            let numbers = "";
            for (let i = 1; i <= 10; i++) {
                numbers += i + " ";
            }
            console.log("Numbers from 1 to 10: " + numbers);
        }

        function calculateSum() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const sum = sumFunction(num1, num2);
            document.getElementById('output').innerHTML += "<br>Sum of numbers: " + sum;
        }

        function sumFunction(a, b) {
            return a + b;
        }
    </script>
</body>
</html>
