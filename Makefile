# Variables for Docker Compose files
DOCKER_COMPOSE_DEV_FILE=docker-compose.dev.yaml
DOCKER_COMPOSE_PROD_FILE=docker-compose.prod.yaml
DOCKER_COMPOSE_DB_FILE=db.docker-compose.yaml
DOCKER_COMPOSE_VAULT_FILE=vault.docker-compose.yaml

# Define directory path
COMPOSE_DIR=compose

# Define custom project name
CUSTOM_PROJECT_NAME=user-manager

up-dev:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DEV_FILE) up -d

up-prod:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_PROD_FILE) up -d

up-db:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DB_FILE) up -d

down-dev:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DEV_FILE) down

down-prod:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_PROD_FILE) down

down-db:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DB_FILE) down

logs-dev:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DEV_FILE) logs -f

logs-prod:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_PROD_FILE) logs -f

logs-db:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DB_FILE) logs -f

build-dev:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DEV_FILE) build

build-prod:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_PROD_FILE) build

stop-dev:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DEV_FILE) stop

stop-prod-dev:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_PROD_FILE) stop

stop-db:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DB_FILE) stop

rm-dev:
	cd $(COMPOSE_DIR) && docker-compose -p $(CUSTOM_PROJECT_NAME) -f $(DOCKER_COMPOSE_DEV_FILE) rm -f
