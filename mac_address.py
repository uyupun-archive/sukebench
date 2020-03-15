import subprocess, re

class MacAddress:
    def __init__(self):
        self.mac_addresses = self.__fetch_mac_address()

    def __fetch_mac_address(self):
        return self.__fmt_ip_address_cmd()

    def __fmt_ip_address_cmd(self):
        interfaces = self.__exec_ip_address_cmd()
        mac_addresses = {}
        for interface in interfaces:
            if re.fullmatch(r'[a-zA-Z0-9]+:\s.+$', interface):
                interface_name = re.findall(r'[a-zA-Z0-9]+', interface)[0]
                mac_addresses[interface_name] = None
            elif re.fullmatch(r'\tether.+$', interface):
                mac_addresses[interface_name] = re.findall(r'[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}', interface)[0]
        return mac_addresses

    def __exec_ip_address_cmd(self):
        return subprocess.run(['ip', 'address'], stdout = subprocess.PIPE, stderr = subprocess.PIPE).stdout.decode('utf8').split('\n')

if __name__ == '__main__':
    mac_addresses = MacAddress().mac_addresses
    print(mac_addresses)