export interface ICpu {
  "use_percent": number;
  "load_average": TLoadAverage;
  "real_core_count": number;
  "logical_core_count": number;
  "clock_frequency": number;
}

export type TLoadAverage = {
  "last_1_min": number;
  "last_5_min": number;
  "last_15_min": number;
};

export interface IMemory {
  "total": number;
  "available": number;
  "used": number;
}

export interface ISwap {
  "total": number;
  "free": number;
  "used": number;
}

export interface IDisks {
  "total": number;
  "free": number;
  "used": number;
  "use_percent": number;
  "partitions": TPartitions[];
  "read_count": number;
  "read_bytes": number;
  "write_count": number;
  "write_bytes": number;
}

export type TPartitions = {
  "device": string;
  "mountpoint": string;
  "filesystem": string;
  "options": string[];
};

export interface INetwork {
  "bytes_sent": number;
  "packets_sent": number;
  "bytes_recv": number;
  "packets_recv": number;
  "packets_errin": number;
  "packets_errout": number;
  "packets_dropin": number;
  "packets_dropout": number;
  "physical_addrs": TPhysicalAddrs;
  "interface_stats": TInterfaceStats;
  "logical_addrs": TLogicalAddrs;
}

export type TPhysicalAddrs = {
  [key: string]: TPhysicalAddrsChild;
};

export type TPhysicalAddrsChild = {
  "address": string | null;
  "vendor": string | null;
};

export type TInterfaceStats = {
  [key: string]: TInterfaceStatsChild;
};

export type TInterfaceStatsChild = {
  "nic": boolean;
  "duplex": number;
  "speed": number;
  "mtu": number;
};

export type TLogicalAddrs = {
  [key: string]: TLogicalAddrsChild[];
};

export type TLogicalAddrsChild = {
  "address_family": string | null;
  "ip_address": string | null;
  "netmask": string | null;
  "broadcast_address": string | null;
  "vpn": string | null;
};

export interface INetworkCon {
  "file_descriptor": number;
  "address_family": string;
  "address_type": string;
  "local_ip_address": string | null;
  "local_port_number": number | null;
  "remote_ip_address": string | null;
  "remote_port_number": number | null;
  "status": string;
  "pid": number;
}

export interface IProcesses {
  "pid": number;
  "name": string;
  "username": string;
}

export interface IDevices {
  "users": TUsers;
  "battery_percent": number;
  "battery_secleft": string;
  "battery_power_plugged": boolean;
  "boot_time": string;
  "platform_name": string;
  "platform_version": string;
}

export type TUsers = {
  "name": string;
  "terminal": string;
  "host": string | null;
  "started_at": string;
  "login_process": number;
};
