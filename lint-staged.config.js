module.exports = {
  '**/*.{ts,js}': ['eslint --fix', 'prettier --write'],
  '**/*.{json,md}': ['prettier --write'],
}; 