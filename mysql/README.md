# MySQL Docker Deployment

This folder contains Dockerfile creation for MySQL database deployment.

## Files Included

- Dockerfile.v1
- Dockerfile.v2
- init.sql

---

## Dockerfile Versions

### Dockerfile.v1
- Standard MySQL deployment

### Dockerfile.v2
- Improved container configuration

---

## Outputs Included

- Docker image build output
  <img width="898" height="87" alt="image" src="https://github.com/user-attachments/assets/6c12268f-93c6-4f68-9de3-a2528679a24c" />

- Running container output
  <img width="1600" height="60" alt="image" src="https://github.com/user-attachments/assets/f47cf637-8a29-4de2-b457-b2c7cfa002cf" />

- MySQL database execution output
  <img width="1600" height="785" alt="image" src="https://github.com/user-attachments/assets/7fa8e8eb-1646-426b-b4e9-73fe90965cbc" />


---

## Commands

```bash
docker build -f Dockerfile.v1 -t mysql:v1 .
docker build -f Dockerfile.v2 -t mysql:v2 .

docker run -itd --name mysql-cont1 -p 3306:3306 mysql:v1
