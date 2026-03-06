// LPIC-1 101 Topic 1 Quiz - German

export const lpic1_101_topic1_de = [
  // L1: Hardware
  {
    id: 10111,
    question: "Welcher dieser Befehle scannt den Hardware-USB-Bus und gibt eine Liste aller lokal am Controller erkannten Geräte eines Linux-Systems aus?",
    options: [
      "lspci",
      "pciusb",
      "lsusb",
      "usbinfo"
    ],
    correctAnswer: "lsusb",
    explanation: "Der Befehl lsusb (List USB) fragt das udev- und sysfs-Subsystem ab, um USB-Controller und die daran angeschlossenen Geräte aufzulisten."
  },
  {
    id: 10112,
    question: "Über welches virtuelle Verzeichnis stellt der Kernel dem Benutzer wichtige Systeminformationen wie IRQ-Interrupts und Speicherstatistiken (cpuinfo, meminfo) in Echtzeit direkt zur Verfügung?",
    options: [
      "/dev",
      "/sys",
      "/proc",
      "/var/run"
    ],
    correctAnswer: "/proc",
    explanation: "Das RAM-basierte Verzeichnis /proc ist das historische virtuelle Dateisystem, das einen internen Einblick und direkten Zugriff auf den Status der CPU, der Prozesse und des Linux-Kernels bietet."
  },
  {
    id: 10113,
    question: "Wenn Sie überprüfen möchten, welche 'Treiber' (Kernel-Module) aktuell geladen sind, um z.B. die Netzwerkkarte zu steuern, welchen Befehl verwenden Sie?",
    options: [
      "lsmod",
      "modprobe",
      "insmod",
      "dmesg"
    ],
    correctAnswer: "lsmod",
    explanation: "lsmod 'List Modules' zeigt eine formatierte Ausgabe der Datei /proc/modules an, so dass man sehen kann, ob zusätzliche Module (wie Audio/Netzwerk) derzeit in den RAM des Kernels geladen sind."
  },
  {
    id: 10114,
    question: "Welcher Befehl ermöglicht es, detaillierte Daten (Parameter, Autor, Lizenz) über ein kompiliertes Kernel-Modul zu erhalten, ohne es jedoch ins System laden oder aktivieren zu müssen?",
    options: [
      "lsmod",
      "modprobe",
      "modinfo",
      "sysctl"
    ],
    correctAnswer: "modinfo",
    explanation: "modinfo analysiert eine Modul-Datei (.ko) technisch, bevor sie geladen wird, um das Design und die möglichen Konfigurationsparameter transparent zu machen."
  },
  {
    id: 10115,
    question: "Welche der folgenden Aussagen zum Verwalten von Linux-Treibern (Modulen) stellt die empfohlene Methode dar, um ein .ko Modul ZU LADEN mitsamt all seinen fehlenden Abhängigkeiten?",
    options: [
      "insmod e1000",
      "modprobe e1000",
      "systemctl start e1000",
      "kernel-load e1000"
    ],
    correctAnswer: "modprobe e1000",
    explanation: "modprobe ist das intelligente High-Level-Tool. Im Gegensatz zu 'insmod', das Module blind lädt (und bei fehlenden Abhängigkeiten scheitert), prüft und lädt modprobe zuerst alle Primärabhängigkeiten (via modules.dep) und sorgt für eine saubere Systemintegration."
  },

  // L2: Boot
  {
    id: 10121,
    question: "Wo werden während des Systemstarts die zahlreichen vom Linux-Kernel gemeldeten Hardware-Diagnose- und Prüfmeldungen archiviert (Boot Ring-Buffer)?",
    options: [
      "/var/log/boot.log",
      "Im Kernel-Ringpuffer, der mit 'dmesg' ausgelesen werden kann",
      "Nur direkt über das BIOS/UEFI aufrufbar",
      "In /dev/kernel_boot"
    ],
    correctAnswer: "Im Kernel-Ringpuffer, der mit 'dmesg' ausgelesen werden kann",
    explanation: "Der Kernel speichert diese Daten in einem zirkulären RAM-Puffer, den der Befehl 'dmesg' auf das Terminal extrahiert (später oft auch statisch unter /var/log archiviert)."
  },
  {
    id: 10122,
    question: "Welche Komponente übernimmt während des klassischen Linux-Startvorgangs chronologisch direkt nach der rohen POST-Hardwareinitialisierung des BIOS (oder UEFI) die Kontrolle über den Computer?",
    options: [
      "Der Kernel (vmlinuz)",
      "Der Bootloader (z.B. GRUB2)",
      "Systemd / Init (PID 1)",
      "Das Dateisystem /proc"
    ],
    correctAnswer: "Der Bootloader (z.B. GRUB2)",
    explanation: "Die Firmware ruft den Bootloader (im Bootsektor MBR oder /boot/efi) auf. Die grundlegende Funktion des Laders (GRUB) besteht darin, den Kernel auf der Festplatte zu finden, ein Menü zu zeigen und ihn in den Hauptspeicher zu laden."
  },
  {
    id: 10123,
    question: "Welche grundlegende technische Rolle spielt 'initramfs' oder 'initrd' während des anfänglichen Kernel-Startprozesses unter Linux?",
    options: [
      "Starten des X11 Grafikservers GUI für Logins.",
      "Manuelles Überprüfen und Scannen des BIOS auf Viren.",
      "Temporäres Bereitstellen der Basisumgebung an lebenswichtigen Treibern, damit der Kernel die WAHRHAFTIGE Root-Partition (/) der Maschine physisch erkennen, mounten und entsperren kann.",
      "Lokale Entschlüsselung von Kennwörtern während des Bootens."
    ],
    correctAnswer: "Temporäres Bereitstellen der Basisumgebung an lebenswichtigen Treibern, damit der Kernel die WAHRHAFTIGE Root-Partition (/) der Maschine physisch erkennen, mounten und entsperren kann.",
    explanation: "Das 'Initial RAM file system' ist ein flüchtiges Mini-Linux. Es liefert dem Kernel (der nicht jeden erdenklichen Treiber integriert hat) genau die Treiber (RAID, LVM, ext4), die er benötigt, um seine riesige Haupt-Partition / überhaupt erst finden und betreten zu können!"
  },

  // L3: Niveaux et Targets SystemD
  {
    id: 10131,
    question: "Welches Systemd-Target (Cible) entspricht genau der Funktionsweise des historischen Notfall- und Einschränkungsmodus 'Runlevel 1 / S' (Single-User)?",
    options: [
      "rescue.target",
      "multi-user.target",
      "graphical.target",
      "emergency.target"
    ],
    correctAnswer: "rescue.target",
    explanation: "Das rescue.target bietet einen direkten, rohen lokalen Root-Zugriff im Einzelbenutzermodus. Es verzichtet bewusst auf das Laden vieler Software oder Netzwerkdienste – sehr nützlich bei kritischen Reparaturen!"
  },
  {
    id: 10132,
    question: "Mit welchem systemctl-Befehl wechseln wir AUF DER STELLE in eine reine Textkonsolenumgebung ohne GUI (sofortiger Wechsel von der GUI-Ebene 'graphical' auf 'multi-user.target')?",
    options: [
      "systemctl restart multi-user.target",
      "systemctl set-default multi-user.target",
      "systemctl isolate multi-user.target",
      "telinit 5"
    ],
    correctAnswer: "systemctl isolate multi-user.target",
    explanation: "Der Befehl 'isolate' beendet sofort alle grafischen Anwendungen (die nicht mit diesem Target verknüpft sind), um das System augenblicklich in den neuen, angeforderten Zustand zu zwingen (Ähnlich dem alten 'telinit 3')."
  },
  {
    id: 10133,
    question: "Der historische 'Runlevel 5', also der standardmäßige visuelle Desktop-Bedienmodus für Clients, wird in der Architektur von systemd durch welches Standard-Target ersetzt?",
    options: [
      "graphical.target",
      "multi-user.target",
      "default.target",
      "desktop.target"
    ],
    correctAnswer: "graphical.target",
    explanation: "Das graphical.target schließt die vollen Netzwerkfunktionen (vom multi-user.target) mit ein und ergänzt diese um Desktop-Display-Manager (X11, Wayland) und Audio."
  },
  {
    id: 10134,
    question: "Sie möchten das lokale Linux-System SOFORT anhalten und komplett ausschalten (Halt/Poweroff). Welcher klassische UNIX-Befehl ist dafür korrekt?",
    options: [
      "shutdown -r now",
      "shutdown -h now",
      "kill -9 pid_1",
      "halt -reboot"
    ],
    correctAnswer: "shutdown -h now",
    explanation: "Der Flag '-h' (Halt) beendet den Server formell und schließt sauber Prozesse und Logs. (Der umgekehrte Parameter '-r' würde stattdessen einen System-Reboot/Neustart erzwingen)."
  }
]
