#!/bin/bash

echo -e "Major lab 1,L01: bash script named $(basename $0)"

if [ $# = 1 ]; then
#Cehcksnumargs
if [ -d $1 ];
then

x=`ls $1`
if [ -z $x ]; then
#existsandisempty
echo " $(basename $0): $1 directory exists and is empty"

else
#notempty

echo -e "$(basename $0) $1 directory exists and is non-empty,emptying it"
echo -e "$(basename $0) contents of directory $1 "
echo -e "`ls $1`"
echo -e "$(basename $0) removing regular files from $1"

cd $1
Files=`ls`

for i in $Files
do
if [ -f $i ]; then
echo -e "removing $i"
rm $i
fi
done
fi
echo -e "$(basename $0): putting 3 required files in $1"
for i in {1..3}
do
echo "File $i" > required.file$i
done

else

echo -e "$(basename $0): wrong number of command line arguments"
echo -e "usage --$(basename $0) $(dirname $0)"
fi

  
