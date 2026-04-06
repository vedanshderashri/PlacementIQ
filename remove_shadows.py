import os
import re

directory = r"C:\Users\Vedansh\Desktop\Kriyeta Interview Website\src\components"

# Regex patterns to catch tailwind shadow utilities
patterns = [
    r'shadow-\[.*?\]',
    r'\bshadow-(sm|md|lg|xl|2xl|inner)\b',
    r'\bdrop-shadow(-\w+)?(\[.*?\])?\b',
    r'ring-1 ring-white/\d+' # also convert old white rings to clean borders
]

for filename in os.listdir(directory):
    if filename.endswith(".jsx"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove shadows
        for pattern in patterns:
            content = re.compile(pattern).sub('', content)
        
        # Cleanup double spaces left by removal
        content = re.sub(r'  +', ' ', content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Removed heavy shadows from {filename}")

print("Shadow stripping complete.")
