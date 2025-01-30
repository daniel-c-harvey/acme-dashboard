# Compile and Package
next build

# Prepare Output Directories
mkdir deploy
cd ./deploy
mkdir ./.next && mkdir ./public

cp -r ../.next/* ./.next
cp -r ../public ./public
cp ../package.json ./ && cp ../package-lock.json ./ && cp ../next.config.ts ./

KEY="-i /c/.ssh/acme_ed25519"
REMOTE="acme@dch5.snailbird.net"
REMOTEKEY="$KEY $REMOTE"
APPROOT="/acme-dashboard/bin"

ssh $REMOTEKEY "rm -rf $APPROOT/*"
scp $KEY -r ./ $REMOTE:$APPROOT

rm -rf ../deploy
