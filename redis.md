
## run redis server
- navigate to [https://github.com/MicrosoftArchive/redis/releases]
- unzip `Redis-x64-###.zip`
- run `redis-server.exe`

## connection from javascript
const redis = require('redis');
const client = redis.createClient('redis://127.0.0.1:6379');
### set/get 
client.set('hi', 'there');
client.get('hi', (err, value) => console.log(value)); 
    client.get('hi', console.log); // null 'there'
redisStore = {
    hi: 'there'
}
### hset/hget 
client.hset('spanish', 'red', 'rojo');
client.hget('spanish', 'red', (err, value) => console.log(value)); 
redisStore = {
    spanish: {
        'red': 'rojo'
    }
}

## clean all
client.flushall();
## clean all associated w/ given key
client.del('key');

## cache expiration after N seconds
client.set('hi', 'there', 'EX', number_of_seconds);
client.hset('spanish', 'red', 'rojo', 'EX', number_of_seconds);
