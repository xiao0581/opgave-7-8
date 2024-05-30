import requests

api_url = "https://resthussager20.azurewebsites.net/api/hussagers/"
response = requests.get(api_url)
print(response.json())

