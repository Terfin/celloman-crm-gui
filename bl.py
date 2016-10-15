import requests as r

def try_login_user(username, password, user):
    req = r.post('http://127.0.0.1:5000/login/', json={'username': username, 'password': password})
    if req.status_code == 200:
        user = req.json()
        return True
    else:
        return False
