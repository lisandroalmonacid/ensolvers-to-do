#install dependencies

sudo apt install nodejs
sudo apt install npm
npm install -g @vue/cli
npm install -g @nestjs/cli

#install backend dependencies
gnome-terminal --wait -e '/bin/bash -c "cd todo-backend && npm install" '

#run backend
gnome-terminal -e '/bin/bash -c "cd todo-backend && npm run start" '

#run frontend
gnome-terminal -e '/bin/bash -c "cd frontend/ensolvers-to-do-frontend && npm run serve" '
