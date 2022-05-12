ARGS="$*"
docker-compose --env-file ./env/.env run --rm npm uninstall $ARGS