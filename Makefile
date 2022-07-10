install:
					npm ci
brain-games: # запуск приветствия Brain Games
		node bin/brain-games.js
brain-even: # запуск игры Brain even
		node bin/brain-even.js
brain-calc: # запуск игры Brain calc
		node bin/brain-calc.js		
brain-gcd: # запуск игры Brain gcd
		node bin/brain-gcd.js
brain-prime: # запуск игры Brain prime
		node bin/brain-prime.js
brain-progression: # запуск игры Brain progression
		node bin/brain-progression.js
publish:
					npm publish --dry-run
lint:
			npx eslint .
