/* Reading a file asynchronously with Node JS */
const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => (
    readFile(path, 'utf8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      if (data) {
        const list = data.toString('utf-8').trim().split('\n');
        const field = {};
        const head = list[0].split(',');
        const arr = [];
        for (const i in list) {
          if (i !== '0') {
            const obj = {};
            const item = list[i].split(',');
            for (const j in item) {
              if (j) {
                if (j === '3' && Object.hasOwn(field, item[j])) {
                  field[item[j]] += 1;
                }
                if (j === '3' && !Object.hasOwn(field, item[j])) {
                  field[item[j]] = 1;
                }
                obj[head[j]] = item[j];
              }
            }
            arr.push(obj);
          }
        }
        console.log(`Number of students: ${list.length - 1}`);
        const key = Object.keys(field);
        for (const i in key) {
          if (i) {
            console.log(
              `Number of students in ${key[i]}: ${field[key[i]]}. List: ${arr
                .filter((item) => item.field === key[i])
                .map((item) => item.firstname)
                .join(', ')}`,
            );
          }
        }
        resolve(true);
      }
    })));
}

module.exports = countStudents;
