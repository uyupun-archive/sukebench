from flask import Flask, jsonify
from machine_info import MachineInfo

app = Flask(__name__)

@app.route('/')
def index():
    return 'Sukebench API'

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