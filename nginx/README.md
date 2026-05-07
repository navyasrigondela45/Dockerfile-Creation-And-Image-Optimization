# Nginx Docker Deployment

This folder contains Dockerfile creation and image optimization for Nginx deployment.

## Files Included

- Dockerfile.v1
- Dockerfile.v2
- index.html

---

## Dockerfile Versions

### Dockerfile.v1
- Standard Nginx deployment

### Dockerfile.v2
- Optimized lightweight deployment
- Reduced image size

---

## Outputs Included

- Docker image build output:
  <img width="1186" height="114" alt="image" src="https://github.com/user-attachments/assets/b6db817d-9ef1-431c-8fbf-e6ba55ef3a5b" />

- Running container output
  <img width="1600" height="89" alt="image" src="https://github.com/user-attachments/assets/e3aa0195-83eb-48cf-8909-51ba0e6a6760" />

- Browser output screenshots
  <img width="1600" height="798" alt="image" src="https://github.com/user-attachments/assets/2f1bdde0-4a19-420c-924c-c2a40063ed55" />

---

## Commands

```bash
docker build -f Dockerfile.v1 -t nginx:v1 .
docker build -f Dockerfile.v2 -t nginx:v2 .

docker run -itd --name cont1 -p 1111:80 nginx:v1
docker run -itd --name nginx-cont2 -p 2222:80 nginx:v2
