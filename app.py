import psutil

from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

def fetch_cpu_info():
    cpu_info = {
        'real_count': psutil.cpu_count(logical=False),
        'logical_count': psutil.cpu_count(),
        'use_rate': psutil.cpu_percent(),
        'frequency': psutil.cpu_freq().current / 1000,
        'load_average': psutil.getloadavg(),
    }
    return cpu_info

@app.route('/')
def index():
    return render_template('index.html', cpu_info = fetch_cpu_info())

if __name__ == '__main__':
    app.run(debug=True)