echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build


echo "Deploying files to server..."
scp -r dist/* ubuntu@3.92.184.234:/var/www/arunarchitect.in/

echo "Done"