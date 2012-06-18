install:
	rsync -rCuP --delete htdocs/* marcmachttheater.de@marcmachttheater.de:htdocs/

local:
	rsync -aP --delete htdocs/ /Applications/MAMP/htdocs/marcmachttheater
