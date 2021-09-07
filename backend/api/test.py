import requests

r = requests.post("http://127.0.0.1:8000//login/", data = {'username' : "admin" , 'password' : "common123"})

print(r)