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

def fetch_memory_info():
    memory_info = {
        'total': psutil.virtual_memory().total / 1_000_000_000,
        'available': psutil.virtual_memory().available / 1_000_000_000,
        'used': psutil.virtual_memory().used / 1_000_000_000,
    }
    return memory_info

@app.route('/')
def index():
    return render_template('index.html', cpu_info = fetch_cpu_info(), memory_info = fetch_memory_info())

if __name__ == '__main__':
    app.run(debug=True)