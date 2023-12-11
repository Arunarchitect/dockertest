echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* arun@139.84.140.96:/var/www/arunarchitect.in/

echo "Done"