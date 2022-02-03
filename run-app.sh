#install dependencies

sudo apt install nodejs
sudo apt install npm
npm install -g @vue/cli
npm install -g @nestjs/cli

#run backend
gnome-terminal -- cd todo-backend && npm run start

#run frontend
gnome-terminal -- cd frontend/ensolvers-to-do-frontend && npm run serve
