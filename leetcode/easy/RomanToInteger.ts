type IRomanSymbols = Record<string, {
    precedence: number;
    value: number;
}>;

const RomanSymbols: IRomanSymbols = {
    '-': { precedence: 0, value: 0 },
    'I': { precedence: 1, value: 1 },
    'V': { precedence: 2, value: 5 },
    'X': { precedence: 3, value: 10 },
    'L': { precedence: 4, value: 50 },
    'C': { precedence: 5, value: 100 },
    'D': { precedence: 6, value: 500 },
    'M': { precedence: 7, value: 1000 }
};

function romanToInt(s: string): number {
    const romanNum = s.split('').reverse();

    let curIdx = 0;
    let romanIntVal = 0;
    let prevRomanSymbol = RomanSymbols['-'];

    while (curIdx < romanNum.length) {
        const curRomanSymbol = RomanSymbols[romanNum[curIdx++]];

        if (curRomanSymbol.precedence < prevRomanSymbol.precedence) {
            romanIntVal -= curRomanSymbol.value;
        }
        else {
            romanIntVal += curRomanSymbol.value;
        }

        prevRomanSymbol = curRomanSymbol;
    }

    return romanIntVal;
};

// console.log('romanToInt = ', romanToInt('III'));
// console.log('romanToInt = ', romanToInt('LVIII'));
console.log('romanToInt = ', romanToInt('MCMXCIV'));