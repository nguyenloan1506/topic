// let xlsx = require('xlsx');
// let workbook = xlsx.readFile('testcases.xlsx');
// let worksheet = workbook.Sheets[workbook.SheetNames[0]];
// const book = require('./js/book');

// // const getData = () => {
// //     let res = null;
// //     for(let index = 2; ; index++) {
// //         const ids = worksheet[`A${index}`].v;
// //         const days = worksheet[`B${index}`].v;
// //         const hours = worksheet[`C${index}`].v;
// //         const minutes = worksheet[`D${index}`].v;
// //         const expectedOutputs = worksheet[`E${index}`].v;
    
// //         res = {
// //             ids: ids,
// //             days: days,
// //             hours: hours, 
// //             minutes: minutes,
// //             expectedOutputs: expectedOutputs
// //         }
// //     }
// //     console.log(res);
// //     return res;
// // }

// // getData();

// let data;

// const parse = (filename) => {
//     const excelData = xlsx.readFile(filename);
//     return Object.keys(excelData.Sheets).map((name) => ({
//         name,
//         data: xlsx.utils.sheet_to_json(excelData.Sheets[name]),
//     }))
// }

// const testData = () => {
//     parse('testcases.xlsx').forEach((element) => {
//         // console.log(element.data[1], element.name);
//         data = element.data;
//     })
//     console.log(data);

//     for (let i = 0; i < data.length; i++) {
//         let day = data[i]['Input day'];
//         let hour = data[i]['Input hour'];
//         let minute = data[i]['Input minute'];
//         let expected = data[i]['Expected output'];

//         console.log(day, hour, minute, expected);
//     }

//     return data;
// }
// testData();

// module.exports = testData
