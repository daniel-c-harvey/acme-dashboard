# Start ssh-agent and add key
eval $(ssh-agent -s)
ssh-add /c/.ssh/acme_ed25519

# Prepare Output Directories
mkdir deploy
cd ./deploy
mkdir ./app && mkdir ./public

# Copy
cp ../tsconfig.json ./ && cp ../package.json ./ && cp ../package-lock.json ./
cp ../next.config.ts ./ && cp ../next-env.d.ts ./
cp ../postcss.config.js ./ && cp ../tailwind.config.ts ./
cp -r ../app/* ./app
cp -r ../public/* ./public
cp ../auth.config.ts ./ && cp ../auth.ts ./ && cp ../middleware.ts ./
# Deploy
REMOTE="acme@dch5.snailbird.net"
APPROOT="/acme-dashboard"

ssh $REMOTE "rm -rf $APPROOT/src/*"
scp -r ./ $REMOTE:$APPROOT/src
ssh $REMOTE "cp $APPROOT/.env $APPROOT/src/"

# Build the deployed source on the deployment environment
ssh $REMOTE "cd $APPROOT && ./build.sh && ./restart.sh"

# Clean up
rm -rf ../deploy
ssh-agent -k
