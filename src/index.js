import express from 'express';

const app = express();

const PORT = process.env.PORT || 3300;

app.listen(PORT, err => {
    if (err) {
        throw err;
    } else {
        // eslint-disable-next-line no-console
        console.log(`
            Server running on port : ${PORT}
            ----
            Running on ${process.env.NODE_ENV}
            ----
        `);
    }
});