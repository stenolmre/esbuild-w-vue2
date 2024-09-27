#!/bin/bash

BLUE='\033[1;36m'
NC='\033[0m'
echo "${BLUE}Bundling..${NC}"

# run eslint before build, if it fails, stop the script
set -e
npx eslint --ext .js,.vue src
set +e

# read .env file
eval export $(cat .env)

# set global variables
outdir=$VUE_APP_APPID
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

# bundle with esbuild
node esbuild.config.mjs --ourdir=$outdir --version=$version

function get_file_name {
  echo $(find $outdir -name $1 | sed -r "s/.*\/(.*)/\1/")
}

# get bundled file names
js=$(get_file_name 'app-*.js')
css=$(get_file_name 'app-*.css')

# add bundled files to index.html
sed -i -r "s/<\/body>/<script src=\".\/${js}\"><\/script><\/body>/" "$outfile"
sed -i -r "s/<\/head>/<link rel=\"stylesheet\" href=\".\/${css}\"><\/head>/" "$outfile"

# minify index.html
echo $(sed -i -r "s/^[ \t]*//g" "$outfile" | tr '\n' ' ' < "$outfile") > "$outfile"

rm "$outdir/index.html-r"
