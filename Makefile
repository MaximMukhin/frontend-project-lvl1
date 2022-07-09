install:
					npm ci
brain-games: # запуск приветствия Brain Games
		node bin/brain-games.js

publish:
					npm publish --dry-run
lint:
			npx eslint .
