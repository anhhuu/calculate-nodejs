var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    const firstNum = parseFloat(req.body.firstNum);
    const secondNum = parseFloat(req.body.secondNum);
    const method = req.body.method;
    let resultNum = 0;

    let additionChecked = "";
    let subtractionChecked = "";
    let multiplicationChecked = "";
    let divisionChecked = "";

    switch (method) {
        case "addition_method":
            resultNum = firstNum + secondNum;
            additionChecked = "checked";
            break;

        case "subtraction_method":
            resultNum = firstNum - secondNum;
            subtractionChecked = "checked";
            break;

        case "multiplication_method":
            resultNum = firstNum * secondNum;
            multiplicationChecked = "checked";
            break;

        case "division_method":
            resultNum = firstNum / secondNum;
            divisionChecked = "checked";
            break;

        default:
            break;
    }
    res.render('home', { firstNum, secondNum, resultNum, additionChecked, subtractionChecked, multiplicationChecked, divisionChecked });
});

module.exports = router;