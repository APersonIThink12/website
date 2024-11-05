from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/games')
def games():
    return render_template("games.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
