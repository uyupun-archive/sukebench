import subprocess, shutil, re, traceback, asyncio

from mac_vendor_lookup import MacLookup, AsyncMacLookup

class InvalidMacError(Exception):
    pass

class MacAddress:
    def __init__(self):
        self.mac_lookup = MacLookup()
        self.mac_lookup.load_vendors()
        self.mac_addresses = self.__fetch_mac_address()

    def __fetch_mac_address(self):
        return self.__fmt_ip_address_cmd()

    def __fmt_ip_address_cmd(self):
        interfaces = self.__exec_ip_address_cmd()
        mac_addresses = {}
        for interface in interfaces:
            if re.fullmatch(r'[a-zA-Z0-9]+:\s.+$', interface):
                interface_name = re.findall(r'[a-zA-Z0-9]+', interface)[0]
                mac_addresses[interface_name] = {
                    'address': None,
                    'vendor': None,
                }
            elif re.fullmatch(r'\tether.+$', interface):
                address = re.findall(r'[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}', interface)[0]
                mac_addresses[interface_name] = {
                    'address': address,
                    'vendor': self.__lookup_org_by_oui(address),
                }
        return mac_addresses

    def __lookup_org_by_oui(self, mac_address):
        oui = MacAddress.translate_oui(mac_address)
        return self.mac_lookup.lookup(mac_address) if oui in self.mac_lookup.async_lookup.prefixes else None

    @staticmethod
    def translate_oui(mac_address):
        oui = mac_address.replace(':', '').replace('-', '').upper()
        try:
            int(oui, 16)
        except ValueError:
            raise InvalidMacError('{} contains unexpected character'.format(mac_address))
        if len(oui) > 12:
            raise InvalidMacError('{} is not a valid MAC address (too long)'.format(mac_address))
        if type(oui) == str:
            oui = oui.encode('utf8')
        return oui[:6]

    def __exec_ip_address_cmd(self):
        try:
            if (not shutil.which('ip')):
                raise Exception('ip: command not found')
        except Exception as e:
            print(e)
            exit()
        else:
            return subprocess.run(['ip', 'address'], stdout = subprocess.PIPE, stderr = subprocess.PIPE).stdout.decode('utf8').split('\n')

if __name__ == '__main__':
    mac_addresses = MacAddress().mac_addresses
    print(mac_addresses)