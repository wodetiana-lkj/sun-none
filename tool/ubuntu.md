配置清华apt源

```shell
# deb cdrom:[Debian GNU/Linux 11 _Bullseye_ - Official Snapshot amd64 LIVE/INSTALL Binary 20220426-20:09]/ bullseye contrib main non-free

# deb cdrom:[Debian GNU/Linux 11 _Bullseye_ - Official Snapshot amd64 LIVE/INSTALL Binary 20220426-20:09]/ bullseye contrib main non-free

deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main

deb http://security.debian.org/debian-security bullseye-security main contrib non-free
deb-src http://security.debian.org/debian-security bullseye-security main contrib non-free

# bullseye-updates, to get updates before a point release is made;
# see https://www.debian.org/doc/manuals/debian-reference/ch02.en.html#_updates_and_backports
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free

# This system was installed using small removable media
# (e.g. netinst, live or single CD). The matching "deb cdrom"
# entries were disabled at the end of the installation process.
# For information about how to configure apt package sources,
# see the sources.list(5) manual.
```

