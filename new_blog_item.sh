#!/bin/sh
set -eu
YYMMDD="$(date '+%Y-%m-%d')"
printf 'Specify title: '
read TITLE
FILENAME="${YYMMDD}-${TITLE}.md"
FILEPATH="./blog/_posts/${FILENAME}"

if [ -e "${FILENAME}" ]; then
    echo "Already exists: ${FILENAME}" 2>&1
    exit 1
fi

cat > "${FILEPATH}" << EOF
---
date: ${YYMMDD}
category: blog
tag:
    - 
author: kasutera
location: Tokyo
---

EOF
