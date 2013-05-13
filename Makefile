install:
	rsync -rCuP --delete htdocs/* marcmachttheater.de@marcmachttheater.de:htdocs/

local:
	rsync -aP --delete htdocs/ /Applications/MAMP/htdocs/marcmachttheater

commit:
	git add ./*
	git commit
	git push origin master
	
update:
	git pull origin master
