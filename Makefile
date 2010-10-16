install:
	rsync -aP --delete htdocs/* marcmachttheater.de@marcmachttheater.de:htdocs/

test:
	rsync -aP --delete htdocs/* /Applications/MAMP/htdocs/marcmachttheater.de/
