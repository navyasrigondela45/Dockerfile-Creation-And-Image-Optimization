
# Node.js Docker Deployment

This folder contains Dockerfile creation and image optimization for Node.js application deployment.

## Files Included

- Dockerfile.v1
- Dockerfile.v2
- Dockerfile.v3
- app.js
- package.json

---

## Dockerfile Versions

### Dockerfile.v1
- Standard Node.js deployment

### Dockerfile.v2
- Optimized lightweight deployment
- Reduced image size

### Dockerfile.v3
- Additional optimization and testing using multi-stage approach

---

## Outputs Included

- Docker image build output
  <img width="1101" height="111" alt="image" src="https://github.com/user-attachments/assets/9dbb96d5-7f3a-42f8-b4da-fba14d15fe06" />

- Running container output
  <img width="1600" height="91" alt="image" src="https://github.com/user-attachments/assets/23328568-a267-4a3d-962e-a01ed792d081" />

- Browser output screenshots
  <img width="1600" height="806" alt="image" src="https://github.com/user-attachments/assets/a4985472-d601-45b0-bb92-6059ceea7347" />
  <img width="1600" height="746" alt="image" src="https://github.com/user-attachments/assets/966f2f8c-defd-4275-a622-5224e55d844d" />

---

## Commands

```bash
docker build -f Dockerfile.v1 -t nodejs:v1 .
docker build -f Dockerfile.v2 -t nodejs:v2 .

docker run -d --name nodejs-cont1 -p 5555:3000 nodejs:v1
docker run -d --name nodejs-cont2 -p 6666:3000 nodejs:v2
