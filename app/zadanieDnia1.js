//Twój kod

const express = require('express');
const app = express();

const votes = {
	yes: 0,
	no: 0,
	maybe: 0
}

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:dec', (req, res) => {
	votes[req.params.dec]++;
	res.send(`Thanks for voting. Current result: YES:${votes.yes} vs. NO: ${votes.no} vs. MAYBE: ${votes.maybe}`);
})

app.get('/votes/check', (req, res) => {
	res.send(`Current result: YES:${votes.yes} vs. NO: ${votes.no} vs. MAYBE: ${votes.maybe}`);
})

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
