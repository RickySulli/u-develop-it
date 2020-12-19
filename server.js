const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database')

//////// EXPRESS MIDDLEWARE\\\\\\\these go lbefore so we know to use these
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/////////USE API ROUTES\\\\\\\\\
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

//////// Default response for any other request (Not Found) CATCH-ALL\\\\\\\\\
app.use((req,res) => {
    res.status(404).end();
});

//////////start server affter DB connection\\\\\\\\\\\\\\\\
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
