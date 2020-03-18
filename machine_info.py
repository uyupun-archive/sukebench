import psutil, platform, datetime, asyncio

from lib.mac_addresses import MacAddresses

class MachineInfo:
    @staticmethod
    def sec2hours(secs):
        mm, ss = divmod(secs, 60)
        hh, mm = divmod(mm, 60)
        return '%d:%02d:%02d' % (hh, mm, ss)

    @staticmethod
    def fmt_disk_partitions_response():
        return list(map(lambda partition: {
            'device': partition.device,
            'mountpoint': partition.mountpoint,
            'filesystem': partition.fstype,
            'options': partition.opts.split(','),
        }, psutil.disk_partitions()))

    @classmethod
    def fetch_cpu_info(cls):
        cpu_info = {
            'use_percent': psutil.cpu_percent(),
            'load_average': psutil.getloadavg(),
            'real_core_count': psutil.cpu_count(logical=False),
            'logical_core_count': psutil.cpu_count(),
            'clock_frequency': psutil.cpu_freq().current / 1000,
        }
        return cpu_info

    @classmethod
    def fetch_memory_info(cls):
        memory_info = {
            'total': psutil.virtual_memory().total / 1_000_000_000,
            'available': psutil.virtual_memory().available / 1_000_000_000,
            'used': psutil.virtual_memory().used / 1_000_000_000,
        }
        return memory_info

    @classmethod
    def fetch_swap_info(cls):
        swap_info = {
            'total': psutil.swap_memory().total / 1_000_000_000,
            'free': psutil.swap_memory().free / 1_000_000_000,
            'used': psutil.swap_memory().used / 1_000_000_000,
        }
        return swap_info

    @classmethod
    def fetch_disks_info(cls):
        disks_info = {
            'total': psutil.disk_usage(path='/').total / 1_000_000_000,
            'free': psutil.disk_usage(path='/').free / 1_000_000_000,
            'used': psutil.disk_usage(path='/').used / 1_000_000_000,
            'use_percent': psutil.disk_usage(path='/').percent,
            'partitions': MachineInfo.fmt_disk_partitions_response(),
            'read_count': '{:,d}'.format(psutil.disk_io_counters().read_count),
            'write_count': '{:,d}'.format(psutil.disk_io_counters().write_count),
            'read_bytes': '{:,d}'.format(psutil.disk_io_counters().read_bytes),
            'write_bytes': '{:,d}'.format(psutil.disk_io_counters().write_bytes),
        }
        return disks_info

    @classmethod
    def fetch_network_info(cls):
        asyncio.set_event_loop(asyncio.new_event_loop())
        mac_addresses = MacAddresses()
        network_info = {
            'bytes_sent': '{:,d}'.format(psutil.net_io_counters().bytes_sent),
            'bytes_recv': '{:,d}'.format(psutil.net_io_counters().bytes_recv),
            'packets_sent': '{:,d}'.format(psutil.net_io_counters().packets_sent),
            'packets_recv': '{:,d}'.format(psutil.net_io_counters().packets_recv),
            'packets_errin': '{:,d}'.format(psutil.net_io_counters().errin),
            'packets_errout': '{:,d}'.format(psutil.net_io_counters().errout),
            'packets_dropin': '{:,d}'.format(psutil.net_io_counters().dropin),
            'packets_dropout': '{:,d}'.format(psutil.net_io_counters().dropout),
            'connections': psutil.net_connections(),
            'logical_addrs': psutil.net_if_addrs(),
            'physical_addrs': mac_addresses(),
            'stats': psutil.net_if_stats(),
        }
        return network_info

    @classmethod
    def fetch_procs_info(cls):
        procs_info = {
            'procs': psutil.process_iter(['pid', 'name', 'username']),
        }
        return procs_info

    @classmethod
    def fetch_devices_info(cls):
        # sensors_temperatures, sensors_fans はmacOS環境では取れず
        devices_info = {
            'platform_name': platform.system(),
            'platform_version': platform.release(),
            'users': psutil.users(),
            'battery_percent': psutil.sensors_battery().percent,
            'battery_secleft': cls.sec2hours(psutil.sensors_battery().secsleft),
            'battery_power_plugged': psutil.sensors_battery().power_plugged,
            'boot_time': datetime.datetime.fromtimestamp(psutil.boot_time()).strftime("%Y/%m/%d %H:%M:%S"),
        }
        return devices_info

if __name__ == '__main__':
    print(MachineInfo.fetch_cpu_info())
    print(MachineInfo.fetch_memory_info())
    print(MachineInfo.fetch_swap_info())
    print(MachineInfo.fetch_disks_info())
    print(MachineInfo.fetch_procs_info())
    print(MachineInfo.fetch_devices_info())