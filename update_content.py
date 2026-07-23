with open('/app/applet/data/content.ts', 'r') as f:
    content = f.read()

imports_to_add = """import { chapter3Data2026Level2Part1 } from './chapter3-2026-level2-part1';
import { chapter3Data2026Level2Part2 } from './chapter3-2026-level2-part2';
import { chapter3Data2026Level2Part3 } from './chapter3-2026-level2-part3';
import { chapter3Data2026Level2Part4 } from './chapter3-2026-level2-part4';
"""

content = content.replace("import { chapter2Data2026Level2Part4 } from './chapter2-2026-level2-part4';", "import { chapter2Data2026Level2Part4 } from './chapter2-2026-level2-part4';\n" + imports_to_add)

old_chapter2 = """  2: [
    ...chapter2Data2026Level2Part1,
    ...chapter2Data2026Level2Part2,
    ...chapter2Data2026Level2Part3,
    ...chapter2Data2026Level2Part4,
  ]"""

new_chapter2_3 = """  2: [
    ...chapter2Data2026Level2Part1,
    ...chapter2Data2026Level2Part2,
    ...chapter2Data2026Level2Part3,
    ...chapter2Data2026Level2Part4,
  ],
  3: [
    ...chapter3Data2026Level2Part1,
    ...chapter3Data2026Level2Part2,
    ...chapter3Data2026Level2Part3,
    ...chapter3Data2026Level2Part4,
  ]"""

content = content.replace(old_chapter2, new_chapter2_3)

with open('/app/applet/data/content.ts', 'w') as f:
    f.write(content)

print("Updated content.ts")
