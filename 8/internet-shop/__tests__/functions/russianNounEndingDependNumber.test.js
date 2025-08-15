import {russianNounEndingDependNumber} from "../../src/functions/russianNounEndingDependNumber";

const set1 = [1, 101, 1001, 10001, 100001, 1000001];
const set2 = [11, 111, 1111, 11111];
const set3 = [100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
const set4 = [2, 22, 32, 122, 132, 102, 1002, 1022, 10022, 100022, 1000022, 10000022, 100000022];
const set5 = [12, 112, 1012, 10012, 100012, 1000012];
const set6 = [3, 4, 23, 24, 33, 34, 103, 104, 123, 124, 133, 134, 1023, 1024, 10023, 10024];
const set7 = [13, 14, 113, 114, 1113, 1114];
const set8 = [5, 15, 19, 25, 29, 105, 109, 115, 119, 1005, 1009, 1015, 1019, 1115, 1119];

describe("russianNounEndingDependNumber", () => {
    test("товар", () => {
        expect(set1.every(number => russianNounEndingDependNumber(number, "товар") === "товар")).toBeTruthy();
    });

    test("число на 1 и исключения 11 - товар(ов)", () => {
        expect(set2.every(number => russianNounEndingDependNumber(number, "товар") === "товаров")).toBeTruthy();
    });

    test("число на 0 - товар(ов)", () => {
        expect(set3.every(number => russianNounEndingDependNumber(number, "товар") === "товаров")).toBeTruthy();
    });

    test("число на 2 - товар(a)", () => {
        expect(set4.every(number => russianNounEndingDependNumber(number, "товар") === "товарa")).toBeTruthy();
    });

    test("число на 12 - товар(ов)", () => {
        expect(set5.every(number => russianNounEndingDependNumber(number, "товар") === "товаров")).toBeTruthy();
    });

    test("число на 3, 4 - товар(a)", () => {
        expect(set6.every(number => russianNounEndingDependNumber(number, "товар") === "товарa")).toBeTruthy();
    });

    test("число на 13, 14 - товар(ов)", () => {
        expect(set7.every(number => russianNounEndingDependNumber(number, "товар") === "товаров")).toBeTruthy();
    });

    test("товар(ов)", () => {
        expect(set8.every(number => russianNounEndingDependNumber(number, "товар") === "товаров")).toBeTruthy();
    });
});
