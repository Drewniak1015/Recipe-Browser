# Recipe Browser

Aplikacja webowa, która pozwala użytkownikom wyszukiwać, odkrywać i przeglądać przepisy z różnych kuchni. Aplikacja korzysta z zewnętrznego API do pobierania danych i prezentowania ich w uporządkowany i przyjazny sposób.

## Funkcje

- **Wyszukiwanie przepisów**: Użytkownicy mogą wyszukiwać przepisy na podstawie składników, nazwy lub kategorii.
- **Szczegóły przepisu**: Wyświetlanie pełnych informacji o przepisie, w tym składników, instrukcji i wartości odżywczych.
- **Przyjazny interfejs użytkownika**: Intuicyczny i responsywny design umożliwiający łatwe przeglądanie przepisów.
- 
## Demo

Możesz zobaczyć działającą wersję aplikacji na żywo pod tym [linkiem](https://drewniak1015.github.io/Recipe-Browser/).

## Wykorzystane API

Projekt korzysta z API przepisów do pobierania danych i zapewniania informacji o przepisach w czasie rzeczywistym. API oferuje punkty końcowe, które pozwalają użytkownikom wyszukiwać przepisy na podstawie składników, kategorii i nazw.

### Dokumentacja API

- **Adres bazowy**: `https://api.spoonacular.com/recipes`

  
**Uwaga**: Aby korzystać z API, potrzebny będzie klucz API. [Zarejestruj się tutaj](https://spoonacular.com/food-api), aby uzyskać swój klucz API.

## Instalacja

1. Sklonuj repozytorium na swoją maszynę:
    ```bash
    git clone https://github.com/twoja-nazwa-uzytkownika/recipe-browser.git
    ```

2. Zainstaluj wymagane zależności:
    ```bash
    cd recipe-browser
    npm install
    ```

3. Dodaj swój klucz API do pliku `.env` (musisz stworzyć ten plik):
    ```
    REACT_APP_API_KEY=twój_klucz_api
    ```

4. Uruchom aplikację:
    ```bash
    npm start
    ```

## Użycie

Po uruchomieniu aplikacji, otwórz ją w przeglądarce, aby zacząć wyszukiwać przepisy. Możesz używać filtrów do wyszukiwania przepisów na podstawie składników lub kategorii.

