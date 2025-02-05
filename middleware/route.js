import express from 'express';
import axios from 'axios'; // Importing axios for HTTP requests

const router = express.Router();

router.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    // Input validation
    const num = Number(number);
    if (isNaN(num)) {
        return res.status(400).json({ number: "alphabet", error: true });
    }

    // Prime verification
    const prime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const is_prime = prime(num);

    // Perfect number check
    const perfect = (num) => {
        if (num < 1) return false;
        let sum = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum === num;
    };

    const is_perfect = perfect(num);

    // Armstrong property
    const armstrong = (num) => {
        const digits = num.toString().split('').map(Number);
        const power = digits.length;

        const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

        return sum === num;
    };

    const parity =(num)=>{
        return num % 2 === 0 ? true : false;
    }
    const is_parity = parity(number)

    const is_armstrong = armstrong(num);

    const properties = []
    if (is_armstrong) properties.push("armstrong");
    properties.push(is_parity ? "even" : "odd");

    const sum_digit = (num)=>{
        return num.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    }

    const digit_sum = sum_digit(number);

    
    // Fetching fun fact from Numbers API
let fun_fact = null;
try {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
    fun_fact = response.data.text;
} catch (error) {
    console.error('Error fetching fun fact:', error);
    fun_fact = `No fun fact available for ${num}.`;
}

    // Response
    res.json({
        number: num,
        is_prime,
        is_perfect,
        properties,
        digit_sum,
        fun_fact
    });
});

export default router;
