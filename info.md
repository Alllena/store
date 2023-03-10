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

!server!
_cd server_ переход в папку server;
_npm init -y_ запуск проекта;
_npm install express pg pg-hstore sequelize cors dotenv_ - установка зависимостей express, postgres (pg, pg-hstore), sequelize, cors(для обращения с браузера к серверу), dotenv;
_npm install -D nodemon_ - для автоматического перезапуска сервера при сохранении (нужен только при разработке);
