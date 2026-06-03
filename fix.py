import re

with open('src/pages/Terms.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'<h[34] className="font-bold inline">(.*?)</h[34]>', r'<strong className="font-bold">\1</strong>', content, flags=re.DOTALL)

with open('src/pages/Terms.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
