# 🐳 Docker + PHP 7.4 + MongoDB 4.4 + Nginx 15 + Certbot(HTTPS) + Node 13 🐳

![NODE MONGO](https://user-images.githubusercontent.com/57062736/151140108-30752a2b-f5ed-4a15-89a7-8acbcdcf1eb5.png)

If you find this useful, remember about giving a start ⭐ to this repo or share it 🔁

Created from `https://github.com/Inushin/dockerSymfonySSL`

## Description 📋

![docker_facebook_share](https://user-images.githubusercontent.com/57062736/139103227-36f3cb32-c3c1-4158-b99e-25a31e955f44.png)

This is a complete stack for running a projects with Node, MongoDB, NGINX and PHP into Docker containers using docker-compose tool and with Certbot for the HTTPS certificate.

It is composed by 4 containers:

- `nginx`, acting as the webserver.
- `php`, the PHP-FPM container with the 7.4 PHPversion.
- `mongodb` which is the MongoDB database container with a **MongoDB 4.4** image.
- `node` the Node container with the 13 Node version.
- `certbot` generates the SSL certificate for your personal domain.

## Installation ⌨

![Docker Installation Illustration](https://user-images.githubusercontent.com/57062736/139102730-d6f51d53-ffb3-44bb-be5e-2bdf48d91295.png)

0. You need ****Docker**** and ****Docker-compose**** where you are going to launch this so, if you do not have it... click [HERE](https://github.com/Inushin/dockerSymfonySSL#installing-docker-and-docker-compose) or go to the end of this `.md` ^^

1. Clone this rep.

2. Check that the dir. `data/certbot/www/.well-known` exist. If it is not, create it 😀.

3. Edit `init` with your domain and an email.

4. Edit the `docker-compose.yml` with your DB information. 

5. Edit `data/nginx/node/index.js` with your domain.

6. Run `./init`.

7. Edit `data/nginx/web.conf` with your domain and your proyect dir.

8. Run `docker-compose down`

9. Run `docker-compose up -d`

10. The 4 containers are deployed: 

```
Creating docker_mongo_1   ... done
Creating docker_php_1     ... done
Creating docker_nginx_1   ... done
Creating docker_node_1   ... done
Creating docker-certbot-1 ... done
```


## Docker's useful commands 📑
![Docker Commands Illustration](https://user-images.githubusercontent.com/57062736/139102966-25f28be1-f768-49bd-a8a1-915a8465de9e.png)


- Run Docker-compose: `docker-compose up -d` / `docker-compose up`

- Check Docker-compose's volumens status: `docker-compose ps -a` / `docker-compose ps`

- Check Docker's images: `docker images -a`

- Remove Docker's images: `docker rmi -f imageID1 imageID2 ...` (-f = force)

- Enter to a Docker's volumen: `docker-compose exec VolumenID sh` / `docker-compose exec VolumenID bash`

- Copy a file to the docker we want to: `docker cp file docker_id:/dir`

- Remove all unused containers, volumes, networks and images: `docker system prune -a`

- See all the configuration of the docker-compose.yml with the paths completed: `docker-compose config`

- See all the information of a volumen (interesting of IPs): `docker inspect VOLUMEN_ID`

## Installing Docker and Docker-compose 🛠
![Docker-composer](https://user-images.githubusercontent.com/57062736/141182130-b8ed2d7a-9a68-4387-b838-ba0d44bb4e0e.png)

**Adjust the installation to your OS. Here you have the one for EC2(AWS) with CentOS**
#
- Docker installation

1. Download and install Docker: `yum install docker`

2. Gives permisions so you can run it everywhere: `usermod -a -G docker ec2-user`

3. Starts Docker's service: `service docker start`

4. Starts Docker's service each time you run the SO: `chkconfig docker on`
#
- Docker-compose installation

1. Download and install Docker-compose: `curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

2. Make it executable from anywhere: `chmod +x /usr/local/bin/docker-compose`

3. Makes an direct access for docker-compose: `ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose`

4. Check the version and the installation: `docker-compose --version`


## ⭐ Feedback and bugs 🐞

If you find any bug or just want to give your feedback (remember the ⭐ ^^), **Feel free to do it**. I am, as you, constantly learning and things change so quickly that... no one knows ^^
#


## Version control 📝

0.0.0 - Creation of the rep with the config finished - 26/01/2022
