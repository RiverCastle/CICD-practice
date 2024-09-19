const oldTestaments = {
    "창세기": { koreanIndex: "ㅊ", abbreviation: "ge", chapters: 50, verses: [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26] },
    "출애굽기": { koreanIndex: "ㅊ", abbreviation: "ex", chapters: 40, verses: [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38] },
    "레위기": { koreanIndex: "ㄹ", abbreviation: "le", chapters: 27, verses: [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34] },
    "민수기": { koreanIndex: "ㅁ", abbreviation: "nu", chapters: 36, verses: [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13] },
    "신명기": { koreanIndex: "ㅅ", abbreviation: "de", chapters: 34, verses: [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12] },
    "여호수아": { koreanIndex: "ㅇ", abbreviation: "jos", chapters: 24, verses: [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33] },
    "사사기": { koreanIndex: "ㅅ", abbreviation: "jud", chapters: 21, verses: [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25] },
    "룻기": { koreanIndex: "ㄹ", abbreviation: "rut", chapters: 4, verses: [22, 23, 18, 22] },
    "사무엘상": { koreanIndex: "ㅅ", abbreviation: "1sa", chapters: 31, verses: [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13] },
    "사무엘하": { koreanIndex: "ㅅ", abbreviation: "2sa", chapters: 24, verses: [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25] },
    "열왕기상": { koreanIndex: "ㅇ", abbreviation: "1ki", chapters: 22, verses: [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53] },
    "열왕기하": { koreanIndex: "ㅇ", abbreviation: "2ki", chapters: 25, verses: [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30] },
    "역대상": { koreanIndex: "ㅇ", abbreviation: "1ch", chapters: 29, verses: [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30] },
    "역대하": { koreanIndex: "ㅇ", abbreviation: "2ch", chapters: 36, verses: [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 23, 18, 17, 21, 19, 19, 19, 17, 13, 15, 16, 25, 28, 24, 28, 27, 36, 27, 21, 33, 25, 33, 27, 23] },
    "에스라": { koreanIndex: "ㅇ", abbreviation: "ezr", chapters: 10, verses: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44] },
    "느헤미야": { koreanIndex: "ㄴ", abbreviation: "neh", chapters: 13, verses: [11, 20, 38, 17, 19, 19, 73, 18, 38, 39, 36, 47, 31] },
    "에스더": { koreanIndex: "ㅇ", abbreviation: "est", chapters: 10, verses: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3] },
    "욥기": { koreanIndex: "ㅇ", abbreviation: "job", chapters: 42, verses: [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17] },
    "시편": { koreanIndex: "ㅅ", abbreviation: "psa", chapters: 150, verses: [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 14, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 22, 17, 9, 8] },
    "잠언": { koreanIndex: "ㅈ", abbreviation: "pro", chapters: 31, verses: [33, 22, 35, 23, 27, 23, 29, 28, 31, 24, 31, 24, 33, 23, 29, 22, 26, 16, 29, 31, 31, 25, 29, 34, 28, 28, 27, 28, 27, 33, 31] },
    "전도서": { koreanIndex: "ㅈ", abbreviation: "ecc", chapters: 12, verses: [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14] },
    "아가": { koreanIndex: "ㅇ", abbreviation: "so", chapters: 8, verses: [17, 17, 11, 16, 16, 13, 13, 14] },
    "이사야": { koreanIndex: "ㅇ", abbreviation: "isa", chapters: 66, verses: [31, 22, 26, 6, 30, 13, 25, 22, 21, 20, 20, 13, 29, 24, 45, 8, 26, 23, 24, 21, 29, 31, 19, 29, 31, 24, 31, 26, 25, 23, 23, 65, 22, 20, 19, 27, 31, 35, 1, 23, 15, 63, 60, 8, 18, 34, 11, 41, 16, 5, 2, 24, 21, 29, 31, 20] },
    "예레미야": { koreanIndex: "ㅇ", abbreviation: "jer", chapters: 52, verses: [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34] },
    "예레미야애가": { koreanIndex: "ㅇ", abbreviation: "lam", chapters: 5, verses: [22, 22, 66, 22, 22] },
    "에스겔": { koreanIndex: "ㅇ", abbreviation: "ezek", chapters: 48, verses: [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35] },
    "다니엘": { koreanIndex: "ㄷ", abbreviation: "dan", chapters: 12, verses: [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13] },
    "호세아": { koreanIndex: "ㅎ", abbreviation: "hos", chapters: 14, verses: [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9] },
    "요엘": { koreanIndex: "ㅇ", abbreviation: "joe", chapters: 3, verses: [20, 32, 21] },
    "아모스": { koreanIndex: "ㅇ", abbreviation: "amo", chapters: 9, verses: [15, 16, 15, 13, 27, 14, 17, 14, 15] },
    "오바댜": { koreanIndex: "ㅇ", abbreviation: "obad", chapters: 1, verses: [21] },
    "요나": { koreanIndex: "ㅇ", abbreviation: "jon", chapters: 4, verses: [17, 10, 10, 11] },
    "미가": { koreanIndex: "ㅁ", abbreviation: "mic", chapters: 7, verses: [16, 13, 12, 13, 15, 16, 20] },
    "나훔": { koreanIndex: "ㄴ", abbreviation: "nah", chapters: 3, verses: [15, 13, 19] },
    "하박국": { koreanIndex: "ㅎ", abbreviation: "hab", chapters: 3, verses: [17, 20, 19] },
    "스바냐": { koreanIndex: "ㅅ", abbreviation: "zeph", chapters: 3, verses: [18, 15, 20] },
    "학개": { koreanIndex: "ㅎ", abbreviation: "hag", chapters: 2, verses: [15, 23] },
    "스가랴": { koreanIndex: "ㅅ", abbreviation: "zec", chapters: 14, verses: [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21] },
    "말라기": { koreanIndex: "ㅁ", abbreviation: "mal", chapters: 4, verses: [14, 17, 18, 6] }
};

const sortedOldTestaments = Object.keys(oldTestaments)
    .sort((a, b) => a.localeCompare(b, 'ko')) // 한글 오름차순 정렬
    .reduce((obj, key) => {
        obj[key] = oldTestaments[key];
        return obj;
    }, {});



const newTestaments = {
    "마태복음": { koreanIndex: "ㅁ", abbreviation: "mat", chapters: 28, verses: [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20] },
    "마가복음": { koreanIndex: "ㅁ", abbreviation: "mar", chapters: 16, verses: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20] },
    "누가복음": { koreanIndex: "ㄴ", abbreviation: "luk", chapters: 24, verses: [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53] },
    "요한복음": { koreanIndex: "ㅇ", abbreviation: "joh", chapters: 21, verses: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25] },
    "사도행전": { koreanIndex: "ㅅ", abbreviation: "act", chapters: 28, verses: [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31] },
    "로마서": { koreanIndex: "ㄹ", abbreviation: "rom", chapters: 16, verses: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27] },
    "고린도전서": { koreanIndex: "ㄱ", abbreviation: "1co", chapters: 16, verses: [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24] },
    "고린도후서": { koreanIndex: "ㄱ", abbreviation: "2co", chapters: 13, verses: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14] },
    "갈라디아서": { koreanIndex: "ㄱ", abbreviation: "gal", chapters: 6, verses: [6, 21, 29, 31, 26, 18] },
    "에베소서": { koreanIndex: "ㅇ", abbreviation: "eph", chapters: 6, verses: [23, 22, 21, 32, 33, 24] },
    "빌립보서": { koreanIndex: "ㅂ", abbreviation: "phi", chapters: 4, verses: [30, 30, 21, 23] },
    "골로새서": { koreanIndex: "ㄱ", abbreviation: "col", chapters: 4, verses: [29, 23, 25, 18] },
    "데살로니가전서": { koreanIndex: "ㄷ", abbreviation: "1th", chapters: 5, verses: [10, 20, 13, 18, 28] },
    "데살로니가후서": { koreanIndex: "ㄷ", abbreviation: "2th", chapters: 3, verses: [12, 17, 18] },
    "디모데전서": { koreanIndex: "ㄷ", abbreviation: "1ti", chapters: 6, verses: [20, 15, 16, 16, 25, 21] },
    "디모데후서": { koreanIndex: "ㄷ", abbreviation: "2ti", chapters: 4, verses: [18, 26, 17, 22] },
    "디도서": { koreanIndex: "ㄷ", abbreviation: "tit", chapters: 3, verses: [16, 15, 15] },
    "빌레몬서": { koreanIndex: "ㅂ", abbreviation: "phm", chapters: 1, verses: [25] },
    "히브리서": { koreanIndex: "ㅎ", abbreviation: "heb", chapters: 13, verses: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25] },
    "야고보서": { koreanIndex: "ㅇ", abbreviation: "jam", chapters: 5, verses: [27, 26, 18, 17, 20] },
    "베드로전서": { koreanIndex: "ㅂ", abbreviation: "1pe", chapters: 5, verses: [25, 25, 22, 19, 14] },
    "베드로후서": { koreanIndex: "ㅂ", abbreviation: "2pe", chapters: 3, verses: [21, 22, 18] },
    "요한일서": { koreanIndex: "ㅇ", abbreviation: "1jo", chapters: 5, verses: [10, 29, 24, 21, 21] },
    "요한이서": { koreanIndex: "ㅇ", abbreviation: "2jo", chapters: 1, verses: [13] },
    "요한삼서": { koreanIndex: "ㅇ", abbreviation: "3jo", chapters: 1, verses: [14] },
    "유다서": { koreanIndex: "ㅇ", abbreviation: "jud", chapters: 1, verses: [25] },
    "요한계시록": { koreanIndex: "ㅇ", abbreviation: "rev", chapters: 22, verses: [20, 29, 22, 18, 14, 20, 17, 13, 21, 11, 19, 18, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21] }
};

const sortedNewTestaments = Object.keys(newTestaments)
    .sort((a, b) => a.localeCompare(b, 'ko')) // 한글 오름차순 정렬
    .reduce((obj, key) => {
        obj[key] = newTestaments[key];
        return obj;
    }, {});