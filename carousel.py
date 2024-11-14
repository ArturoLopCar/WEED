from os import listdir
from os.path import isfile, join
import re


imagenames = [f for f in listdir('img/carousel/') if isfile(join('img/carousel/', f))]
replaceTextStart = '<!-- carousel start -->'
replaceTextEnd = '<!-- carousel end -->'
html = '';

def replaceTextBetween(originalText, delimeterA, delimterB, replacementText):
    leadingText = originalText.split(delimeterA)[0]
    trailingText = originalText.split(delimterB)[1]

    return leadingText + delimeterA + replacementText + delimterB + trailingText

for imagename in imagenames:
    html += '''
        <div class="item">
            <img src="img/carousel/''' + imagename + '''">
        </div>
        '''
    
with open(r"index.html", "r") as file:
    data = file.read()
    data = replaceTextBetween(data, replaceTextStart, replaceTextEnd, html)

with open(r"index.html", "w") as file:
    file.write(data)
