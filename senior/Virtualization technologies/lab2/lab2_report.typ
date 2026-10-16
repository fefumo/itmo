#set document(title: "Лабораторная работа № 2", author: "Молчанов Фёдор Денисович")
#set page(
  paper: "a4",
  margin: (x: 20mm, y: 18mm),
  footer: align(center)[г. Санкт-Петербург 2026],
)
#set text(size: 10pt, lang: "ru")
#set par(justify: true, leading: 0.7em)
#show link: set text(fill: rgb("1565c0"))
#show link: underline

#let terminal(body) = block(
  width: 100%,
  fill: rgb("e1e5ea"),
  stroke: (left: 2pt + rgb("66788a")),
  inset: (x: 9pt, y: 7pt),
  radius: 3pt,
  breakable: true,
)[#body]
#show raw.where(block: true): it => terminal(it)
#show raw.where(block: true): set text(size: 8pt)
#show raw.where(block: true): set par(justify: false)
#show figure.where(kind: table): set text(size: 8pt)
#show table: set par(justify: false)

#let illustration(path, caption) = figure(
  image(path, width: 100%),
  caption: caption,
)

#let stride-category(title, english) = table.cell(
  colspan: 3,
  fill: rgb("e8eef5"),
)[
  *#title* #h(0.5em) #text(size: 8pt, fill: rgb("526174"))[#english]
]

// Титульный лист.

#v(1.6cm)

#align(center)[
  Федеральное государственное автономное образовательное
  #linebreak()
  учреждение высшего образования
  #linebreak()
  «Национальный исследовательский университет ИТМО»
]

#v(3.7cm)

#align(center)[
  #text(weight: "bold")[Отчёт]
  #linebreak()
  #text(weight: "bold")[По лабораторной работе № 2]
  #linebreak()
  по дисциплине Технологии Виртуализации
  #linebreak()
  #text(weight: "bold")[Вариант: -]
]

#v(6.9cm)

#align(right)[
  Работу выполнил:
  #linebreak()
  Молчанов Федор Денисович P3413
  #linebreak()
  #linebreak()
  Работу принял:
  #linebreak()
  Белозубов А.В.
]

#v(2cm)

#pagebreak()
#set page(
  footer: context {
    align(center)[
      #counter(page).display("1")
    ]
  },
)
#counter(page).update(1)

#outline(title: [Оглавление], depth: 3, indent: 1.35em)
#pagebreak()

= 1. Подготовка Ubuntu VM и сетевой конфигурации

== 1–2. Диск SATA и настройки VirtualBox

Работа выполнялась в Ubuntu, запущенной в VirtualBox на хостовой Arch Linux. Согласно заданию, требовалось добавить SATA-диск на 30 ГБ и проверить параметры процессора и ускорения. Отдельного подтверждения добавления именно SATA-диска 30 ГБ и снимков вкладок VirtualBox в представленных материалах нет. Фактически Ubuntu использовала раздел `/dev/sda3` размером 24 ГиБ. Вложенный KVM оказался нестабилен; для вложенных ВМ далее применялся QEMU/TCG.

== 3–4. Общая папка Soft и ISO

Общая папка `Soft` доступна в Ubuntu по пути `/media/sf_Soft`. Из неё использовался образ `/media/sf_Soft/archlinux-x86_64.iso`. Наличие файла подтверждено успешными загрузками ISO. Источник загрузки ISO (mirror.yandex.ru) отдельным выводом не подтверждён.

= 2. GNOME Boxes — пункты 4.1–4.11

== 4.1–4.4. Установка, создание VM и запуск Arch Live

```text
sudo apt install gnome-boxes
gnome-boxes
```

Создана виртуальная машина с ISO Arch Linux. Поскольку KVM не обеспечивал стабильного выполнения гостевого CPU, для домена libvirt вручную установлен тип `qemu`, модель CPU — `qemu64`. Arch Linux успешно загружен в Live-режиме.

```text
virsh -c qemu:///session edit archlinux

<domain type='qemu'>

<cpu mode='custom' match='exact'>
  <model fallback='allow'>qemu64</model>
</cpu>
```

#figure(
  image("assets/image(20261008-184845).png", width: 100%),
  caption: [Загрузка Arch Linux Live через GNOME Boxes.],
)

== 4.5. Свойства виртуальной машины GNOME Boxes

Вкладка Resources: 1 CPU, 2 ГиБ RAM, лимит хранилища 8,1 ГиБ, 3D-ускорение и фоновая работа. Devices & Shares: USB, общие папки, ISO-привод. Snapshots: создание и восстановление снимков.

#figure(
  image("assets/image(20261008-184943).png", width: 100%),
  caption: [GNOME Boxes: ресурсы виртуальной машины.],
)

#figure(
  image("assets/image(20261008-184952).png", width: 100%),
  caption: [GNOME Boxes: USB-устройства, общие папки и ISO.],
)

#figure(
  image("assets/image(20261008-185008).png", width: 100%),
  caption: [GNOME Boxes: вкладка снимков состояния.],
)

== 4.6–4.7. SSH-подключение к Helios

В текущем интерфейсе GNOME Boxes функция подключения к SSH-серверу отсутствовала. Проверка выполнена из терминала Ubuntu по SSH с использованием порта 2222. Соединение установлено; удалённая система — FreeBSD.

```text
ssh -p 2222 s413015@helios.se.ifmo.ru

The authenticity of host '[helios.se.ifmo.ru]:2222 (77.234.196.4):2222' can't be established.
ED25519 key fingerprint is SHA256:3n1x6Bq0hnfyxrWB/YeQQPaxUkE/GCX2vKKtl0nzGgM.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[helios.se.ifmo.ru]:2222' (ED25519) to the list of known hosts.
Last login: Thu Sep 10 20:55:52 2026 from 72.56.82.170
FreeBSD 14.5-STABLE (amd64) ec3ebfaf9fd3

Welcome to FreeBSD!

[s413015@helios ~]$
```

#figure(
  image("assets/image(20261008-185221).png", width: 100%),
  caption: [Успешное SSH-подключение к Helios.],
)

== 4.8. Настройка сетевого моста

Первоначально Ubuntu работала через NAT VirtualBox с адресом `10.0.2.15/24`. После переключения адаптера в режим Bridged Adapter получен адрес `192.168.0.104/24`.

```text
fefumo@fefumo-VirtualBox:~$ ip -br addr
lo               UNKNOWN        127.0.0.1/8 ::1/128
enp0s3           UP             10.0.2.15/24 fd17:625c:f037:2:a90d:e061:f7a3:6d51/64 fd17:625c:f037:2:aa61:575f:eaf1:f6a9/64 fe80::1fb5:7c32:78a8:aa86/64
virbr0           DOWN           192.168.122.1/24

fefumo@fefumo-VirtualBox:~$ ip -br addr
lo               UNKNOWN        127.0.0.1/8 ::1/128
enp0s3           UP             192.168.0.104/24 fe80::1fb5:7c32:78a8:aa86/64
virbr0           DOWN           192.168.122.1/24
```

== 4.9–4.11. Удалённый рабочий стол по RDP

Вместо компьютера напарника настроен RDP-сервер `xrdp` на хостовой Arch Linux. Для удалённой графической сессии установлен XFCE. Клиент Remmina запущен в Ubuntu; адрес сервера — `192.168.0.103:3389`. После устранения конфликта старой XFCE-сессии удалённый рабочий стол появился.

```text
yay -S xrdp xorgxrdp --mflags='--nocheck'
sudo systemctl enable --now xrdp xrdp-sesman
systemctl is-active xrdp xrdp-sesman
active
active
sudo pacman -S xfce4
sudo pacman -S xfdesktop xfce4-panel
echo 'exec startxfce4' > ~/.xinitrc
command -v startxfce4
/usr/bin/startxfce4
sudo ss -lntp | grep 3389
LISTEN 0      2                  *:3389             *:*    users:(("xrdp",pid=126035,fd=7))
```

#figure(
  image("assets/image(20261008-190805).png", width: 100%),
  caption: [Установлено RDP-соединение, открыт экран авторизации XRDP.],
)

#figure(
  image("assets/image(20261008-191958).png", width: 100%),
  caption: [Успешное RDP-подключение из Ubuntu: удалённый рабочий стол XFCE на Arch Linux.],
)

= 3. QEMU — пункты 5–11

== 5–6. Установка QEMU и проверка KVM

QEMU был установлен и запускался в Ubuntu. Модули `kvm_amd` и `kvm` загружены, но выполнение гостевого процессора с `-accel kvm` вызывало зависание Ubuntu и хоста; дальнейшие действия выполнены через TCG. Инициализация KVM с `-S` без запуска CPU завершилась штатным тайм-аутом.

```text
fefumo@fefumo-VirtualBox:~$ lsmod | grep kvm
kvm_amd               212992  0
ccp                   143360  1 kvm_amd
kvm                  1409024  1 kvm_amd
irqbypass              12288  1 kvm

fefumo@fefumo-VirtualBox:~$ lscpu | grep -E 'CPU\(s\):|Virtualization:|Hypervisor vendor:|Virtualization type:'
CPU(s):                                  1
Virtualization:                          AMD-V
Hypervisor vendor:                       KVM
Virtualization type:                     full
NUMA node0 CPU(s):                       0

fefumo@fefumo-VirtualBox:~$ timeout 5s qemu-system-x86_64 \
  -accel kvm -smp 1 -m 256 -display none -monitor none -serial none -S
qemu-system-x86_64: terminating on signal 15 from pid 3512 (timeout)
```

== 7–8. Создание образа диска QCOW2

```text
mkdir -p ~/VM
qemu-img create -f qcow2 ~/VM/arch.qcow2 10G
Formatting '/home/fefumo/VM/arch.qcow2', fmt=qcow2 cluster_size=65536 extended_l2=off compression_type=zlib size=10737418240 lazy_refcounts=off refcount_bits=16

ls
arch.qcow2
```

== 9–10. Запуск ISO, установка Arch Linux на QCOW2

```text
qemu-system-x86_64 \
  -m 2048 \
  -smp 1 \
  -drive file=~/VM/arch.qcow2,format=qcow2 \
  -cdrom /media/sf_Soft/archlinux-x86_64.iso \
  -boot d \
  -accel tcg
```

#figure(
  image("assets/image(20261008-193637).png", width: 100%),
  caption: [Меню загрузки Arch Linux в QEMU.],
)

#figure(
  image("assets/image(20261008-194211).png", width: 100%),
  caption: [Загрузка Arch Linux Live внутри QEMU.],
)

Установка выполнена через `archinstall`: `/dev/sda` — 10 ГиБ, один раздел ext4, точка монтирования `/`, BIOS + GRUB, профиль Minimal. На этапе настройки зеркал возникла ошибка `NoMatches`, после повторного запуска установщика настройка завершена.

#figure(
  image("assets/image(20261008-195048).png", width: 100%),
  caption: [Пустой виртуальный диск: подготовка ручной разметки.],
)

#figure(
  image("assets/image(20261008-195123).png", width: 100%),
  caption: [Автоматически предложенные разделы до корректировки.],
)

#figure(
  image("assets/image(20261008-195239).png", width: 100%),
  caption: [Ручное создание раздела на 10 ГиБ.],
)

#figure(
  image("assets/image(20261008-195341).png", width: 100%),
  caption: [Итоговая разметка: один раздел ext4, точка монтирования /.],
)

#figure(
  image("assets/image(20261008-201002).png", width: 100%),
  caption: [Ошибка archinstall при выборе зеркал: NoMatches.],
)

#figure(
  image("assets/image(20261008-202037).png", width: 100%),
  caption: [Итоговая конфигурация установщика archinstall.],
)

#figure(
  image("assets/image(20261008-204145).png", width: 100%),
  caption: [Установка Arch Linux завершена успешно.],
)

```text
qemu-system-x86_64 \
  -m 2048 \
  -smp 1 \
  -drive file=~/VM/arch.qcow2,format=qcow2 \
  -boot c \
  -accel tcg
```

#figure(
  image("assets/image(20261008-204427).png", width: 100%),
  caption: [Загрузка установленного Arch Linux с QCOW2 и вход в систему.],
)

== 11. Полноэкранный запуск и MAC-адрес

Исходный MAC `17:10:20:22:20:09` отклонён QEMU как multicast-адрес. Для проверки использован допустимый адрес `16:10:20:22:20:09`; вывод `ip link` подтвердил установленный MAC.

```text
qemu-system-x86_64 \
  -m 2048 \
  -smp 1 \
  -drive file=~/VM/arch.qcow2,format=qcow2 \
  -boot c \
  -accel tcg \
  -full-screen \
  -nic user,model=e1000,mac=16:10:20:22:20:09

# Попытка с адресом из задания:
qemu-system-x86_64: -nic user,model=e1000,mac=17:10:20:22:20:09: NIC cannot have multicast MAC address
```

= 4. Virtual Machine Manager — пункты 12–28

== 12–17. Установка virt-manager и настройка libvirt

```text
sudo apt install virt-manager libvirt-daemon-system libvirt-clients bridge-utils virtinst
sudo usermod -aG libvirt $USER
sudo systemctl status libvirtd
# Результат: active (running)
sudo reboot
groups
```

После перезагрузки подтверждено членство пользователя в группе `libvirt`. KVM не использовался из-за зависаний, задействован локальный libvirt `qemu:///system`.

== 18–20. Создание машины Molchanov_3413 и её параметры

В virt-manager создана машина `Molchanov_3413`: 2048 МиБ RAM, 1 vCPU, динамический диск QCOW2 на 10 ГиБ, сеть libvirt NAT, ISO Arch Linux. До запуска в XML заменены `domain type="kvm"` на `domain type="qemu"`, а `host-passthrough` на модель CPU `qemu64`.

```text
<domain type="qemu">
<cpu mode="custom" match="exact">
  <model fallback="allow">qemu64</model>
</cpu>
```

#figure(
  image("assets/image(20261008-205953).png", width: 100%),
  caption: [Подключение QEMU/KVM в главном окне virt-manager.],
)

#figure(
  image("assets/image(20261008-210035).png", width: 100%),
  caption: [Выбор ISO для создания VM.],
)

#figure(
  image("assets/image(20261008-211122).png", width: 100%),
  caption: [Параметры создаваемой VM Molchanov_3413.],
)

#figure(
  image("assets/image(20261008-211236).png", width: 100%),
  caption: [Обзор VM до переключения гипервизора: KVM.],
)

#figure(
  image("assets/image(20261008-212343).png", width: 100%),
  caption: [Созданная VM запущена через virt-manager.],
)

#figure(
  image("assets/image(20261008-212945).png", width: 100%),
  caption: [Arch Linux Live загружен в virt-manager.],
)

#figure(
  image("assets/image(20261008-213010).png", width: 100%),
  caption: [Обзор настроек VM: Hypervisor — QEMU TCG.],
)

== 21. Добавление второго диска

Через Add Hardware → Storage добавлен второй VirtIO-диск. Интерфейс не принимал размер 0,01 ГиБ; фактически создан диск **0,1 ГиБ (около 102 МиБ)** вместо требуемых 10 МиБ. Отклонение от условия задания зафиксировано.

#figure(
  image("assets/image(20261008-213245).png", width: 100%),
  caption: [Диалог добавления второго диска: выставлен размер 0,1 ГиБ.],
)

== 22. Мониторинг ресурсов и настройки VM

Доступны параметры CPU, памяти, дисков, сетевых адаптеров, контроллеров, устройств ввода и отображения. В разделе Performance отображается использование CPU; показатели RAM, Disk I/O и Network I/O на скриншоте отключены.

#figure(
  image("assets/image(20261008-213710).png", width: 100%),
  caption: [Мониторинг производительности и список подключённых устройств, включая второй диск.],
)

== 23. Снимок состояния before_changes

Создан снимок состояния VM с именем `before_changes`.

#figure(
  image("assets/image(20261008-213758).png", width: 100%),
  caption: [Успешно созданный снимок состояния before_changes.],
)

== 24–26. Проверка изменения и восстановления состояния

Вместо установки Yandex Browser (пункт 24) создан тестовый файл внутри Arch Live. Это подтверждает механизм восстановления состояния, но не выполнение требования об установке браузера. После возврата к снимку файл отсутствует.

```text
root@archiso ~ # echo "after snapshot" > /root/snapshot-test.txt
root@archiso ~ # cat /root/snapshot-test.txt
after snapshot

# После восстановления before_changes:
root@archiso ~ # ls /root/snapshot-test.txt
ls: cannot access '/root/snapshot-test.txt': No such file or directory
```

#figure(
  image("assets/image(20261008-213910).png", width: 100%),
  caption: [Создание тестового файла после снимка состояния.],
)

#figure(
  image("assets/image(20261008-214029).png", width: 100%),
  caption: [После восстановления снимка файл отсутствует.],
)

== 27. Сетевые настройки

Установлена виртуальная сеть libvirt `default` (NAT), устройство VirtIO, MAC `52:54:00:8d:aa:97`, IPv4 `192.168.122.11`, активный линк. Дополнительно интерфейс позволяет использовать мост и другие варианты источника сети.

#figure(
  image("assets/image(20261008-214101).png", width: 100%),
  caption: [Настройки виртуального сетевого интерфейса VM.],
)

== 28. Управление машиной через virsh

```text
fefumo@fefumo-VirtualBox:~$ virsh -c qemu:///system list --all
 Id   Name             State
--------------------------------
 2    Molchanov_3413   running

fefumo@fefumo-VirtualBox:~$ virsh -c qemu:///system shutdown Molchanov_3413
Domain 'Molchanov_3413' is being shutdown

fefumo@fefumo-VirtualBox:~$ virsh -c qemu:///system list --all
 Id   Name             State
---------------------------------
 -    Molchanov_3413   shut off

fefumo@fefumo-VirtualBox:~$ virsh -c qemu:///system start Molchanov_3413
Domain 'Molchanov_3413' started

fefumo@fefumo-VirtualBox:~$ virsh -c qemu:///system list --all
 Id   Name             State
--------------------------------
 3    Molchanov_3413   running
```

Команды `list`, `shutdown`, `start` проверены фактически. Команды `reboot`, `destroy`, `autostart` и клонирование перечислены в задании, но отдельные испытания и выводы в материалах отсутствуют.

= 5. virt-install — пункты 29–37

== 29–30. Установка virt-install и каталог ОС

```text
sudo apt install virtinst libosinfo-bin
osinfo-query os
```

Список операционных систем успешно получен через `osinfo-query os`. Полный вывод каталога пользователем не передавался.

== 31–32. Фильтрация Windows и Fedora

```text
osinfo-query os | grep -i windows | tee ~/VM/windows.txt
osinfo-query os | grep -i fedora | tee ~/VM/fedora.txt

fefumo@fefumo-VirtualBox:~$ wc -l ~/VM/windows.txt ~/VM/fedora.txt
   28 /home/fefumo/VM/windows.txt
   63 /home/fefumo/VM/fedora.txt
   91 total
```

Списки сохранены в `~/VM/windows.txt` и `~/VM/fedora.txt`. Полные содержимые файлов не предоставлены, поэтому они не воспроизводятся.

== 33–35. Создание машины через virt-install

VM `Molchanov_3413_CLI` создана командой `virt-install` и успешно запущена. В отличие от примера задания применён `--virt-type qemu` (TCG) и `--disk none` из-за ограничений вложенного KVM и свободного места.

```text
fefumo@fefumo-VirtualBox:~$ sudo virt-install \
  --name Molchanov_3413_CLI \
  --virt-type qemu \
  --memory 2048 \
  --vcpus 1 \
  --os-variant archlinux \
  --cdrom /var/lib/libvirt/images/archlinux.iso \
  --disk none \
  --network network=default,model=virtio \
  --graphics spice \
  --noautoconsole

Starting install...
Creating domain... |    0 B  00:00:00

Domain is still running. Installation may be in progress.
You can reconnect to the console to complete the installation process.

fefumo@fefumo-VirtualBox:~$ virsh -c qemu:///system list --all
 Id   Name                 State
-------------------------------------
 4    Molchanov_3413_CLI   running
 -    Molchanov_3413       shut off
```

Значение параметров: `--name` — имя VM; `--virt-type qemu` — программная эмуляция; `--memory` — RAM в МиБ; `--vcpus` — число CPU; `--os-variant` — профиль ОС; `--cdrom` — ISO; `--disk none` — без виртуального диска; `--network` — сеть NAT с VirtIO; `--graphics spice` — графическая консоль; `--noautoconsole` — не открывать её автоматически.

== 36. Фоновый запуск

Фоновый запуск продемонстрирован параметром `--noautoconsole`: `virt-install` завершил работу, виртуальная машина продолжила функционировать в libvirt.

== 37. Подключение по SSH к созданной машине

В Arch Linux Live запущен `sshd`, задан пароль root. Получен адрес `192.168.122.205/24`, выполнено SSH-подключение из Ubuntu. На скриншоте видны и терминал SSH, и консоль Arch Live.

```text
systemctl start sshd
passwd
ip -4 addr
# IPv4: 192.168.122.205/24
ssh root@192.168.122.205
# Успешный вход: root@archiso ~ #
```

#figure(
  image("assets/image(20261008-215340).png", width: 100%),
  caption: [Проверка статуса VM и успешный SSH-вход в Arch Linux Live.],
)

= 6. Итоги и отклонения от задания

В GNOME Boxes, QEMU и virt-manager продемонстрирована загрузка Arch Linux. Установлена отдельная минимальная система Arch Linux на QCOW2; проверены работа с libvirt, создание и восстановление снимка, NAT и сетевой мост, запуск через `virt-install`, удалённые подключения SSH и RDP.

Не подтверждены исходными материалами: отдельное добавление SATA-диска 30 ГБ в Ubuntu, скачивание ISO непосредственно с mirror.yandex.ru, проверка всех команд `virsh`. Пункт 24 (установка Yandex Browser) заменён тестовым файлом, пункт 21 выполнен с диском 0,1 ГиБ вместо 10 МиБ, а MAC из пункта 11 пришлось заменить из-за ошибки multicast. В пункте 33 VM создана без диска. Эти отличия отражены в соответствующих разделах и не скрыты.

= Приложение А. Дополнительные диагностические выводы

Ниже приведены дополнительные результаты терминала, присланные в ходе работы. Содержимое не сокращается до отдельных диагностических строк.

== А.1. Диагностика RDP-сессий на Arch Linux

```text
➜  ~ sudo tail -50 /var/log/xrdp-sesman.log
[2026-10-08T22:03:21.620+0300] [INFO ] starting xrdp-sesman with pid 126034
[2026-10-08T22:03:21.621+0300] [INFO ] Sesman now listening on /var/run/xrdp/sesman.socket
[2026-10-08T22:08:26.379+0300] [INFO ] Socket 13: connection accepted from AF_UNIX
[2026-10-08T22:08:26.381+0300] [INFO ] Received system login request from xrdp for user: theodor IP: ::ffff:192.168.0.104
[2026-10-08T22:08:26.385+0300] [INFO ] starting xrdp-sesexec with pid 127027
[2026-10-08T22:08:26.436+0300] [INFO ] TerminalServerUsers group tsusers doesn't exist. Access granted for theodor
[2026-10-08T22:08:26.437+0300] [INFO ] Access permitted for user: theodor
[2026-10-08T22:08:26.438+0300] [INFO ] Received sys login status for theodor : logged in
[2026-10-08T22:08:26.438+0300] [INFO ] Received request from xrdp to create a session for user theodor
[2026-10-08T22:08:26.456+0300] [INFO ] Starting X server on display 10: /usr/lib/Xorg :10 -auth .Xauthority -config xrdp/xorg.conf -noreset -nolisten tcp -logfile .xorgxrdp.%s.log
[2026-10-08T22:08:27.458+0300] [INFO ] X server :10 is working
[2026-10-08T22:08:27.464+0300] [INFO ] Starting window manager for display :10
[2026-10-08T22:08:27.466+0300] [INFO ] Starting the xrdp channel server for display :10
[2026-10-08T22:08:27.466+0300] [INFO ] Using the default window manager on display 10: /etc/xrdp/startwm.sh
[2026-10-08T22:08:27.467+0300] [INFO ] Session in progress on display :10. Waiting until the window manager (pid 127042) exits to end the session

➜  ~ journalctl --user --since "22:08" --no-pager | grep -iE 'xfce|xfwm|dbus|error|failed' | tail -30
Oct 08 22:08:26 archbase xrdp-sesman[127032]:         (WW) warning, (EE) error, (NI) not implemented, (??) unknown.
Oct 08 22:08:26 archbase xrdp-sesman[127032]: _amdgpu_device_initialize: amdgpu_query_info(ACCEL_WORKING) failed (-13)
Oct 08 22:08:27 archbase xrdp-sesman[127042]: /sbin/startxfce4: X server already running on display :10.0
Oct 08 22:08:27 archbase systemd[2023]: Starting Xfce configuration service...
Oct 08 22:08:27 archbase systemd[2023]: Started Xfce configuration service.
Oct 08 22:08:27 archbase xfce4-session[127042]: Failed to fetch _NET_NUMBER_OF_DESKTOPS; assuming 1
Oct 08 22:08:27 archbase xfce4-session[127042]: Failed to get _NET_WORKAREA; using full screen dimensions
Oct 08 22:08:27 archbase xfce4-session[127042]: Failed to fetch _NET_CURRENT_DESKTOP; assuming 0
Oct 08 22:08:27 archbase xfce4-session[127042]: Failed to fetch _NET_CURRENT_DESKTOP; assuming 0
Oct 08 22:08:27 archbase xfce4-session[127042]: Failed to fetch _NET_CURRENT_DESKTOP; assuming 0
Oct 08 22:08:28 archbase xfwm4[127090]: Another compositing manager is running on screen 0
Oct 08 22:08:28 archbase xfsettingsd[127111]: Failed to apply display settings
Oct 08 22:08:28 archbase xfce4-session[127042]: Unable to launch "xfce4-panel": Failed to execute child process “xfce4-panel” (No such file or directory)
Oct 08 22:08:36 archbase xfce4-session[127042]: Unable to launch "xfdesktop": Failed to execute child process “xfdesktop” (No such file or directory)
Oct 08 22:08:36 archbase xfce4-session[127042]: Unable to launch "kclockd" (specified by autostart/org.kde.kclockd-autostart.desktop): Failed to execute child process “kclockd” (No such file or directory)
Oct 08 22:08:36 archbase xrdp-sesman[127288]: [ 10/08/2026 22:08:36.503 ui_new ERROR ] Cannot open the bold font, falling back to normal font (X error 15 NAME request 45 minor 0 serial 18)
Oct 08 22:08:36 archbase xrdp-sesman[127281]: [ 10/08/2026 22:08:36.505 session_init FATAL ERROR ] Another composite manager is already running
Oct 08 22:08:36 archbase xrdp-sesman[127281]: [ 10/08/2026 22:08:36.505 main FATAL ERROR ] Failed to create new session.

➜  ~ sudo tail -25 /var/log/xrdp-sesman.log
[2026-10-08T22:16:38.746+0300] [INFO ] sesman_main_loop: sesman asked to terminate
[2026-10-08T22:16:38.753+0300] [ERROR] sesexec_main_loop: trans_check_wait_objs failed for ECP transport
[2026-10-08T22:16:38.932+0300] [INFO ] starting xrdp-sesman with pid 128076
[2026-10-08T22:16:38.940+0300] [INFO ] Sesman now listening on /var/run/xrdp/sesman.socket
[2026-10-08T22:17:07.128+0300] [INFO ] Socket 13: connection accepted from AF_UNIX
[2026-10-08T22:17:07.130+0300] [INFO ] Received system login request from xrdp for user: theodor IP: ::ffff:192.168.0.104
[2026-10-08T22:17:07.135+0300] [INFO ] starting xrdp-sesexec with pid 128102
[2026-10-08T22:17:07.183+0300] [INFO ] TerminalServerUsers group tsusers doesn't exist. Access granted for theodor
[2026-10-08T22:17:07.183+0300] [INFO ] Access permitted for user: theodor
[2026-10-08T22:17:07.184+0300] [INFO ] Received sys login status for theodor : logged in
[2026-10-08T22:17:07.185+0300] [INFO ] Received request from xrdp to create a session for user theodor
[2026-10-08T22:17:07.185+0300] [INFO ] Found X server running at /tmp/.X11-unix/X10
[2026-10-08T22:17:07.210+0300] [INFO ] Starting X server on display 11: /usr/lib/Xorg :11 -auth .Xauthority -config xrdp/xorg.conf -noreset -nolisten tcp -logfile .xorgxrdp.%s.log
[2026-10-08T22:17:08.212+0300] [INFO ] X server :11 is working
[2026-10-08T22:17:08.218+0300] [INFO ] Starting window manager for display :11
[2026-10-08T22:17:08.220+0300] [INFO ] Starting the xrdp channel server for display :11
[2026-10-08T22:17:08.220+0300] [INFO ] Using the default window manager on display 11: /etc/xrdp/startwm.sh
[2026-10-08T22:17:08.221+0300] [INFO ] Session in progress on display :11. Waiting until the window manager (pid 128118) exits to end the session
[2026-10-08T22:17:08.394+0300] [INFO ] Window manager (pid 128118, display 11) finished normally in 0 secs
[2026-10-08T22:17:08.400+0300] [WARN ] Window manager (pid 128118, display 11) exited quickly (0 secs). This could indicate a window manager config problem
[2026-10-08T22:17:08.400+0300] [INFO ] Terminating X server (pid 128107) on display :11
[2026-10-08T22:17:08.401+0300] [INFO ] Terminating the xrdp channel server (pid 128119) on display :11
[2026-10-08T22:17:08.403+0300] [INFO ] xrdp channel server pid 128119 on display :11 finished
[2026-10-08T22:17:08.410+0300] [INFO ] X server pid 128107 on display :11 finished
[2026-10-08T22:17:08.411+0300] [INFO ] Session on display 11 has finished.

➜  ~ journalctl --user --since "22:17" --no-pager | grep -iE 'xfce|xfwm|dbus|error|failed' | tail -40
Oct 08 22:17:07 archbase xrdp-sesman[128107]:         (WW) warning, (EE) error, (NI) not implemented, (??) unknown.
Oct 08 22:17:07 archbase xrdp-sesman[128107]: _amdgpu_device_initialize: amdgpu_query_info(ACCEL_WORKING) failed (-13)
Oct 08 22:17:08 archbase xrdp-sesman[128118]: /sbin/startxfce4: X server already running on display :11.0
Oct 08 22:17:08 archbase xfce4-session[128118]: Failed to fetch _NET_NUMBER_OF_DESKTOPS; assuming 1
Oct 08 22:17:08 archbase xfce4-session[128118]: Failed to get _NET_WORKAREA; using full screen dimensions
Oct 08 22:17:08 archbase xfce4-session[128118]: Failed to fetch _NET_CURRENT_DESKTOP; assuming 0
Oct 08 22:17:08 archbase xfce4-session[128118]: Failed to fetch _NET_CURRENT_DESKTOP; assuming 0

➜  ~ pgrep -a -f 'xfce4-session|xfwm4|Xorg :10'
127032 /usr/lib/Xorg :10 -auth .Xauthority -config xrdp/xorg.conf -noreset -nolisten tcp -logfile .xorgxrdp.%s.log
127042 xfce4-session
127090 xfwm4
```

== А.2. Диагностика пространства Ubuntu

```text
fefumo@fefumo-VirtualBox:~$ df -h / /var/lib/libvirt/images
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda3        24G   22G  1,7G  93% /
/dev/sda3        24G   22G  1,7G  93% /

fefumo@fefumo-VirtualBox:~$ du -h ~/VM/* /var/lib/libvirt/images/* 2>/dev/null
2,3G    /home/fefumo/VM/arch.qcow2

fefumo@fefumo-VirtualBox:~$ sudo du -xhd1 / 2>/dev/null | sort -h
4,0K    /cdrom
4,0K    /mnt
4,0K    /srv
8,0K    /media
16K     /lost+found
56K     /snap
76K     /root
204K    /tmp
12M     /etc
15M     /opt
203M    /boot
5,4G    /usr
6,5G    /var
6,6G    /home
22G     /

fefumo@fefumo-VirtualBox:~$ sudo du -xhd1 /var 2>/dev/null | sort -h
4,0K    /var/crash
4,0K    /var/local
4,0K    /var/mail
4,0K    /var/metrics
4,0K    /var/opt
40K     /var/spool
68K     /var/tmp
1,8M    /var/backups
3,9M    /var/snap
210M    /var/log
983M    /var/cache
5,3G    /var/lib
6,5G    /var

fefumo@fefumo-VirtualBox:~$ df -h /
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda3        24G   20G  2,8G  88% /

fefumo@fefumo-VirtualBox:~$ df -h /
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda3        24G   21G  2,0G  92% /
```

