const NfcpyId = require('node-nfcpy-id').default;
const setTime = require('./setTimeStamp');

const nfc = new NfcpyId().start();

nfc.on('touchstart', (card) => {
    var suicaId = card.id;
    // var suicaId = "01010212f7067801";
    var date = new Date() ;
    var dt = date.getTime();
    console.log('touchstart', 'id:', card.id, 'type:', card.type);
    setTime.setTimeStamp(suicaId, dt);
});

nfc.on('touchend', () => {
    console.log('touchend');
});

nfc.on('error', (err) => {
    // standard error output (color is red)
    console.error('\u001b[31m', err, '\u001b[0m');
});
