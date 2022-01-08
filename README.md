# SOMHunter Data Server
Serves the shared media over the HTTP protocol. This is part of the [SOMHunter Video Search Tool](https://github.com/siret-junior/somhunter) project.

Currently this server just provided thumbnails and frames of selected frames for the given dataset. The `somhunter-ui` project requests the media from this server.

## Build with docker (recommended)

```sh
# Build the container
sudo docker build -t somhunter-data-server .
# Install the core
sudo docker run -ti --rm -v $(dirname $PWD):/somhunter somhunter-data-server:latest sh install.sh
# Run it on port 8081
sudo docker run -ti --rm -v $(dirname $PWD):/somhunter -p 8081:8081 somhunter-data-server:latest sh run.sh
```

## Build natively

### Prerequisites
- Node.js 

```sh
npm install
npm run start
```

