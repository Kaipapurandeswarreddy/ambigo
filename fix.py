import os, re
import glob

directory = r'c:\Users\haris\Desktop\amb web\src\pages'
files = glob.glob(os.path.join(directory, '*.tsx'))

pattern = re.compile(
    r'<div\s+className=\"promo-card group\"\s+onClick=\{\(\)\s*=>\s*window\.open\(' +
    r'(\'[^\']+\')' +  # Group 1: The URL
    r',\s*\'_blank\'\)\}\s+style=\{\{\s*cursor:\s*\'pointer\'\s*\}\}\s*>\s*' +
    r'(.*?)' +         # Group 2: The content before the button
    r'<div\s+className=\"(text-orange-500 font-bold [^\"]+)\"\s*>\s*' + # Group 3: Button classes
    r'([^<]+)' +       # Group 4: Button text
    r'\s*</div>\s*' +
    r'</div>\s*</div>',
    re.DOTALL
)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'promo-card group' not in content:
        continue
        
    def repl(m):
        url = m.group(1)
        content_before = m.group(2)
        btn_classes = m.group(3)
        btn_text = m.group(4).strip()
        
        new_card = f'<div className=\"promo-card group\">\n{content_before}'
        new_card += f'<div \n onClick={{() => window.open({url}, \'_blank\')}}\n style={{{{ cursor: \'pointer\' }}}}\n className=\"{btn_classes}\">\n{btn_text}\n</div>\n</div>\n</div>'
        
        return new_card
    
    new_content = pattern.sub(repl, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {os.path.basename(filepath)}')
