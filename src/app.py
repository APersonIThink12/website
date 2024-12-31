from flask import Flask, render_template, send_file

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/games')
def games():
    return render_template("games.html")

@app.route('/games/radiant-ruin')
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

@app.route('/software/ratchet')
def ratchet():
    return render_template('ratchet.html')

@app.route('/downloadRatchet')
def download_ratchet():
    return send_file('static/ratchet_installer.exe', as_attachment=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
