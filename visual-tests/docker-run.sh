#!/bin/sh

cd visual-tests
docker compose up
docker compose rm -s -f -v
