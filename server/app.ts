import express from 'express';

const app = express();
const port = 5000;

app.get('/',(req:express.Request, res: express.Response)=>{
    res.send('hello typescript!');
});
app.listen(port, () => {
    console.log(`Server listnening on ${port}`);
});