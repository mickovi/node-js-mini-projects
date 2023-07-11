import yargs from 'yargs';
import 'colors';
import { hideBin } from 'yargs/helpers';

export const argv = yargs(hideBin(process.argv))
                .options({
                    'b': {
                        alias: 'base',
                        describe: 'Multiplier',
                        type: 'number',
                        demandOption: true
                    },
                    'l': {
                        alias: 'list',
                        describe: 'Show times table in the console',
                        type: 'boolean',
                        default: false,
                    },
                    'r': {
                        alias: 'range',
                        describe: 'Indicate the range of the table',
                        type: 'number',
                        default: 9,
                    },
                })
                .check((argv)=>{
                    if(isNaN(argv.b)){
                        throw 'error, base must be a number'.red;
                    }
                    return true;
                })
                .argv;