#!/bin/bash
set -e

npx http-server ./storybook-static -p 6006 -s &

SERVER_PID=$!

npx wait-on http://localhost:6006 && echo "http-server is up and running!"

npx jest --config=jest.visual.config.js

kill $SERVER_PID