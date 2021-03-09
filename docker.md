- docker version
 melihat versi docker
 
- docker images
 melihat docker images
 
- docker container ls
 # --all

- docker container create --name namacontainer namaimage:tag
 untuk membuat container
 # -p porthost:portcontainer
  port forwarding untuk mengakses container

- docker create network namanetwork
 untuk membuat network

- docker network ls 
 untuk melihat network

- docker network connect namanetwork namacontainer
 membuat container berada dalam network
 
- docker container rm namacontainer
 untuk menghapus container

- docker container stop namacontainer namacontainer	
 untuk menghentikan container, untuk lebih dari satu container, tinggal menambah nama container ynag lain

- docker container start namacontainer
 untuk memulai container
 
- docker image rm imageid atau repo:tag
 untuk menghapus image, harus menhapus container dulu

- docker-compose up
 membuat dan menjalankan container
 # -d
 daemon
 
- docker-compose down
 menghentikan dan menghapus semua container

- docker-compose stop
 untuk menghentikan 
 
- docker-compose start
 untuk menjalankan
 
- lihat ip
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id

- masuk bash docker
docker exec -it nama_container bash

- jika file config tidak berubah
php artisan config:clear




