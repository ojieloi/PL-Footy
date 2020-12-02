import requests

url = "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2"

headers = {
    'x-rapidapi-key': "34d1ce296amshba5abd0f38a4c1fp1f31f8jsnb6be286f80e5",
    'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
    }

response = requests.request("GET", url, headers=headers)

print(response.text)