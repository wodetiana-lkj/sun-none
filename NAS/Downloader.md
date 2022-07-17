# Transmission

谈到资源的下载和pt网站，资源下载和保种

transmission是linux下轻量级的bt下载器就是首当其冲的选择

需要下载transmission 和 transmission-daemon



并不是说只有transmission一个选择，还有例如：qBittorrent、uTorrent(Windows)等

其他下载器拥有更加完善的制作种子等功能，transmission相对来说更加轻量



## tranmission配置文件

/etc/transmission-daemon/settings.json

[配置详情](https://www.lxg2016.com/885.html)

> 此处便于查看和避免网站失效制作表格

|           column            |                       value(type)                       |                         description                          |
| :-------------------------: | :-----------------------------------------------------: | :----------------------------------------------------------: |
|       alt-speed-down        |                         50(int)                         | 时段限速下载最大值，KB/s,transmission remote（tr） 可设置。  |
|      alt-speed-enable       |                     false(boolean)                      |           是否启动时段限速，启动改为true。tr可设。           |
|    alt-speed-time-begin     |                        540(int)                         |   时段限速开始时间，单位为分钟，540表示早上九点。tr可设。    |
|     alt-speed-time-day      |                        127(int)                         | 时段限速日期（星期几），127表示每天，此处比较复杂，是用7位二进制数表示，然后转换成十进制数 入。例如0000001表示周日，1000000表示周六，0000010表示周一，0000100表示周二。如果你只要在周末限速，该数应该 1000001，转换为十进制就是65；如果你只要在工作日限速，该数应该为0111110，转换为十进制就是62，不知道我有没有说明白。t 不可设。 |
|   alt-speed-time-enabled    |                     false(boolean)                      | 启用时段限速日期，默认不开启，启动改为true。如果改为true，那么alt-speed-enabled就应该改为false，也即两项只能启动一项，如果同时为true，则alt-speed-enabled有效。tr不可设。 |
|     alt-speed-time-end      |                        1020(int)                        | 时段限速日期内限速的结束时间，分钟，1020表示下午5点。tr不可设。 |
|      bind-address-ipv4      |                    "0.0.0.0"(string)                    |            IPv4地址绑定，一般不要改动。tr不可设。            |
|      bind-address-ipv6      |                      "::"(string)                       |            IPv6地址绑定，一般不要改动。tr不可设。            |
|      blocklist-enabled      |                     false(boolean)                      |     启动白名单，默认不启动，需要启动改为true。tr可设置。     |
|         dht-enabled         |                      true(boolean)                      |      启用DHT网络，默认启动，不需要改为false。tr可设置。      |
|        download-dir         | "/data/download/UsbDisk1/volume1/transmission/"(string) |    下载保存的默认目录。注意该目录最好已经存在。tr不可设。    |
|         encryption          |                         1(int)                          | 加密。指定节点的加密模式，默认1。0表示关闭（tr表示为允许），1表示优先，2表示强制开启。tr可设置。 |
|    lazy-bitfield-enabled    |                      true(boolean)                      | 位字段延迟？，默认为true，设置为true时可以避免某些ISP通过查询完整位段来屏蔽BT，从而破解部分ISP对BT的封杀，当然不一定完全有效。tr不可设置。 |
|        message-level        |                         2(int)                          | 消息等级，应该和tr中显示统计和显示错误报告有关，默认为2，不要改动改动。有兴趣的话可以改为1和3试试。tr不可设置。 |
|       open-file-limit       |                         32(int)                         | 打开文件的最大数量，如果我没有理解错，应该是指文件数而不是指种子数量，改小后可以减轻机器负荷，但是如果种子不活跃，也会影响下载速度，默认值为 32。tr不可设置。 |
|      peer-limit-global      |                        240(int)                         | 全局连接数限制，即用户上限，据说改为80可以提高稳定性。tr可设置。 |
|   peer-limit-per-torrent    |                         60(int)                         |   每个种子连接数限制，即种子属性中的最大用户数，tr可设置。   |
|          peer-port          |                       51413(int)                        |                           传入端口                           |
|    peer-port-random-high    |                       65535(int)                        |             传入端口随机值范围上限，tr不可设置。             |
|    peer-port-random-low     |                       49152(int)                        |             传入端口随机值范围下限，tr不可设置。             |
|  peer-port-random-on-start  |                     false(boolean)                      | 启用随机端口，默认关闭。如果改为true，则每次启动系统时，transmission会在传入端口随机值范围下限传入端口随机值范围上限随机选择一个端口。没有必要还是false吧。tr不可设置。 |
|       peer-socket-tos       |                         0(int)                          |  这个在官方没有任何解释，还是保持不动吧，呵呵。tr不可设置。  |
|         pex-enabled         |                      true(boolean)                      | 启用用户交换，默认为true，关于PEX，有兴趣的朋友可参考http://en.wikipedia.org/wiki/Peer_exchange，对于只用PT的朋友，可以设为false。 tr可设置。 |
|   port-forwarding-enabled   |                      true(boolean)                      | 启用端口转发（uPnP），如果路由支持并且也开启了uPnP，则路由会自动做端口映射，但是需要注意的是如果内网有几台机器同时使用 transmission，就必须更改peer-port值为不一样。tr可设置。 |
|        preallocation        |                         1(int)                          | 文件磁盘空间预分配，默认值1为快速，0为关闭，2为完全，该值为2时，耗时较多，但是可以有效防止磁盘碎片。为了防止下载大半了才发现磁盘不够，还是默认值1为好。但注意如果连续添加几个大个头的种子时，一定要等待前一个种子添加成功后再添加下一个种子，否则由于在分配空间时，tr无法响应你的添加操作而导致死机。tr不可设置。 |
|            proxy            |                       ""(string)                        |             代理服务器URL，默认无。tr不可设置。              |
|     proxy-auth-enabled      |                     false(boolean)                      |            启用代理认证，默认不启用。tr不可设置。            |
|     proxy-auth-password     |                       ""(string)                        |                  代理认证密码。tr不可设置。                  |
|     proxy-auth-username     |                       ""(string)                        |                 代理认证用户名。tr不可设置。                 |
|        proxy-enabled        |                     false(boolean)                      |              启用代理，默认不启用。tr不可设置。              |
|         proxy-port          |                         80(int)                         |                    代理端口。tr不可设置。                    |
|         proxy-type          |                         0(int)                          |   代理类型，0 = HTTP, 1 = SOCKS4, 2 = SOCKS5。tr不可设置。   |
|         ratio-limit         |                     2.0000(double)                      |                   分享率限制。 tr可设置。                    |
|     ratio-limit-enabled     |                     false(boolean)                      |           启用分享率限制，默认不启用。 tr可设置。            |
| rpc-authentication-required |                      true(boolean)                      |          远程控制需要验证，默认为需要。tr不可设置。          |
|      rpc-bind-address       |                    "0.0.0.0"(string)                    | 远程控制地址绑定，默认值表示任何地址都可以访问。tr不可设置。 |
|         rpc-enabled         |                      true(boolean)                      |             启用远程控制，默认启用。tr不可设置。             |
|        rpc-password         |                     "user"(string)                      |                 远程控制用户名。tr不可设置。                 |
|          rpc-port           |                        9091(int)                        | 远程控制端口，此项似乎uPnP不能自动映射，需要手动做端口映射，否则如果没有开DMZ，远程控制还是不成功。tr不可设置。 |
|        rpc-username         |                     "user"(string)                      | 远程控制密码，如果你已经使用过远程控制，该项会变成一串看不懂的字符，不要害怕，直接改成想要的就是了。tr不可设置。 |
|        rpc-whitelist        |                  "\*.\*.\*.\*"(string)                  | 远程控制白名单，默认值为所有地址，支持通配符\*，如192.168.0.\*，。tr不可设置 |
|    rpc-whitelist-enabled    |                      true(boolean)                      | 启用远程控制白名单，如果启用，则仅仅上面列出的地址可以远程连接，tr不可设置。 |
|      speed-limit-down       |                        100(int)                         |                下载速度限制，KB/s。tr可设置。                |
|  speed-limit-down-enabled   |                     false(boolean)                      |            启用下载限速，默认不启动。 tr可设置。             |
|       speed-limit-up        |                        100(int)                         |  上传速度限制，KB/s。对于ADSL，设为35已经很好了。tr可设置。  |
|   speed-limit-up-enabled    |                     false(boolean)                      | 启用上传速度限制，默认不启动，对于ADSL，还是根据需要开启吧。 tr可设置。 |
|            umask            |                         0(int)                          | 文件权限的掩码，linux创建文档的权限（读、写、执行），默认值为18，（八进制为022）， 学过Linux的应该明白。如果我没有理解错，如果改为0，可以对创建的文件取得最高权限。tr不可设置。 |
|  upload-slots-per-torrent   |                         14(int)                         | 每个种子的上传通道数，默认值14，utorrent默认值是6，我想改为6也可以了吧。tr不可设置。 |

## 制作torrent种子