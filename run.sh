#!/bin/sh
exec podman run -p 8000:8000 ${my_name}:latest
