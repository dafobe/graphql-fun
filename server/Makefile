all: help
##
##
##
##
##
##
## Avaliable commands:
##

.PHONY: help up debug down stop shell logs

help: Makefile
	@sed -n 's/^##//p' $<

setup:
	docker-compose -p graphqlfun run app npm i

## up: Run the necessary services to run web without xdebug
up:
	API_PORT=4004 docker-compose -p graphqlfun run --service-ports app npm run serve 

## debug: Run the necessary services to run web with xdebug
debug:
	API_PORT=4004 API_HOSTNAME="0.0.0.0" DEBUG_PORT=9223 docker-compose -p graphqlfun run --service-ports app npm run debug --debugPort=9223

## pull: Download new docker images
pull:
	docker-compose -p graphqlfun pull

## down: Remove containers
down:
	docker-compose -p graphqlfun down

## stop: Stop web containers
stop:
	docker-compose -p graphqlfun stop

## logs: Container logs
logs:
	docker-compose -p graphqlfun logs -f

## shell: Interactive shell to use commands inside docker
shell:
	docker-compose -p graphqlfun exec bash