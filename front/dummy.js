export const cpuDummyData = {
  'use_percent': 40.6,
  'load_average': {
    'last_15_min': 3.0283203125,
    'last_1_min': 2.25048828125,
    'last_5_min': 2.65625
  },
  'real_core_count': 2,
  'logical_core_count': 4,
  'clock_frequency': 2.4
}

export const memoryDummyData = {
  'total': 17.179869184,
  'available': 6.51087872,
  'used': 9.543540736
};

export const swapDummyData = {
  'total': 3.221225472,
  'free': 1.757413376,
  'used': 1.463812096
};

export const disksDummyData = {
  'total': 499.963174912,
  'free': 70.968365056,
  'used': 10.985254912,
  'use_percent': 13.4,
  'partitions': [
    {
      'device': '/dev/disk1s5',
      'mountpoint': '/',
      'filesystem': 'apfs',
      'options': [
        'ro',
        'local',
        'rootfs',
        'dovolfs',
        'journaled',
        'multilabel'
      ]
    },
    {
      'device': '/dev/disk1s5',
      'mountpoint': '/',
      'filesystem': 'apfs',
      'options': [
        'ro',
        'local',
        'rootfs',
        'dovolfs',
        'journaled',
        'multilabel'
      ]
    },
    {
      'device': '/dev/disk1s5',
      'mountpoint': '/',
      'filesystem': 'apfs',
      'options': [
        'ro',
        'local',
        'rootfs',
        'dovolfs',
        'journaled',
        'multilabel'
      ]
    }
  ],
  'read_count': 6174919,
  'read_bytes': 440117825732608,
  'write_count': 5558551,
  'write_bytes': 183641661
};

export const networkDummyData = {
  'bytes_recv': 14997894144,
  'bytes_sent': 5768472576,
  'interface_stats': {
    'XHC0': {
      'duplex': 0,
      'mtu': 0,
      'nic': false,
      'speed': 0
    },
    'XHC20': {
      'duplex': 0,
      'mtu': 0,
      'nic': false,
      'speed': 0
    },
    'awdl0': {
      'duplex': 0,
      'mtu': 1484,
      'nic': true,
      'speed': 0
    },
    'bridge0': {
      'duplex': 0,
      'mtu': 1500,
      'nic': true,
      'speed': 0
    },
    'en0': {
      'duplex': 0,
      'mtu': 1500,
      'nic': true,
      'speed': 0
    },
    'en1': {
      'duplex': 2,
      'mtu': 1500,
      'nic': true,
      'speed': 0
    },
    'en2': {
      'duplex': 2,
      'mtu': 1500,
      'nic': true,
      'speed': 0
    },
    'gif0': {
      'duplex': 0,
      'mtu': 1280,
      'nic': false,
      'speed': 0
    },
    'llw0': {
      'duplex': 0,
      'mtu': 1500,
      'nic': true,
      'speed': 0
    },
    'lo0': {
      'duplex': 0,
      'mtu': 16384,
      'nic': true,
      'speed': 0
    },
    'p2p0': {
      'duplex': 0,
      'mtu': 2304,
      'nic': true,
      'speed': 0
    },
    'stf0': {
      'duplex': 0,
      'mtu': 1280,
      'nic': false,
      'speed': 0
    },
    'utun0': {
      'duplex': 0,
      'mtu': 1380,
      'nic': true,
      'speed': 0
    },
    'utun1': {
      'duplex': 0,
      'mtu': 2000,
      'nic': true,
      'speed': 0
    }
  },
  'logical_addrs': {
    'awdl0': [
      {
        'address_family': 'AddressFamily.AF_LINK',
        'broadcast_address': null,
        'ip_address': '1e:70:ff:ff:ff:ff',
        'netmask': null,
        'vpn': null
      },
      {
        'address_family': 'AddressFamily.AF_INET6',
        'broadcast_address': null,
        'ip_address': 'fe80::1c70:ffff:ffff:ffff%awdl0',
        'netmask': 'ffff:ffff:ffff:ffff::',
        'vpn': null
      }
    ],
    'bridge0': [
      {
        'address_family': 'AddressFamily.AF_LINK',
        'broadcast_address': null,
        'ip_address': '82:7c:ff:ff:ff:ff',
        'netmask': null,
        'vpn': null
      }
    ],
    'en0': [
      {
        'address_family': 'AddressFamily.AF_INET',
        'broadcast_address': '192.168.0.255',
        'ip_address': '192.168.0.1',
        'netmask': '255.255.255.0',
        'vpn': null
      },
      {
        'address_family': 'AddressFamily.AF_LINK',
        'broadcast_address': null,
        'ip_address': 'dc:a9:ff:ff:ff:ff',
        'netmask': null,
        'vpn': null
      },
      {
        'address_family': 'AddressFamily.AF_INET6',
        'broadcast_address': null,
        'ip_address': 'fe80::1003:ffff:ffff:ffff%en0',
        'netmask': 'ffff:ffff:ffff:ffff::',
        'vpn': null
      },
      {
        'address_family': 'AddressFamily.AF_INET6',
        'broadcast_address': null,
        'ip_address': '2001:ce8:fff:ffff:ffff:ffff:ff:ffff',
        'netmask': 'ffff:ffff:ffff:ffff::',
        'vpn': null
      },
      {
        'address_family': 'AddressFamily.AF_INET6',
        'broadcast_address': null,
        'ip_address': '2001:ce8:fff:ffff:ffff:ffff:ff:ffff',
        'netmask': 'ffff:ffff:ffff:ffff::',
        'vpn': null
      }
    ],
    'en1': [
      {
        'address_family': 'AddressFamily.AF_LINK',
        'broadcast_address': null,
        'ip_address': '82:7c:ff:ff:ff:ff',
        'netmask': null,
        'vpn': null
      }
    ],
    'en2': [
      {
        'address_family': 'AddressFamily.AF_LINK',
        'broadcast_address': null,
        'ip_address': '82:7c:ff:ff:ff:ff',
        'netmask': null,
        'vpn': null
      }
    ],
    'llw0': [
      {
        'address_family': 'AddressFamily.AF_LINK',
        'broadcast_address': null,
        'ip_address': '1e:70:ff:ff:ff:ff',
        'netmask': null,
        'vpn': null
      },
      {
        'address_family': 'AddressFamily.AF_INET6',
        'broadcast_address': null,
        'ip_address': 'fe80::1c70:ffff:ffff:ffff%llw0',
        'netmask': 'ffff:ffff:ffff:ffff::',
        'vpn': null
      }
    ],
    'lo0': [
      {
        'address_family': 'AddressFamily.AF_INET',
        'broadcast_address': null,
        'ip_address': '127.0.0.1',
        'netmask': '255.0.0.0',
        'vpn': null
      },
      {
        'address_family': 'AddressFamily.AF_INET6',
        'broadcast_address': null,
        'ip_address': '::1',
        'netmask': 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
        'vpn': null
      },
      {
        'address_family': 'AddressFamily.AF_INET6',
        'broadcast_address': null,
        'ip_address': 'ffff::1%lo0',
        'netmask': 'ffff:ffff:ffff:ffff::',
        'vpn': null
      }
    ],
    'p2p0': [
      {
        'address_family': 'AddressFamily.AF_LINK',
        'broadcast_address': null,
        'ip_address': '0e:a9:ff:ff:ff:ff',
        'netmask': null,
        'vpn': null
      }
    ],
    'utun0': [
      {
        'address_family': 'AddressFamily.AF_INET6',
        'broadcast_address': null,
        'ip_address': 'fe80::dc3a:ffff:ffff:ffff%utun0',
        'netmask': 'ffff:ffff:ffff:ffff::',
        'vpn': null
      }
    ],
    'utun1': [
      {
        'address_family': 'AddressFamily.AF_INET6',
        'broadcast_address': null,
        'ip_address': 'fe80::c41f:ffff:ffff:ffff%utun1',
        'netmask': 'ffff:ffff:ffff:ffff::',
        'vpn': null
      }
    ]
  },
  'packets_dropin': 0,
  'packets_dropout': 0,
  'packets_errin': 0,
  'packets_errout': 0,
  'packets_recv': 17557528,
  'packets_sent': 12768355,
  'physical_addrs': {
    'XHC0': {
      'address': null,
      'vendor': null
    },
    'XHC20': {
      'address': null,
      'vendor': null
    },
    'awdl0': {
      'address': '1e:70:ff:ff:ff:ff',
      'vendor': null
    },
    'bridge0': {
      'address': '82:7c:ff:ff:ff:ff',
      'vendor': null
    },
    'en0': {
      'address': 'dc:a9:ff:ff:ff:ff',
      'vendor': 'Apple, Inc.'
    },
    'en1': {
      'address': '82:7c:ff:ff:ff:ff',
      'vendor': null
    },
    'en2': {
      'address': '82:7c:ff:ff:ff:ff',
      'vendor': null
    },
    'gif0': {
      'address': null,
      'vendor': null
    },
    'llw0': {
      'address': '1e:70:ff:ff:ff:ff',
      'vendor': null
    },
    'lo0': {
      'address': null,
      'vendor': null
    },
    'p2p0': {
      'address': '0e:a9:ff:ff:ff:ff',
      'vendor': null
    },
    'stf0': {
      'address': null,
      'vendor': null
    },
    'utun0': {
      'address': null,
      'vendor': null
    },
    'utun1': {
      'address': null,
      'vendor': null
    }
  }
}

export const networkConnectionsDummyData = [
  {
    'address_family': 'AddressFamily.AF_INET',
    'address_type': 'SocketKind.SOCK_STREAM',
    'file_descriptor': 75,
    'local_ip_address': '127.0.0.1',
    'local_port_number': 59238,
    'pid': 39833,
    'remote_ip_address': null,
    'remote_port_number': null,
    'status': 'ESTABLISHED'
  },
  {
    'address_family': 'AddressFamily.AF_INET',
    'address_type': 'SocketKind.SOCK_STREAM',
    'file_descriptor': 78,
    'local_ip_address': '192.168.0.1',
    'local_port_number': 59233,
    'pid': 39833,
    'remote_ip_address': null,
    'remote_port_number': null,
    'status': 'ESTABLISHED'
  },
  {
    'address_family': 'AddressFamily.AF_INET',
    'address_type': 'SocketKind.SOCK_STREAM',
    'file_descriptor': 87,
    'local_ip_address': '192.168.0.1',
    'local_port_number': 59207,
    'pid': 39833,
    'remote_ip_address': null,
    'remote_port_number': null,
    'status': 'ESTABLISHED'
  },
  {
    'address_family': 'AddressFamily.AF_INET',
    'address_type': 'SocketKind.SOCK_STREAM',
    'file_descriptor': 89,
    'local_ip_address': '192.168.0.1',
    'local_port_number': 59208,
    'pid': 39833,
    'remote_ip_address': null,
    'remote_port_number': null,
    'status': 'CLOSE_WAIT'
  },
  {
    'address_family': 'AddressFamily.AF_INET',
    'address_type': 'SocketKind.SOCK_STREAM',
    'file_descriptor': 90,
    'local_ip_address': '192.168.0.1',
    'local_port_number': 59219,
    'pid': 39833,
    'remote_ip_address': null,
    'remote_port_number': null,
    'status': 'ESTABLISHED'
  },
  {
    'address_family': 'AddressFamily.AF_INET',
    'address_type': 'SocketKind.SOCK_STREAM',
    'file_descriptor': 93,
    'local_ip_address': '192.168.0.1',
    'local_port_number': 59210,
    'pid': 39833,
    'remote_ip_address': null,
    'remote_port_number': null,
    'status': 'CLOSE_WAIT'
  }
];

export const processesDummyData = [
  {
    'name': 'kernel_task',
    'pid': 0,
    'username': 'root'
  },
  {
    'name': 'launchd',
    'pid': 1,
    'username': 'root'
  },
  {
    'name': 'syslogd',
    'pid': 88,
    'username': 'root'
  },
  {
    'name': 'UserEventAgent',
    'pid': 89,
    'username': 'root'
  },
  {
    'name': 'uninstalld',
    'pid': 92,
    'username': 'root'
  },
  {
    'name': 'kextd',
    'pid': 93,
    'username': 'root'
  },
  {
    'name': 'fseventsd',
    'pid': 94,
    'username': 'root'
  },
  {
    'name': 'mediaremoted',
    'pid': 95,
    'username': 'root'
  }
];

export const devicesDummyData = {
  'battery_percent': 67,
  'battery_power_plugged': true,
  'battery_secleft': '-1:59:58',
  'boot_time': '2020/03/12 15:51:44',
  'platform_name': 'Darwin',
  'platform_version': '19.3.0',
  'users': [
    {
      'host': null,
      'login_process': 183,
      'name': 'username',
      'started_at': '2020/03/12 16:25:52',
      'terminal': 'console'
    }
  ]
}
