# Base Image
FROM coreos/apache
# User Info
MAINTAINER sawa-zen

# build
RUN \
    apt-get update && \
    # C/C++
    apt-get install -y build-essential make && \
    # Python3.6
    apt-get install -y zlib1g-dev libssl-dev libreadline-dev \
        libsqlite3-dev libbz2-dev libncurses5-dev libgdbm-dev liblzma-dev \
        tk-dev zlibc wget curl && \
    cd /usr/local/src && \
    wget --no-check-certificate https://www.python.org/ftp/python/3.6.3/Python-3.6.3.tgz && \
    tar zxvf Python-3.6.3.tgz && \
    cd Python-3.6.3 && \
    ./configure && \
    make && \
    make altinstall && \
    cd ~ && \
    curl -kL https://bootstrap.pypa.io/get-pip.py | python3.6

EXPOSE 80
EXPOSE 8080
