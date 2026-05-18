# Virtual Machine File Transfer Using VirtualBox, NAT Network and DHCP

# Aim
To create two Ubuntu virtual machines using Oracle VirtualBox, configure NAT Network with DHCP, and transfer files between the virtual machines using SCP.

---

# Requirements
- Oracle VirtualBox
- Ubuntu ISO image OR Ubuntu VMDK image
- Minimum 4 GB RAM recommended
- Internet connection

---

# Concepts

## Virtual Machine (VM)
A virtual machine is a software-based computer system that runs inside another physical computer.

---

## VirtualBox
Oracle VM VirtualBox is virtualization software used to create and run virtual machines.

---

## ISO Image
An ISO file is a bootable operating system installer image.

Example:
```text
ubuntu-24.04-live-server-amd64.iso
```

Used when:
- installing Ubuntu manually

---

## VMDK
VMDK (Virtual Machine Disk) is a pre-installed virtual hard disk image.

Extension:
```text
.vmdk
```

Used when:
- OS is already installed
- faster setup is needed

---

## NAT
NAT (Network Address Translation):
- provides internet access to VM
- isolates VM from LAN

Plain NAT:
- does NOT allow VM-to-VM communication properly

---

## NAT Network
NAT Network:
- allows internet access
- allows VM-to-VM communication
- assigns IP automatically using DHCP

---

## DHCP
DHCP (Dynamic Host Configuration Protocol):
- automatically assigns IP addresses

Example:
```text
10.0.2.x
```

---

## SSH
SSH (Secure Shell):
- secure remote communication protocol

Used by:
- SCP
- remote login

---

## SCP
SCP (Secure Copy Protocol):
- securely transfers files between systems over SSH

---

# PART A — Create NAT Network

## Step 1: Open VirtualBox
Open Oracle VirtualBox Manager.

---

## Step 2: Create NAT Network
Go to:
```text
Tools → Network
```

OR depending on version:
```text
File → Tools → Network Manager
```

---

## Step 3: NAT Networks
1. Open:
```text
NAT Networks
```

2. Click:
```text
Create
```

3. VirtualBox creates:
```text
NatNetwork
```

4. Ensure:
- DHCP enabled

---

# PART B — Create VM1

## Step 4: Create New VM
Click:
```text
New
```

---

## Step 5: Enter VM Details
- Name: Ubuntu_VM1
- Type: Linux
- Version: Ubuntu (64-bit)

---

## Step 6A: If Using ISO
1. Allocate RAM:
   - 2048 MB or more

2. Create virtual hard disk:
   - VDI
   - Dynamically allocated
   - 20 GB

3. Attach Ubuntu ISO:
```text
Settings → Storage → Empty → Choose ISO
```

---

## Step 6B: If Using VMDK
1. Allocate RAM
2. Select:
```text
Use an existing virtual hard disk file
```
3. Choose:
```text
Ubuntu.vmdk
```

---

## Step 7: Configure Network
Go to:
```text
Settings → Network
```

Adapter 1:
- Enable Network Adapter
- Attached to:
```text
NAT Network
```
- Name:
```text
NatNetwork
```

Click OK.

---

## Step 8: Start VM1
Click:
```text
Start
```

---

## Step 9A: If Using ISO
Install Ubuntu:
- Language → Done
- Keyboard → Done
- Network → DHCP → Done
- Storage → Use entire disk
- Create username/password
- Install OpenSSH Server
- Finish installation
- Reboot

---

## Step 9B: If Using VMDK
Ubuntu boots directly.

Login using VMDK credentials.

---

# PART C — Create VM2

## Step 10: Repeat VM Creation
Create:
```text
Ubuntu_VM2
```

Repeat same steps.

If using same VMDK:
- choose:
```text
Keep Existing Disk
```

---

# PART D — Check IP Addresses

## Step 11: Start Both VMs
Both VMs must run simultaneously.

---

## Step 12: Check IP
On BOTH VMs:
```bash
ip a
```

OR:
```bash
hostname -I
```

Example:
- VM1 → `10.0.2.4`
- VM2 → `10.0.2.3`

Different IPs indicate:
- DHCP working
- NAT Network working

---

# PART E — Enable SSH

## Step 13: Install OpenSSH Server
Run on BOTH VMs:
```bash
sudo apt update
sudo apt install openssh-server -y
```

---

## Step 14: Start SSH
```bash
sudo systemctl start ssh
sudo systemctl enable ssh
```

---

## Step 15: Verify SSH
```bash
sudo systemctl status ssh
```

You should see:
```text
active (running)
```

---

# PART F — Test Network Connectivity

## Step 16: Ping VM2 from VM1
From VM1:
```bash
ping 10.0.2.3
```

If replies appear:
```text
64 bytes from...
```

Stop ping:
```text
Ctrl + C
```

---

# PART G — File Transfer Using SCP

## Step 17: Create File on VM1
```bash
touch test.txt
```

Add content:
```bash
echo "VM file transfer successful" > test.txt
```

---

## Step 18: Find Username on VM2
On VM2:
```bash
whoami
```

Example:
```text
sonali
```

---

## Step 19: Transfer File
From VM1:
```bash
scp test.txt sonali@10.0.2.3:/home/sonali/
```

Enter VM2 password.

If successful:
```text
100%
```
appears.

---

# PART H — Verify File

## Step 20: Verify on VM2
On VM2:
```bash
cd /home/sonali
ls
cat test.txt
```

File contents should display.

---

# Common Errors and Solutions

| Error | Cause | Solution |
|---|---|---|
| Network unreachable | Wrong network mode | Use NAT Network |
| Connection refused | SSH not running | Start/install SSH |
| Permission denied | Wrong username/password | Check credentials |
| No such file | Wrong destination path | Use correct `/home/user/` path |

---

# Difference Between NAT and NAT Network

| Feature | NAT | NAT Network |
|---|---|---|
| Internet access | Yes | Yes |
| DHCP | Yes | Yes |
| VM-to-VM communication | No | Yes |

---

# Difference Between ISO and VMDK

| ISO | VMDK |
|---|---|
| Installer image | Preinstalled OS disk |
| Requires installation | Direct boot |
| Official Ubuntu source | Third-party VM image |

---

# Result
Two Ubuntu virtual machines were success