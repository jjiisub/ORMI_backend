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
    data = re.sub(r'(```)[\w]+', '<pre><code>', data)
    data = re.sub(r'(```)', '</pre></code>', data)
    # <code>
    data = re.sub(r'\`(.*)\`', r'<code>\1</code>', data, flags=re.M)
    # <li>
    data = insert_ul(data)
    data = re.sub(r'^- ([^\n]*)', r'<li>\1</li>', data, flags=re.M)
    # <ol>
    data = insert_ol(data)
    data = re.sub(r'\d+\.\s(.*)$', r'<li>\1</li>', data, flags=re.M)
    # <q>
    data = re.sub(r'^> (.*)', r'<q>\1</q>', data, flags=re.M)
    # <br>
    data = re.sub(r'(^---)', r'<br>', data, flags=re.M)
    # <a>
    data = re.sub(r'^\[(.+?)\]\((.+?)\)', r'<a href="\2">\1</a>', data, flags=re.M)
    # <img>
    data = re.sub(r'!\[(.+?)\]\((.+?)\)', r'<img href="\2">\1</img>', data, flags=re.M)
    return data

def insert_ul(text):
    pattern = r'^\-\s(.*)$'
    matches = re.finditer(pattern, text, flags=re.M)
    pos_min = float('inf')
    pos_max = float('-inf')
    for match in matches:
        if match.span()[0] < pos_min:
            pos_min = match.span()[0]
        if match.span()[1] > pos_max:
            pos_max = match.span()[1]
    text = text[:pos_max]+'\n</ul>'+text[pos_max:]
    text = text[:pos_min]+'<ul>\n'+text[pos_min:]
    return text

def insert_ol(text):
    pattern = r'^(\d+)\. (.*)$'
    matches = re.finditer(pattern, text, flags=re.M)
    pos_min = float('inf')
    pos_max = float('-inf')
    for match in matches:
        if match.span()[0] < pos_min:
            pos_min = match.span()[0]
        if match.span()[1] > pos_max:
            pos_max = match.span()[1]
    text = text[:pos_max]+'\n</ol>'+text[pos_max:]
    text = text[:pos_min]+'<ol>\n'+text[pos_min:]
    return text


with open('sample.md', 'r') as ipf:
    text = ipf.read()

with open('result.html', 'w') as opf:
    opf.write(md_to_html(text))