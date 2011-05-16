install:
	rsync -rCuP --delete htdocs/* marcmachttheater.de@marcmachttheater.de:htdocs/

test:
	rm -Rf /Applications/MAMP/htdocs
	rsync -aP --delete htdocs /Applications/MAMP/
