const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Way to go, Paul!');
});

app.get('/cheese', (req,res) =>{
    res.send('ayyee we got cheese')
})

app.get('/pizza/pepperoni', (req, res) => {
    res.send('coming right up!')
})

app.get('/pizza/pineapple', (req, res) => {
    res.send('get the fuck out of here!')
})

app.get('/echo', (req, res) => {
    const responseText = `Here are smoe details of your request:
    BaseURL: ${req.baseUrl}
    Host: ${req.hostname}
    Path: ${req.path}
    Cookies: ${req.cookies}
    Body: ${req.body}
    App: ${req.app}
    Fresh: ${req.fresh}
    IPS: ${req.ips}
    Method: ${req.method}
    Params: ${req.params}
    Protocol: ${req.protocol}
    `;
    res.send(responseText);
})

app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end();
})

app.get('/greetings', (req, res) => {
    const name = req.query.name;
    const race = req.query.race;
    if(!name) {
        return res.status(404).send('Please provide a name');
    }
    if(!race) {
        return res.status(400).send('Please provide a race');
    }
    const greeting = `Greetigns ${name} the ${race}, welcome to our kingdom`
    res.send(greeting);
})

app.get('/sum', (req, res) => {
    const a = req.query.number1
    const b = req.query.number2
    const firstInput = Number(a);
    const secondInput = Number(b);
    if (!a || !b){
        return res.status(400).send('Please provide a number')
    }
    const sum = firstInput + secondInput
    const sumReturn = `the sum of ${firstInput} and ${secondInput} is ${sum}`
    res.send(sumReturn)
})

app.get('/cipher', (req, res) => {
    const text = req.query.text
    const shift = req.query.shift
    if (!text){
        return res.status(400).send('Gimme something to work with')
    } else if (!shift){
        return res.status(400).send('i need a number, gimme one plz')
    }
    const shiftNumber = Number(shift)
    const textString = text.split(" ")
    function testFunction(number){
        let test = (65 + number)
        return String.fromCharCode(test)
    }
    const returnedString = testFunction(textString)
    res.send(returnedString)
})

app.get('/lotto', (req, res) => {
    const one = req.query.one
    const two = req.query.two
    const three  = req.query.three
    const four = req.query.four
    const five = req.query.five
    const six = req.query.six
    if (one > 20 || two > 20 || three > 20 || four > 20 || five > 20 || six > 20){
        return res.status(400).send('ayye man, one of your numbers is greater than 20! #FixIt')
    } else if (!one || !two || !three || !four || !five || !six) {
        return res.status(400).send('dude you gotta give me six numbers!')
    }
    const userArray = [one, two, three, four, five, six]
    const randomOne = Math.floor(Math.random() * Math.floor(20))
    const randomTwo = Math.floor(Math.random() * Math.floor(20))
    const randomThree = Math.floor(Math.random() * Math.floor(20))
    const randomFour = Math.floor(Math.random() * Math.floor(20))
    const randomFive = Math.floor(Math.random() * Math.floor(20))
    const randomSix = Math.floor(Math.random() * Math.floor(20))
    const randomArray = [randomOne, randomTwo, randomThree, randomFour, randomFive, randomSix]

    if (userArray.match(randomArray)){
        res.status(400).send(userArrat + 'v' + randomArray + 'wow! you won!')
    } else{
        res.status(400).send(userArrat + 'v' + randomArray + 'yikes you lost')
    }

})

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});