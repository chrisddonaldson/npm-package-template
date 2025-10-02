# Simple Makefile to initialize template metadata and run common tasks

APP_NAME ?= your-package
SCOPE ?= your-scope
DESCRIPTION ?= Template TypeScript npm package
REPO ?= OWNER/REPO

.PHONY: help init install dev build test lint format release clean

help:
	@echo "make init APP_NAME=my-lib SCOPE=my-org DESCRIPTION=\"desc\" REPO=owner/repo"
	@echo "make install | dev | build | test | lint | format | release | clean"

init:
	@echo "Initializing package.json with name=@$(SCOPE)/$(APP_NAME)"
	node ./scripts/set-meta.mjs --name "@$(SCOPE)/$(APP_NAME)" --description "$(DESCRIPTION)" --repo "$(REPO)"
	@echo "Done. Remember to set repository secrets for releases."

install:
	npm install

dev:
	npm run dev

build:
	npm run compile

test:
	npm test

lint:
	npm run lint

format:
	npm run format

release:
	npm run release

clean:
	npm run clean

