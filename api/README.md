# Dokumentacja API

## Informacje wstępne

API działa domyślnie na porcie 8080 (taki jest ustawiony w konfiguracji, która mieści się w pliku `.env`).

## Zasoby

Poniżej znajduje się lista wszystkich zasobów obsługiwanych przez API. Każdy zasób jest pokrótce opisany i opatrzony dwiema tabelami. Pierwsza z nich opisuje pola zasobu i wymagania co do ich obecności i zawartości. Druga tabela wymienia akcje, które mogą zostać wykonane na zasobie i podaje możliwe wyniki ich wykonania.

Należy dodać, że poza wymienionymi atrybutami, każdy zasób posiada także identyfikator (id) w postaci klucza sztucznego - są to kolejne liczby naturalne, począwszy od 1.

Każda akcja powinna zwrócić odpowiedź, której status będzie jednym z wymienionych w tabeli. Należy jednak pamiętać, że w przypadku problemów po stronie serwera może zostać zwrócona odpowiedź o kodzie 5xx, np. 500.

Każda akcja ma zdefiniowaną metodę HTTP i ścieżkę, w której mogą wystąpić zmienne (np. `{id}`). W ich miejsce należy wstawić konkretną wartość

### students
Zasób ten przechowuje informacje na temat poszczególnych **studentów**.

#### Atrybuty

| Nazwa atrybutu | Opis atrybutu     | Typ                       | Wymagane |
| -------------- | ----------------- | ------------------------- | -------- |
| firstName      | Imię studenta     | Tekst (od 1 do 30 znaków) | Tak      |
| lastName       | Nazwisko studenta | Tekst (od 1 do 30 znaków) | Tak      |

#### Akcje

| Metoda HTTP i ścieżka | Opis                                                         | Zwracany status HTTP                                         |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| GET /students         | Pobiera listę z informacjami na temat wszystkich studentów. Informacje te zawierają także ich identyfikatory. | **200 (OK)**                                                 |
| GET /students/{id}    | Pobiera informacje na temat wybranego studenta, wskazanego przy użyciu jego identyfikatora. | **200 (OK)** w razie powodzenia; **404 (Not found)** w przypadku, gdy student o podanym ID nie istnieje |
| POST /students        | Wstawia informacje na temat jednego studenta. Wymaga przesłania danych studenta w ciele pakietu, w formacie opisanym w pierwszej tabeli. | **201 (Created)** w razie powodzenia; **400 (Bad request)** w razie błędu walidacji |
| PUT /students/{id}    | Aktualizuje dane studenta o danym identyfikatorze. Wymagane jest przesłanie wszystkich danych studenta w ciele pakietu, w formacie opisanym w pierwszej tabeli. | **200 (OK)** w razie powodzenia; **404 (Not found)** w przypadku, gdy student o podanym identyfikatorze nie istnieje; **400 (Bad request)** w razie błędu walidacji |
| DELETE /students/{id} | Usuwa studenta o podanym identyfikatorze.                    | **200 (OK) w razie powodzenia**; **404 (Not found)** w przypadku, gdy student o podanym identyfikatorze nie istnieje |

### faculties

Zasób ten przechowuje informacje na temat poszczególnych **wydziałów**.

#### Atrybuty

| Nazwa atrybutu | Opis atrybutu  | Typ                        | Wymagane |
| -------------- | -------------- | -------------------------- | -------- |
| name           | Nazwa wydziału | Tekst (od 1 do 100 znaków) | Tak      |
| address        | Adres wydziału | Tekst (od 1 do 100 znaków) | Tak      |

#### Akcje

| Metoda HTTP i ścieżka  | Opis                                                         | Zwracany status HTTP                                         |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| GET /faculties         | Pobiera listę z informacjami na temat wszystkich wydziałów. Informacje te zawierają także ich identyfikatory. | **200 (OK)**                                                 |
| GET /faculties/{id}    | Pobiera informacje na temat wybranego wydziału, wskazanego przy użyciu jego identyfikatora. | **200 (OK)** w razie powodzenia; **404 (Not found)** w przypadku, gdy wydział o podanym identyfikatorze nie istnieje |
| POST /faculties        | Wstawia informacje na temat jednego wydziału. Wymaga przesłania danych wydziału w ciele pakietu, w formacie opisanym w pierwszej tabeli. | **201 (Created)** w razie powodzenia; **400 (Bad request)** w razie błędu walidacji |
| PUT /faculties/{id}    | Aktualizuje dane wydziału o danym identyfikatorze. Wymagane jest przesłanie wszystkich danych wydziału w ciele pakietu, w formacie opisanym w pierwszej tabeli. | **200 (OK)** w razie powodzenia; **404 (Not found)** w przypadku, gdy wydział o podanym identyfikatorze nie istnieje; **400 (Bad request)** w razie błędu walidacji |
| DELETE /faculties/{id} | Usuwa wydział o podanym identyfikatorze.                     | **200 (OK) w razie powodzenia**; **404 (Not found)** w przypadku, gdy wydział o podanym identyfikatorze nie istnieje |

