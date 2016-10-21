from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET'], defaults={'path': ''})
def main(path):
    return render_template('main.html')

@app.errorhandler(404)
def other(e):
    return render_template('main.html')

if __name__ == '__main__':
    app.run(port=5001)