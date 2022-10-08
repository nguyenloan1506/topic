let xlsx = require("xlsx");
const book = require("./book");

let data_loptuongduong;
let data_bangquyetdinh;

const parse = () => {
  const excelData = xlsx.readFile("testcases.xlsx");
  const sheet1 = excelData.Sheets["KTloptuongduong"];
  const sheet2 = excelData.Sheets["KTbangquyetdinh"];

  data_loptuongduong = xlsx.utils.sheet_to_json(sheet1);
  data_bangquyetdinh = xlsx.utils.sheet_to_json(sheet2);
};


parse();
console.log("lop tuong duong", data_loptuongduong);
console.log("bang quyet dinh", data_bangquyetdinh);


function testFunction(testData) {
  let len = testData.length;
  for (let i = 0; i < len; i++) {
    let day = testData[i]["Input day"];
    let hour = testData[i]["Input hour"];
    let minute = testData[i]["Input minute"];
    let expected = testData[i]["Expected output"];

    test(`testcase ${i+1}`, () => {
      expect(book(day, hour, minute)).toBe(expected);
    });
  }
}

testFunction(data_loptuongduong);

testFunction(data_bangquyetdinh);
