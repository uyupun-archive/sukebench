from flask import Flask, render_template
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
                           procs_info = MachineInfo.fetch_procs_info(),
                           device_info = MachineInfo.fetch_device_info())

if __name__ == '__main__':
    app.run(debug=True)