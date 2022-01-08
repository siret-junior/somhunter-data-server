# SOMHunter Data Server
Serves the shared media over the HTTP protocol. This is part of the [SOMHunter](https://github.com/siret-junior/somhunter) project.

Currently this server just provided thumbnails and frames of selected frames for the given dataset. The `somhunter-ui` project requests the media from this server.

## **Build & Run with Docker (recommended)**

```sh
# Build the container
sudo docker build -t somhunter-data-server .
# Install the data server
sudo docker run -ti --rm -v $(dirname $PWD):/somhunter somhunter-data-server:latest sh install.sh
# Run it on the port 8081
sudo docker run -ti --rm -v $(dirname $PWD):/somhunter -p 8081:8081 somhunter-data-server:latest sh run.sh
```

## **Build & Run**

### Prerequisites
- Node.js 

```sh
npm install
npm run start
```

