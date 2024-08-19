#!/usr/bin/env bash
# write your curl iteration here:

# set -B
for i in {1..13}
	# echo ${name}
do
  curl -H 'accept: */*' \
  -H 'Content-Type: application/json' \
	'http://localhost:3000/api/user/create' \
  -d '{"name":"Tester'$i'o","email": "Tester'$i'@mail.com","type":"expert" }'
done