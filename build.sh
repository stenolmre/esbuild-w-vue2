#!/bin/bash

BLUE='\033[0;34m'
NC='\033[0m'
echo "${BLUE}Bundling..${NC}"

# read .env file
eval export $(cat .env)
outdir=$VUE_APP
outfile="$outdir/index.html"
srcfile="public/index.html"

# remove old build
rm -rf $outdir
# create output directory
mkdir $outdir
# copy index.html to output directory
cp $srcfile $outdir

# bundle with esbuild
echo $(node build.mjs)

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
