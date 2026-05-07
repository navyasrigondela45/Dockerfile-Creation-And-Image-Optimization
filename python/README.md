# Python Docker Deployment

This folder contains Dockerfile creation and image optimization for Python application deployment.

## Files Included

- Dockerfile.v1
- Dockerfile.v2
- app.py
- requirements.txt

---

## Dockerfile Versions

### Dockerfile.v1
- Standard Python deployment

### Dockerfile.v2
- Optimized lightweight deployment
- Reduced image size

---

## Outputs Included

- Docker image build output
  <img width="1208" height="118" alt="image" src="https://github.com/user-attachments/assets/60db58cd-bc77-4767-adcf-1cb792c51118" />

- Running container output
  <img width="1600" height="84" alt="image" src="https://github.com/user-attachments/assets/f80c967c-dc6f-4f6d-84d2-90c690d1eeed" />

- Browser output screenshots
  <img width="1600" height="805" alt="image" src="https://github.com/user-attachments/assets/b191dcc8-d265-44e5-b174-de9d1a29e6ff" />
  <img width="1600" height="801" alt="image" src="https://github.com/user-attachments/assets/1734a715-28da-461f-adfa-498d1d7023c8" />

---

## Commands

```bash
docker build -f Dockerfile.v1 -t python:v1 .
docker build -f Dockerfile.v2 -t python:v2 .

docker run -d --name python-cont1 -p 7777:5000 python:v1
docker run -d --name python-cont2 -p 8888:5000 python:v2
