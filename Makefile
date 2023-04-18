PORT=8080

all: image run

image:
	docker build -t kon.chai-apps/gameOfLifeFrontend:latest .

run:
	docker run --rm -p $(PORT):$(PORT) kon.chai-apps/gameOfLifeFrontend:latest

.PHONY: all image run
