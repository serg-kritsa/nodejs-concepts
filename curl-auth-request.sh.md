USERNAME=''
PASSWORD=''
IP_ADDRESS=''

token=$(curl -k -X POST -H "Content-Type: application/json" -d "{\"username\":\"$USERNAME\", \"password\":\"$PASSWORD\"}" "https://$IP_ADDRESS:9089/api/auth" 2> /dev/null)
token=$token
curl -k -X POST -H "Authorization: ${token}" "https://$IP_ADDRESS:9089/api/endpoint" > /dev/null 2>&1

