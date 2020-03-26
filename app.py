from flask import Flask, jsonify, render_template
from flask_bootstrap import Bootstrap
from machine_info import MachineInfo

app = Flask(__name__)
bootstrap = Bootstrap(app)

@app.route('/')
def index():
    return render_template('index.html',
                           cpu_info = MachineInfo.fetch_cpu_info(),
                           memory_info = MachineInfo.fetch_memory_info(),
                           swap_info = MachineInfo.fetch_swap_info(),
                           disks_info = MachineInfo.fetch_disks_info(),
                           network_info = MachineInfo.fetch_network_info(),
                           network_connections_info = MachineInfo.fetch_network_connections_info(),
                           procs_info = MachineInfo.fetch_procs_info(),
                           devices_info = MachineInfo.fetch_devices_info())

@app.route('/api/cpu')
def cpu():
    return jsonify(MachineInfo.fetch_cpu_info())

@app.route('/api/memory')
def memory():
    return jsonify(MachineInfo.fetch_memory_info())

@app.route('/api/swap')
def swap():
    return jsonify(MachineInfo.fetch_swap_info())

@app.route('/api/disks')
def disks():
    return jsonify(MachineInfo.fetch_disks_info())

@app.route('/api/network')
def network():
    return jsonify(MachineInfo.fetch_network_info())

@app.route('/api/network/connections')
def network_connections():
    return jsonify(MachineInfo.fetch_network_connections_info())

@app.route('/api/procs')
def procs():
    return jsonify(MachineInfo.fetch_procs_info())

@app.route('/api/devices')
def devices():
    return jsonify(MachineInfo.fetch_devices_info())

if __name__ == '__main__':
    app.run(debug=True)