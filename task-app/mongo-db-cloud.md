sql     table > row > column
nosql   collection > document > field

https://cloud.mongodb.com/
create new cluster - free tier
    'Cloud Provider & Region' > choose the nearest & w/ 'FREE TIER AVAILABLE'  
    'Cluster Tier' > 'M0 (Shared RAM, 512 MB Storage) Encrypted' (by default)
    'Additional Settings' > 'MongoDB 4.0, No Backup' (by default)
    'Cluster Name' > 'Cluster0' (by default)
    +'Create Cluster'
    ...wait creating instance

'Sandbox.Cluster0.|Overview|' > +'Connect'
    '1 Whitelist your connection IP Address'
        +'Add a Different IP Address' > 'IP Address' ='0.0.0.0/0' > +'Add IP Address' 
    '2 Create a MongoDB User'
        'Username' ='taskapp' > 'Password' = '123456' > +'Create MongoDB User' 
    +'Choose a connection method'
        +'Connect using MongoDB Compass'
            '1 Select your operating system and download MongoDB Compass'
            '2 Copy the connection string, then open MongoDB Compass.' > use provided value f.e. 'mongodb+srv://q:<password>@cluster0.basxu.mongodb.net/test'

MongoDB Compass Community - Connect
    'New Connection' > 'Connect to Host'
        'Hostname' ='cluster..mongodb.net'
        +ch'SRV Record'
        'Authentication' +d'Username / Password' > 'Username' ='..' > 'Password' ='..' > 'Authentication Database' =leave-as-is
        'SSL' +d'System CA / Atlas Deployment' 
        'Favorite Name' ='...' > +'CREATE FAVORITE'
        +'Connect'


'Sandbox.Cluster0.|Security|' > (entered values should be checked here)
    '|MongoDB Users|' > 'User Name'-'Authentication Method'-'MongoDB Roles'-'Actions' = 'taskapp'-'SCRAM'-'atlasAdmin@admin'-'EDIT DELETE'  
    '|IP Whitelist|' > 'IP Address'-'Comment'-'Status'-'Actions' = '0.0.0.0/0 (includes your current IP Address)'-''-'  Active'-'EDIT DELETE'  
