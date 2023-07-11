import 'colors';
import { timesTable }  from './helpers/times.js';
import { argv } from './config/yargs.js';

timesTable(argv.base, argv.list, argv.range)
    .then(file => {
        if(file) console.log(file.green, `file was created!`.green)
        if(file === undefined) console.log(`error, something was wrong. Check the logs`.red)
    })
    .catch(err => console.log(err));