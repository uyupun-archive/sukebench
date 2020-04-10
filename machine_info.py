import psutil, platform, datetime, asyncio

from lib.mac_addresses import MacAddresses

class MachineInfo:
    @staticmethod
    def sec2hours(secs):
        mm, ss = divmod(secs, 60)
        hh, mm = divmod(mm, 60)
        return '%d:%02d:%02d' % (hh, mm, ss)

    @staticmethod
    def fmt_cpu_load_avarage(load_avarage):
        return {
            'last_1_min': load_avarage[0],
            'last_5_min': load_avarage[1],
            'last_15_min': load_avarage[2],
        }

    @staticmethod
    def fmt_disks_disk_partitions(disk_partitions):
        return list(map(lambda partition: {
            'device': partition.device,
            'mountpoint': partition.mountpoint,
            'filesystem': partition.fstype,
            'options': partition.opts.split(','),
        }, disk_partitions))

    @staticmethod
    def fmt_network_logical_addrs(logical_addrs):
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
    def fmt_network_interface_stats(interface_stats):
        for interface_name, stats in interface_stats.items():
            interface_stats[interface_name] = {
                'nic': stats.isup,
                'duplex': stats.duplex,
                'speed': stats.speed,
                'mtu': stats.mtu,
            }
        return interface_stats

    @staticmethod
    def fmt_network_connections(network_connections):
        return list(map(lambda connection: {
            'file_descriptor': connection.fd,
            'address_family': str(connection.family),
            'address_type': str(connection.type),
            'local_ip_address': connection.laddr.ip,
            'local_port_number': connection.laddr.port,
            'remote_ip_address': connection.raddr.ip if 'ip' in connection.raddr else None,
            'remote_port_number': connection.raddr.port if 'port' in connection.raddr else None,
            'status': connection.status,
            'pid': connection.pid,
        }, network_connections))

    @staticmethod
    def fmt_procs(procs):
        return list(map(lambda proc: {
            'pid': proc.info['pid'],
            'name': proc.info['name'],
            'username': proc.info['username'],
        }, procs))

    @staticmethod
    def fmt_proc_memories(memories):
        return {
            'rss': memories.rss,
            'vms': memories.vms,
            'pfaults': memories.pfaults,
            'pageins': memories.pageins,
        }

    @staticmethod
    def fmt_proc_ctx_switch_num(ctx_switch_num):
        return {
            'voluntary': ctx_switch_num.voluntary,
            'involuntary': ctx_switch_num.involuntary,
        }

    @staticmethod
    def fmt_proc_connections(connections):
        return list(map(lambda connection: {
            'file_descriptor': connection.fd,
            'address_family': str(connection.family),
            'address_type': str(connection.type),
            'local_ip_address': connection.laddr.ip,
            'local_port_number': connection.laddr.port,
            'remote_ip_address': connection.raddr.ip if 'ip' in connection.raddr else None,
            'remote_port_number': connection.raddr.port if 'port' in connection.raddr else None,
            'status': connection.status,
        }, connections))

    @staticmethod
    def fmt_devices_users(users):
        return list(map(lambda user: {
            'name': user.name,
            'host': user.host,
            'terminal': user.terminal,
            'started_at': datetime.datetime.fromtimestamp(user.started).strftime("%Y/%m/%d %H:%M:%S"),
            'login_process': user.pid,
        }, users))

    @classmethod
    def fetch_cpu_info(cls):
        return {
            'use_percent': psutil.cpu_percent(),
            'load_average': MachineInfo.fmt_cpu_load_avarage(psutil.getloadavg()),
            'real_core_count': psutil.cpu_count(logical=False),
            'logical_core_count': psutil.cpu_count(),
            'clock_frequency': psutil.cpu_freq().current / 1000,
        }

    @classmethod
    def fetch_memory_info(cls):
        return {
            'total': psutil.virtual_memory().total / 1_000_000_000,
            'available': psutil.virtual_memory().available / 1_000_000_000,
            'used': psutil.virtual_memory().used / 1_000_000_000,
        }

    @classmethod
    def fetch_swap_info(cls):
        return {
            'total': psutil.swap_memory().total / 1_000_000_000,
            'free': psutil.swap_memory().free / 1_000_000_000,
            'used': psutil.swap_memory().used / 1_000_000_000,
        }

    @classmethod
    def fetch_disks_info(cls):
        return {
            'total': psutil.disk_usage(path='/').total / 1_000_000_000,
            'free': psutil.disk_usage(path='/').free / 1_000_000_000,
            'used': psutil.disk_usage(path='/').used / 1_000_000_000,
            'use_percent': psutil.disk_usage(path='/').percent,
            'partitions': MachineInfo.fmt_disks_disk_partitions(psutil.disk_partitions()),
            'read_count': psutil.disk_io_counters().read_count,
            'write_count': psutil.disk_io_counters().write_count,
            'read_bytes': psutil.disk_io_counters().read_bytes,
            'write_bytes': psutil.disk_io_counters().write_bytes,
        }

    @classmethod
    def fetch_network_info(cls):
        asyncio.set_event_loop(asyncio.new_event_loop())
        mac_addresses = MacAddresses()
        return {
            'bytes_sent': psutil.net_io_counters().bytes_sent,
            'bytes_recv': psutil.net_io_counters().bytes_recv,
            'packets_sent': psutil.net_io_counters().packets_sent,
            'packets_recv': psutil.net_io_counters().packets_recv,
            'packets_errin': psutil.net_io_counters().errin,
            'packets_errout': psutil.net_io_counters().errout,
            'packets_dropin': psutil.net_io_counters().dropin,
            'packets_dropout': psutil.net_io_counters().dropout,
            'logical_addrs': MachineInfo.fmt_network_logical_addrs(psutil.net_if_addrs()),
            'physical_addrs': mac_addresses(),
            'interface_stats': MachineInfo.fmt_network_interface_stats(psutil.net_if_stats()),
        }

    @classmethod
    def fetch_network_connections_info(cls):
        return MachineInfo.fmt_network_connections(psutil.net_connections())

    @classmethod
    def fetch_procs_info(cls):
        return MachineInfo.fmt_procs(psutil.process_iter(['pid', 'name', 'username']))

    @classmethod
    def fetch_proc_info(cls, pid=1):
        proc = psutil.Process(pid)
        return {
            'pid': proc.pid,
            'ppid': proc.ppid(),
            'name': proc.name(),
            'exe': proc.exe(),
            'cmd': proc.cmdline(),
            'env': proc.environ(),
            'created_at': datetime.datetime.fromtimestamp(proc.create_time()).strftime("%Y/%m/%d %H:%M:%S"),
            'status': proc.status(),
            'cwd': proc.cwd(),
            'username': proc.username(),
            'terminal': proc.terminal(),
            'nice': proc.nice(),
            'ctx_switch_num': MachineInfo.fmt_proc_ctx_switch_num(proc.num_ctx_switches()),
            'file_descriptor_num': proc.num_fds(),
            'thread_num': proc.num_threads(),
            'cpu_percent': proc.cpu_percent(interval=None),
            'memories': MachineInfo.fmt_proc_memories(proc.memory_info()),
            'connections': MachineInfo.fmt_proc_connections(proc.connections()),
        }

    @classmethod
    def fetch_devices_info(cls):
        # sensors_temperatures, sensors_fans はmacOS環境では取れず
        return {
            'platform_name': platform.system(),
            'platform_version': platform.release(),
            'users': MachineInfo.fmt_devices_users(psutil.users()),
            'battery_percent': psutil.sensors_battery().percent,
            'battery_secleft': cls.sec2hours(psutil.sensors_battery().secsleft),
            'battery_power_plugged': psutil.sensors_battery().power_plugged,
            'boot_time': datetime.datetime.fromtimestamp(psutil.boot_time()).strftime("%Y/%m/%d %H:%M:%S"),
        }

if __name__ == '__main__':
    print(MachineInfo.fetch_cpu_info())
    print(MachineInfo.fetch_memory_info())
    print(MachineInfo.fetch_swap_info())
    print(MachineInfo.fetch_disks_info())
    print(MachineInfo.fetch_procs_info())
    print(MachineInfo.fetch_devices_info())