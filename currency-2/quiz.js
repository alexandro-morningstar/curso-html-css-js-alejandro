// Gomez Hernandez Sinuhe Alejandro

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {question: '1.- Para referirse a los enanos, usted utiliza el término: ',
     options: '\na) Gente pequeña. \nb) Liliputiense. \nc) Enano puto. \nd) Amigo.'},
    {question: '2.- ¿Podría usted tener una pareja enana?: ',
     options: '\na) Sí, siempre que nos amemos. \nb) Sólo si tiene la altura exacta para practicarme sexo oral estando de pie. \nc) No, los enanos son todos putos. \nd) Sí, obvio.'},
    {question: '3.- ¿Cúantos enanos cree que entran en un Fiat 600?: ',
     options: '\na) Seis: dos adelante y cuatro atrás. \nb) Catorce: cuatro adelante, siete atrás y tres en la cajuela. \nc) Uno solo: los enanos son todos ortivas y nunca llevan a nadie. \nd) Una vez medio borracho subimos como a ocho.'},
    {question: '4.- ¿Tiene usted amigos enanos?:',
     options: '\na) Sí, varios. \nb) Tuve uno pero nos peleamos porque le dije \"Leñador de Bonsai\". \nc) No, no creo en la amistad entre el hombre y los enanos. \nd) Sí, la mayoría.'},
    {question: '5.- ¿Cuántas horas de tele mira por día?: ',
     options: '\na) Menos de 2. \nb) Entre 2 y 4. \nc) Entre 4 y 6. \nd) Más de 6.'},
    {question: '6.- Cuando un enano entra a la misma habitación que usted:',
     options: '\na) No se inmuta. \nb) Le apoya un vaso en la cabeza. \nc) Lo señala y grita: "Enano puto". \nd) Lo saluda.'},
    {question: '7.- ¿Si un enano se cae en el medio de un bosque, y no hay nadie que lo escuche, podemos decir que este hace ruido? (¿existe ruido en ese momento?)',
     options: '\na) Sí, todas las cosas que se caen hacen ruido por más que nadie las escuche, al final el enano generará la suficiente perturbación en las ondas del aire para generar lo que nosotros concebimos como sonido. \nb) No, porque nadie lo escucha. \nc) No sé, pero siempre es gracioso ver cuando se cae un enano. \nd) No sé si hace ruido, pero seguramente le dolió.'},
    {question: '8.- ¿Cree que en esta encuesta se repite demasiado la palabra "enano"?: ',
     options: '\na) Sí, pero no me jode. \nb) Sí,  la verdad me rompe un poco las pelotas. \nc) Sí, dice muchas veces "enano" y muy pocas "puto". \nd) No, estoy acostumbrado.'}
];

const results = {
    1: 'Usted odia a los enanos. Podría decirse que usted es algo así como "el Hitler de los enanos". Seguramente usted usa bigote y en el próximo mundial va a apoyar a Alemania',
    2: 'Usted discrimina moderadamente a los enanos; no los mataría, pero los haría sus esclavos.',
    3: 'Usted no discrimina a los enanos. De hecho, usted no discrimina a ningún ser vivo de este planeta. Seguramente está asociado a Greenpeace y si se encuentra una billetera por la calle la devuelve sin sacar plata.',
    4: 'Usted es un enano.'};

const option_score = {a: 3, b: 2, c: 1, d: 4};

let score = 0;
let index = 0;

// Función que obtiene el resultado de la encuesta
let quiz_result = (score) => {
    if (score >= 4 && score < 11) {
        console.log(`Tu resultado es: ${results[1]}`);
    } else if (score >= 11 && score < 19) {
        console.log(`Tu resultado es: ${results[2]}`);
    } else if (score >= 19 && score < 26) {
        console.log(`Tu resultado es: ${results[3]}`);
    } else if (score >= 26 && score < 33) {
        console.log(`Tu resultado es: ${results[4]}`);
    } else {
        console.log(`Pero que ha pasao? (score: ${score})`);
    };
};


// Función que obtiene el puntaje de la opción y suma al score
let obtain_and_add_score = (response) => {
    score += option_score[response];
    index += 1;
    print_questions(questions, index, score);
};


// Función que captura la respuesta y la evalua
let request_response = (option_score) => {
    rl.question('Ingresa tu respuesta (a/b/c/d): ', (response) => {
        if (option_score.hasOwnProperty(response)){
            obtain_and_add_score(response, option_score, score);
        } else {
            console.log('Opción invalida (ej: a, b, c, d)');
            request_response(option_score);
        };
    });
};


// Función que imprime las preguntas
let print_questions = (questions, index, score) => {
    console.clear();
    if (index <= 7){
        console.log(`\n ${questions[index].question} \n${questions[index].options}`);
        request_response(option_score);
    } else {
        quiz_result(score);
        rl.close();
    };
};


let title = () =>{
    console.log('Bienvenido! \n¿Odia usted a los enanos? \nConteste la siguiente encuesta y descubralo!');
}

let main = (questions) => {
    title();
    print_questions(questions, index);
};


if (require.main === module) {
    main(questions);
};