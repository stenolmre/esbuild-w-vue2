#!/bin/bash

function msg {
  BLUE='\033[1;36m'
  NC='\033[0m'
  echo "${BLUE}$1${NC}"
}

# run eslint before build, if it fails, stop the script
msg "Analyzing"
set -e
npx eslint --ext .js,.vue src
set +e

msg "Initializing HTML"

# read .env file
eval export $(cat .env)

# set global variables
outdir=$BUILD_DIR
name=$BUILD_NAME
outfile="$outdir/index.html"
srcfile="public/index.html"

# get app version from package.json
version=$(node -p "require('./package.json').version")

# remove old build
rm -rf $outdir
# create output directory
mkdir $outdir
# copy index.html to output directory
cp $srcfile $outdir

# file names
js="$name-$version.js"
css="$name-$version.css"

# add bundled files to index.html
sed -i -r "s/<\/body>/<script src=\".\/${js}\"><\/script><\/body>/" "$outfile"
sed -i -r "s/<\/head>/<link rel=\"stylesheet\" href=\".\/${css}\"><\/head>/" "$outfile"

# minify index.html
html-minifier --collapse-whitespace --remove-comments --minify-js --minify-css --use-short-doctype $outfile -o $outfile

# remove backup file
rm "$outdir/index.html-r"

# bundle with esbuild
msg "Bundling"
node esbuild.config.mjs --name=$name --ourdir=$outdir --version=$version $1
