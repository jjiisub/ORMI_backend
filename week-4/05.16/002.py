# Advanced
import re
def md_to_html(data):
    # <h>
    data = re.sub(r'^# (.*)', r'<h1>\1</h1>', data, flags=re.M)
    data = re.sub(r'^## (.*)', r'<h2>\1</h2>', data, flags=re.M)
    data = re.sub(r'^### (.*)', r'<h3>\1</h3>', data, flags=re.M)
    # <strong>
    data = re.sub(r'\*\*(.*)\*\*', r'<strong>\1</strong>', data)
    # <em>
    data = re.sub(r'\*(.*)\*', r'<em>\1</em>', data)
    # <pre><code>
    data = re.sub(r'\`\`\`(.*)\`\`\`', r'<pre><code>\1</code></pre>', data)
    # <code>
    data = re.sub(r'\`(.*)\`', r'<code>\1</code>', data, flags=re.M)
    # <li>
    data = re.sub(r'^- ([^\n]*)', r'<li>\1</li>', data, flags=re.M)
    # <ol> 개선 필요!
    data = re.sub(r'^1\.\s(.*)', r'<ol><li>\1</li>', data, flags=re.M)
    data = re.sub(r'^2\.\s(.*)', r'<li>\1</li></ol>', data, flags=re.M)
    # <q>
    data = re.sub(r'^> (.*)', r'<q>\1</q>', data, flags=re.M)
    # <br>
    data = re.sub(r'(^---)', r'<br>', data, flags=re.M)

    return data

with open('sample.md', 'r') as ipf:
    text = ipf.read()

with open('result.html', 'w') as opf:
    opf.write(md_to_html(text))