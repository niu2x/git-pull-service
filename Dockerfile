FROM ubuntu:18.04
RUN apt update && apt install -y \
	git \
	nodejs \
	&& rm -rf /var/lib/apt/lists/*
COPY . /git-pull-service
WORKDIR /git-pull-service

ENTRYPOINT ["nodejs", "./src/app.js"]
ENV GIT_REPOSITORY=/git_repository
