install:
	pipenv install
	cd front
	yarn install

bup:
	pipenv run app

fup:
	cd front && yarn dev

