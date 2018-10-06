import os
import subprocess
foldersfiles = ["Header", "Footer", "Shelf", "Search", "SearchIcon", "Book", "ShelfMenu"]

for label in foldersfiles:
    work_path = os.path.abspath(os.path.dirname(__file__))
    if not os.path.exists(label):
        os.mkdir(label)
        os.chdir(os.path.expanduser(work_path+ "/" + label))
        subprocess.call(['touch', label + ".js"])
        subprocess.call(['touch', label + ".css"])
        os.chdir(os.path.expanduser(work_path))
