const mongoose = require('mongoose');
const URI = 'mongodb+srv://npdevelopment:a7toxdY8tlmVnYRJ@cluster0.wmbffnw.mongodb.net/?retryWrites=true&w=majority';

//mongoose.set('useNewUrlParser',true);
//mongoose.set('useFindAndModify',false);
//mongoose.set('useCreateIndex',true);
//mongoose.set('useUnifiedTopology',true);
mongoose.set('debug',true);

mongoose.connect(URI)
    .then(() => console.log('DB UP'))
    .catch((err) => console.error(err));