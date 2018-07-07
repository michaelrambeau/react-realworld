# NBA Players Mock API

## Players

Data from https://github.com/bttmly/nba/blob/master/data/players.json

```json
{
  "firstName": "Stephen",
  "lastName": "Curry",
  "playerId": 201939,
  "teamId": 1610612744
}
```

In our API layer, we use `id` instead of `playerId`

## Teams

Data from https://github.com/bttmly/nba/blob/master/data/teams.json

```json
{
  "teamId": 1610612738,
  "abbreviation": "BOS",
  "teamName": "Boston Celtics",
  "simpleName": "Celtics",
  "location": "Boston"
}
```

In our API layer, we use `id` instead of `teamId` and `name` instead of `teamName`
