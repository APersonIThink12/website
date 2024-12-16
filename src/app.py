from flask import Flask, request, render_template, make_response, send_file
from time import time

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/games')
def games():
    return render_template("games.html")

@app.route('/radiant-ruin')
def radiantruin():
    return render_template("radiant-ruin.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/software')
def software():
    return render_template('software.html')



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
