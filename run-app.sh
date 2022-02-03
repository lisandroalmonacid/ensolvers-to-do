#install dependencies

sudo apt install nodejs
sudo apt install npm
npm install -g @vue/cli
npm install -g @nestjs/cli


#run backend
gnome-terminal -e '/bin/bash -c "cd todo-backend && npm run start" '

#run frontend
gnome-terminal -e '/bin/bash -c "cd frontend/ensolvers-to-do-frontend && npm run serve" '
