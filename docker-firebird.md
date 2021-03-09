docker run -d --name firebird -p 3050:3050 -v /home/dell/Documents/databases:/firebird/data -e ISC_PASSWORD=password jacobalberty/firebird:v2.5.9-sc

# with network
docker run -d --network accuratedb --network-alias firebird --name firebird -p 3050:3050 -v /home/dell/Documents/databases:/firebird/data -e ISC_PASSWORD=password jacobalberty/firebird:v2.5.9-sc