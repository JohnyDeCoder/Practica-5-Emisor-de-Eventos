let Emitter = require('./emitter');

let emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

console.log('Hello!'); // imprime Hello!
emtr.emit('greet'); // imrpime las 2 funciones greet

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr); // imprime obj
emtr.emit('jump'); // imrpime 'someone jumped!'