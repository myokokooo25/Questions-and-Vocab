import glob
for f in glob.glob('/app/applet/data/chapter2-2026-level2-part*.ts'):
    with open(f, 'r') as file:
        content = file.read()
    content = content.replace('}\n  {', '},\n  {')
    with open(f, 'w') as file:
        file.write(content)
