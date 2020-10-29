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

## up: Run the necessary services to run web without xdebug
up:
	docker-compose -p graphqlfun -f docker-compose.yml up -d

## debug: Run the necessary services to run web with xdebug
debug:
	export NPM_RUN_COMMAND=debug; docker-compose -p graphqlfun up -d

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