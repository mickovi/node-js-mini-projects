import { writeFileSync } from 'node:fs';

export const timesTable = async (base, list, range) => {
    try {
    let input = `=======================
==== ${base} Times Table ====
=======================\n`;
        for(let i = 1; i <= range; i++)
            input += `${base} x ${i} = ${base * i}\n`;
            
        writeFileSync(`./output/table_${base}.txt`, input);
        if (list) console.log(input);

        return `table_${base}.txt`;
    } catch(err) {
        console.log(err);
    }
}