const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1/petfood';

//mongoose.set('useNewUrlParser',true);
//mongoose.set('useFindAndModify',false);
//mongoose.set('useCreateIndex',true);
//mongoose.set('useUnifiedTopology',true);
mongoose.set('debug',true);

mongoose.connect(URI)
    .then(() => console.log('DB UP'))
    .catch((err) => console.error(err));