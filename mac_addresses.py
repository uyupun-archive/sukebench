import subprocess, shutil, re, traceback, asyncio

from mac_vendor_lookup import MacLookup, AsyncMacLookup

class IpCommandNotFoundException(Exception):
    pass

class InvalidMacAddressException(Exception):
    pass

class MacAddresses:
    def __init__(self):
        self.__mac_lookup = MacLookup()
        self.__mac_lookup.load_vendors()
        self.__mac_addresses = self.__fetch_mac_addresses()

    def __call__(self):
        return self.__mac_addresses

    # MACアドレスの取得と整形
    def __fetch_mac_addresses(self):
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
                    'vendor': self.__lookup_org_by_mac_address(address),
                }
        return mac_addresses

    # `ip address` コマンドを実行する
    def __exec_ip_address_cmd(self):
        try:
            if (not shutil.which('ip')):
                raise IpCommandNotFoundException('ip: command not found')
        except IpCommandNotFoundException as e:
            print(e)
            exit()
        else:
            return subprocess.run(['ip', 'address'], stdout = subprocess.PIPE, stderr = subprocess.PIPE).stdout.decode('utf8').split('\n')

    # MACアドレスからベンダを照会する
    # mac_vendor_lookupが存在しないMACアドレスを投げると例外吐いて死にやがるのでこういう邪悪なコードになりました
    def __lookup_org_by_mac_address(self, mac_address):
        oui = MacAddresses.translate_oui(mac_address)
        return self.__mac_lookup.lookup(mac_address) if oui in self.__mac_lookup.async_lookup.prefixes else None

    # MACアドレスからOUIを抽出して返す
    @staticmethod
    def translate_oui(mac_address):
        oui = mac_address.replace(':', '').replace('-', '').upper()
        try:
            int(oui, 16)
        except ValueError:
            raise InvalidMacAddressException('{} contains unexpected character'.format(mac_address))
        if len(oui) > 12:
            raise InvalidMacAddressException('{} is not a valid MAC address (too long)'.format(mac_address))
        if type(oui) == str:
            oui = oui.encode('utf8')
        return oui[:6]

if __name__ == '__main__':
    mac_addresses = MacAddresses()
    print(mac_addresses())