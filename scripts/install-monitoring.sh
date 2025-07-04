#!/bin/bash

# Create folder structure
mkdir -p ~/monitoring
cd ~/monitoring

# Prometheus
wget https://github.com/prometheus/prometheus/releases/download/v2.52.0/prometheus-2.52.0.linux-amd64.tar.gz
tar -xvf prometheus-2.52.0.linux-amd64.tar.gz
mv prometheus-2.52.0.linux-amd64 prometheus

# Grafana
sudo apt install -y adduser libfontconfig1
wget https://dl.grafana.com/oss/release/grafana_10.4.2_amd64.deb
sudo dpkg -i grafana_10.4.2_amd64.deb
sudo systemctl enable grafana-server
sudo systemctl start grafana-server
