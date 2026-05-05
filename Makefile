.PHONY: install dev build start lint test

install:
	cd my-app && npm install

dev:
	cd my-app && npm run dev

build:
	cd my-app && npm run build

start:
	cd my-app && npm run start

lint:
	cd my-app && npm run lint

test:
	cd my-app && npm run test --if-present
