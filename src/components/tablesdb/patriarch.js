import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";

const data = [
  {
    id: "0001",
    Person: "Адам",
    age: 930,
    sonBirthDay: 130,
    birthYearBc: 4004,
    deathYearBc: 3074,
    birthYearFromCreation: 0,
    deathYearFromCreation: 930,
    scriptureVerse: "Быт.5:4",
    role: "Патриарх",
  },
  {
    id: "0002",
    Person: "Сиф",
    age: 912,
    sonBirthDay: 105,
    birthYearBc: 3899,
    deathYearBc: 2987,
    birthYearFromCreation: 130,
    deathYearFromCreation: 1042,
    scriptureVerse: "Быт.5:8",
    role: "Патриарх",
  },
  {
    id: "0003",
    Person: "Енос",
    age: 905,
    sonBirthDay: 90,
    birthYearBc: 3809,
    deathYearBc: 2904,
    birthYearFromCreation: 235,
    deathYearFromCreation: 1140,
    scriptureVerse: "Быт.5:11",
    role: "Патриарх",
  },
  {
    id: "0004",
    Person: "Каинан",
    age: 910,
    sonBirthDay: 70,
    birthYearBc: 3739,
    deathYearBc: 2829,
    birthYearFromCreation: 325,
    deathYearFromCreation: 1235,
    scriptureVerse: "Быт.5:14",
    role: "Патриарх",
  },
  {
    id: "0005",
    Person: "Малелеил",
    age: 895,
    sonBirthDay: 65,
    birthYearBc: 3674,
    deathYearBc: 2779,
    birthYearFromCreation: 395,
    deathYearFromCreation: 1290,
    scriptureVerse: "Быт.5:17",
    role: "Патриарх",
  },
  {
    id: "0006",
    Person: "Иаред",
    age: 962,
    sonBirthDay: 162,
    birthYearBc: 3512,
    deathYearBc: 2550,
    birthYearFromCreation: 460,
    deathYearFromCreation: 1422,
    scriptureVerse: "Быт.5:20",
    role: "Патриарх",
  },
  {
    id: "0007",
    Person: "Енох",
    age: 365,
    sonBirthDay: 65,
    birthYearBc: 3447,
    deathYearBc: 3082,
    birthYearFromCreation: 622,
    deathYearFromCreation: 987,
    scriptureVerse: "Быт.5:23",
    role: "Патриарх",
  },
  {
    id: "0008",
    Person: "Мафусал",
    age: 969,
    sonBirthDay: 187,
    birthYearBc: 3260,
    deathYearBc: 2291,
    birthYearFromCreation: 687,
    deathYearFromCreation: 1656,
    scriptureVerse: "Быт.5:27",
    role: "Патриарх",
  },
  {
    id: "0009",
    Person: "Ламех",
    age: 777,
    sonBirthDay: 182,
    birthYearBc: 3078,
    deathYearBc: 2301,
    birthYearFromCreation: 874,
    deathYearFromCreation: 1651,
    scriptureVerse: "Быт.5:31",
    role: "Патриарх",
  },
  {
    id: "0010",
    Person: "Ной",
    age: 950,
    sonBirthDay: 500,
    birthYearBc: 2578,
    deathYearBc: 1628,
    birthYearFromCreation: 1056,
    deathYearFromCreation: 2006,
    scriptureVerse: "Быт.9:29",
    role: "Патриарх",
  },
  {
    id: "0011",
    Person: "Сим",
    age: 600,
    sonBirthDay: 100,
    birthYearBc: 2478,
    deathYearBc: 1878,
    birthYearFromCreation: 1556,
    deathYearFromCreation: 2156,
    scriptureVerse: "Быт.11:10-11",
    role: "Патриарх",
  },
  {
    id: "0012",
    Person: "Арфаксад",
    age: 438,
    sonBirthDay: 35,
    birthYearBc: 2443,
    deathYearBc: 2005,
    birthYearFromCreation: 1656,
    deathYearFromCreation: 2094,
    scriptureVerse: "Быт.11:12-13",
    role: "Патриарх",
  },
  {
    id: "0013",
    Person: "Сала",
    age: 433,
    sonBirthDay: 30,
    birthYearBc: 2413,
    deathYearBc: 1980,
    birthYearFromCreation: 1691,
    deathYearFromCreation: 2124,
    scriptureVerse: "Быт.11:14-15",
    role: "Патриарх",
  },
  {
    id: "0014",
    Person: "Евер",
    age: 464,
    sonBirthDay: 34,
    birthYearBc: 2379,
    deathYearBc: 1915,
    birthYearFromCreation: 1721,
    deathYearFromCreation: 2185,
    scriptureVerse: "Быт.11:16-17",
    role: "Патриарх",
  },
  {
    id: "0015",
    Person: "Фалек",
    age: 239,
    sonBirthDay: 30,
    birthYearBc: 2349,
    deathYearBc: 2110,
    birthYearFromCreation: 1755,
    deathYearFromCreation: 1994,
    scriptureVerse: "Быт.11:18-19",
    role: "Патриарх",
  },
  {
    id: "0016",
    Person: "Рагав",
    age: 239,
    sonBirthDay: 32,
    birthYearBc: 2317,
    deathYearBc: 2078,
    birthYearFromCreation: 1785,
    deathYearFromCreation: 2024,
    scriptureVerse: "Быт.11:20-21",
    role: "Патриарх",
  },
  {
    id: "0017",
    Person: "Серух",
    age: 230,
    sonBirthDay: 30,
    birthYearBc: 2287,
    deathYearBc: 2057,
    birthYearFromCreation: 1817,
    deathYearFromCreation: 2047,
    scriptureVerse: "Быт.11:22-23",
    role: "Патриарх",
  },
  {
    id: "0018",
    Person: "Нахор",
    age: 148,
    sonBirthDay: 29,
    birthYearBc: 2258,
    deathYearBc: 2110,
    birthYearFromCreation: 1847,
    deathYearFromCreation: 1995,
    scriptureVerse: "Быт.11:24-25",
    role: "Патриарх",
  },
  {
    id: "0019",
    Person: "Фарра",
    age: 205,
    sonBirthDay: 70,
    birthYearBc: 2188,
    deathYearBc: 1983,
    birthYearFromCreation: 1876,
    deathYearFromCreation: 2081,
    scriptureVerse: "Быт.11:32",
    role: "Патриарх",
  },
  {
    id: "0020",
    Person: "Авраам",
    age: 175,
    sonBirthDay: 100,
    birthYearBc: 2088,
    deathYearBc: 1913,
    birthYearFromCreation: 1946,
    deathYearFromCreation: 2121,
    scriptureVerse: "Быт.25:7",
    role: "Патриарх",
  },
  {
    id: "0021",
    Person: "Исаак",
    age: 180,
    sonBirthDay: 60,
    birthYearBc: 2028,
    deathYearBc: 1848,
    birthYearFromCreation: 2046,
    deathYearFromCreation: 2226,
    scriptureVerse: "Быт.35:28-29",
    role: "Патриарх",
  },
  {
    id: "0022",
    Person: "Иаков",
    age: 147,
    sonBirthDay: 40,
    birthYearBc: 1988,
    deathYearBc: 1841,
    birthYearFromCreation: 2106,
    deathYearFromCreation: 2253,
    scriptureVerse: "Быт.47:28",
    role: "Патриарх",
  },
  {
    id: "0023",
    Person: "Иосиф",
    age: 110,
    sonBirthDay: 91,
    birthYearBc: 1897,
    deathYearBc: 1787,
    birthYearFromCreation: 2146,
    deathYearFromCreation: 2256,
    scriptureVerse: "Быт.50:22",
    role: "Патриарх",
  },
];

const Patriarch = () => {
  return <ReactFlexyTable data={data} sortable filterable globalSearch />;
};

export default Patriarch;
