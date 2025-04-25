# aarsoppgave_vg2
årsoppgaven for vg 2


# 📘 MariaDB User Guide

MariaDB is a fast, open-source relational database system. This guide helps you get started with installing, configuring, and using MariaDB.

---

## 📦 Installation

### Ubuntu/Debian
```bash
sudo apt update
sudo apt install mariadb-server
```
- Updates your system’s package list and installs MariaDB.

### CentOS/RHEL
```bash
sudo yum install mariadb-server
```
- Uses the `yum` package manager to install MariaDB.

### macOS (Homebrew)
```bash
brew install mariadb
```
- Installs MariaDB using Homebrew.

### Start and Enable the Service
```bash
sudo systemctl start mariadb
sudo systemctl enable mariadb
```
- Starts the MariaDB server and enables it to run on boot.

---

## 🔐 Secure Your Installation

```bash
sudo mysql_secure_installation
```
- Sets root password
- Removes anonymous users
- Disables remote root login
- Deletes test database
- Reloads privileges

---

## 🛠️ Basic Usage

### Log In
```bash
mysql -u root -p
```
- `-u root`: Use the root user  
- `-p`: Prompt for password

---

## 🧱 Database Operations

### Create a Database
```sql
CREATE DATABASE my_database;
```

### Create a User
```sql
CREATE USER 'my_user'@'localhost' IDENTIFIED BY 'my_password';
```

### Grant Permissions
```sql
GRANT ALL PRIVILEGES ON my_database.* TO 'my_user'@'localhost';
FLUSH PRIVILEGES;
```

### Show All Databases
```sql
SHOW DATABASES;
```

### Use a Database
```sql
USE my_database;
```

### Create a Table
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
```

### Insert Data
```sql
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
```

### Query Data
```sql
SELECT * FROM users;
```

---

## 🔧 Admin Commands

### Restart MariaDB
```bash
sudo systemctl restart mariadb
```

### Check Status
```bash
sudo systemctl status mariadb
```

---

## 🧠 Pro Tips

- Exit the MariaDB shell with `\q`
- Always back up your databases before making changes
- Use `.sql` files for import/export

---

## 📚 Helpful Links

- [MariaDB Docs](https://mariadb.com/kb/en/)
- [SQL Syntax Reference](https://mariadb.com/kb/en/sql-statements/)
- [MariaDB Dev Tools](https://mariadb.com/products/dev-tools/)
