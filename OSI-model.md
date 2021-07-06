# OSI model layers from top to bottom

<https://www.markdownguide.org/basic-syntax/>

OS process gets data via port

## Layers
Application (uses data = { headers: [Content-Type, etc]; body: payload })
- HTTP
- FTP
- SMTP
Presentation
Session
Transport (creates 2^16 ports)
- TCP   (uses segment = { headers: [ source-port, destination-port, ??acknowledge,sequence??], body: data })
    - connection-based (request> - accept< - send>)
    - reliable
        - can resend if packet was lost
        - right order of packets       "Hello world"
- UDP   (uses datagram = )
    - lightweight 
        - 8-bytes header
    - connectionless 
        - sends w/o connection 
    - unreliable
        - ignores lost packet
        - ignores order of packets       "Helworllo d"
Network
- IP   (uses packet = { headers: [ source-IP, destination-IP ], body: segments/datagram })
Link   (uses frame = { headers: [ source-MAC-address, destination-MAC-address ], body: packet })    
- wi-fi
- ethernet
Physical   (uses bit = { headers, body: frame })    
- cable-to-modem