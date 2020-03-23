import psutil, platform, datetime, asyncio

from lib.mac_addresses import MacAddresses

class MachineInfo:
    @staticmethod
    def sec2hours(secs):
        mm, ss = divmod(secs, 60)
        hh, mm = divmod(mm, 60)
        return '%d:%02d:%02d' % (hh, mm, ss)

    @staticmethod
    def fmt_load_avarage_response(load_avarage):
        return {
            'last_1_min': load_avarage[0],
            'last_5_min': load_avarage[1],
            'last_15_min': load_avarage[2],
        }

    @staticmethod
    def fmt_disk_partitions_response(disk_partitions):
        return list(map(lambda partition: {
            'device': partition.device,
            'mountpoint': partition.mountpoint,
            'filesystem': partition.fstype,
            'options': partition.opts.split(','),
        }, disk_partitions))

    @staticmethod
    def fmt_logical_addrs_response(logical_addrs):
        for interface_name, addrs in logical_addrs.items():
            logical_addrs[interface_name] = list(map(lambda addr: {
                'address_family': str(addr.family),
                'ip_address': addr.address,
                'netmask': addr.netmask,
                'broadcast_address': addr.broadcast,
                'vpn': addr.ptp,
            }, addrs))
        return logical_addrs

    @staticmethod
    def fmt_interface_stats_response(interface_stats):
        for interface_name, stats in interface_stats.items():
            interface_stats[interface_name] = {
                'nic': stats.isup,
                'duplex': stats.duplex,
                'speed': stats.speed,
                'mtu': stats.mtu,
            }
        return interface_stats

    @classmethod
    def fetch_cpu_info(cls):
        cpu_info = {
            'use_percent': psutil.cpu_percent(),
            'load_average': MachineInfo.fmt_load_avarage_response(psutil.getloadavg()),
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
            'partitions': MachineInfo.fmt_disk_partitions_response(psutil.disk_partitions()),
            'read_count': psutil.disk_io_counters().read_count,
            'write_count': psutil.disk_io_counters().write_count,
            'read_bytes': psutil.disk_io_counters().read_bytes,
            'write_bytes': psutil.disk_io_counters().write_bytes,
        }
        return disks_info

    @classmethod
    def fetch_network_info(cls):
        asyncio.set_event_loop(asyncio.new_event_loop())
        mac_addresses = MacAddresses()
        network_info = {
            'bytes_sent': psutil.net_io_counters().bytes_sent,
            'bytes_recv': psutil.net_io_counters().bytes_recv,
            'packets_sent': psutil.net_io_counters().packets_sent,
            'packets_recv': psutil.net_io_counters().packets_recv,
            'packets_errin': psutil.net_io_counters().errin,
            'packets_errout': psutil.net_io_counters().errout,
            'packets_dropin': psutil.net_io_counters().dropin,
            'packets_dropout': psutil.net_io_counters().dropout,
            'logical_addrs': MachineInfo.fmt_logical_addrs_response(psutil.net_if_addrs()),
            'physical_addrs': mac_addresses(),
            'interface_stats': MachineInfo.fmt_interface_stats_response(psutil.net_if_stats()),
        }
        return network_info

    @classmethod
    def fetch_network_connections_info(cls):
        network_connections_info = psutil.net_connections()
        return network_connections_info

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