<!-- ! git -->

- Создать новую ветку из `main` (`git checkout -b name`).
- Определить на какой ветке находишься(`git branch`)
- Отправьте ветку в удаленный репозиторий `git push -u origin alena.khatkevich-hw_?`
- Из своей основной ветки создайте еще одну `git checkout -b alena.khatkevich-hw_?`
- Внести изменения в индекс `git add .`
- Оставить комментарий к сохранению `git commit -m '...'`

- Вытянуть к себе на локальный репозиторий все изменения из главной ветки `alena.khatkevich` удаленного репозитория: `git pull origin alena.khatkevich`.
- Переход на ветку `git checkout main`.
- Далее `git pull origin main`
- Переходим на свою ветку `git checkout alena.khatkevich`.
- Далее `git merge main`
- Удалить старую ветку `git branch -D alena.khatkevich-hw_?`
  `___________________________________________________`
  <!--! server -->
  `___________________________________________________`

_cd server_ переход в папку server;
_npm init -y_ запуск проекта;
_npm install express pg pg-hstore sequelize cors dotenv_ - установка зависимостей express, postgres (pg, pg-hstore), sequelize, cors(для обращения от браузера к серверу), dotenv;
_npm install -D nodemon_ - для автоматического перезапуска сервера при сохранении (нужен только при разработке);
_npm i jsonwebtoken bcrypt_ - для генерации токена и хеширования паролей
_npm i express-fileupload_ - для загрузки файлов
_npm i uuid_ -для генерации случайных id

`___________________________________________________`

<!--! client -->

`___________________________________________________`
_npx create-react-app . --template typescript_ - создание проекта _react_ с шаблоном
_npm i react-router-dom @types/react-router-dom_ установка компонентов _react router_ и их типов
_npm install @reduxjs/toolkit react-redux @types/react-redux_ установка redux toolkit и типов для него

_npm i styled-components --save-dev_ установка компонентов _styled-components_
_npm i --save-dev @types/styled-components_ установка типов
