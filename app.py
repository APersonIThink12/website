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

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        resp = make_response(render_template("contact.html", name=name))
        resp.set_cookie('name', name)
        return resp
    name = request.cookies.get('name', None)
    return render_template("contact.html", name=name)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/software')
def software():
    return render_template('software.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
