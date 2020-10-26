# Zadanie rekrutacyjne Junior React Developer
Zadanie polega na stworzeniu front-endu prostej aplikacji webowej wyświetlającej dane pobrane z API. 

## Design
[Loading Share Experience](https://invis.io/ZPRCMHD6FTG)

## Style
Do zadania dołączone są designy. Twoim zadaniem jest  ich możliwie wierna implementacja.  Możesz opierać się na gotowych bibliotekach, które odpowiednio dostosujesz, lub pisać style w 100% samodzielnie. Technologię możesz wybrać sam.  

## Dane
Do zadania dołączony został plik `db.json`. Zawiera on dane, które wyświetlać ma aplikacja. Dane powinny zostać wczytane asynchronicznie. W celu ich udostępnienia użyć możesz szablonu prostego serwera Node.js :
```
const express = require(‘express’);
const fs = require(‘fs’);
const app = express();
const cors = require(‘cors’);
app.use(cors());

app.get(‘/‘, (req, res) => {
  fs.readFile(‘db.json’, ‘utf8’,
    (err, json) => {
      res.json(JSON.parse(json));
    },
  );
});

app.listen(3001, () => console.log(`App listening on port 3001!`));
```

Struktura danych :
```
[{
  "id": "",
  "age": "",
  "address": "",
  "city": "",
  "email": "",
  "phone": "",
  "avatar": "",
  "firstName": "",
  "lastName": "",
  "jobTitle": "",
  "company": {
    "id": "",
    "name": "",
    "address": "",
    "city": "",
    "suppliers": [
      {
        "id": "",
        "name": "",
        "address": "",
        "city": ""
      }
    ]
  }
}]
```

Jak widzisz  dane  nie są znormalizowane. Każdy użytkownik posiada pole `company` , które go wartości powtarza się wielokrotnie. Podobnie jest z polem `suppliers`. Dokonaj normalizacji danych. W tym celu możesz użyć biblioteki np.: [normalizr](https://github.com/paularmstrong/normalizr)  lub dokonać normalizacji samemu. Jeżeli zdecydujesz się na drugą opcję,  postaraj się pamiętać o tym, aby rozwiązanie dawało możliwość łatwego dopasowania się do zmian struktury. 

## Aplikacja
Aplikacja powinna zostać napisana przy użyciu biblioteki React. Możesz skorzystać z `create-react-app` lub innego szablonu. Możesz używać dowolnych technologii wspierających - Redux, lub wykorzystać context api, react hooks. 

### Lista użytkowników
Wymagania:
1. Rozdziel warstwę prezentacyjną i logiczną aplikacji
2. Wyświetl listę wszystkich użytkowników 
3. Uwzglednij 'rozwijalny' widok szczegolowy elementu listy (tak jak na design)
4. Lista nie powinna zacinać się przy przewijaniu - zastosuj wirtualizację lub paginację
5. Sortowanie listy - ASC, DESC:
    * po imieniu i nazwisku użytkownika
    * po nazwie stanowiska
6. Filtrowanie:
    * po nazwie firmy - select budowany dynamicznie na podstawie danych z API
    *  po nazwie stanowiska - select budowany dynamicznie na podstawie danych z API
	
### Modal 
Wymagania: 
1. Otwarcie po kliknięciu na nazwę firmy na liście użytkowników
2.  Zmiana wyświetlanej firmy po kliknięciu na dostawcę
3. Zamknięcie modala przyciskiem lub kliknięciem poza ramką



