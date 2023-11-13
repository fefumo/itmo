import re

with open ('dop2.yaml', 'r', encoding = 'UTF-8') as in_file:
    strings = in_file.readlines()

#выражение для поиска слова до доветочия
before_colon = re.compile(r'\s*[a-zA-z0-9а-яА-Я_!№;%:?*]+(?=:)')
#выражение для поиска слова после двоеточия
after_colon = re.compile(r'.+?:(\s*.+)')

'''1) записываем тэги и слова(выражения), затем делаем проверку на полную строку, количество отступов + 
наличие слова после двоеточия, по аналогии с основным заданием, и выполняем запись в файл'''




with open('dop2.xml','w',encoding='UTF-8') as outxml:
    outxml.write ('<?xml version="1.0" encoding="UTF-8" ?>\n' + '<root>\n' )
    tags = []
    closed_tags = []
    words = []
    tab = 1
    prev_space = 0
    prev_tab = 0 #последний if

    for line in range(len(strings)):
        space = 0
        #подсчёт пробелов
        for i in strings[line]:
            if i == ' ':
                space += 1
            else:
                break
        
        space_difference = (abs(space - prev_space))//2 #для вложенных списков. последний if
        
        if strings[line] == '---\n':
            continue
        if before_colon.match(strings[line]):
            tag = before_colon.match(strings[line]).group().strip()
            tags.append(tag)
        if after_colon.match(strings[line]):
            word = after_colon.match(strings[line]).group(1).strip()
            words.append(word)
        if len(words)>0:
            body = '<' + tags[0] + '>' + words[0] + '</' + tags[0] + '>\n'

        if space != 0 and space != 2:
            tab = space//2 + 1
        if space == 2:
            tab = 2
        
        #случаи по аналогии с основным заданием
        if space == prev_space and len(words)>=1:
            outxml.write(tab*'    ' + body)
            words.pop(0)
            tags.pop(0)
            prev_tab = tab
            continue
        if space == prev_space and len(words) < 1:
            outxml.write(tab*'    ' + '<' + tags[0] + '>\n')
            closed_tags.append('</' + tags[0] + '>\n')
            tags.pop(0)
            prev_tab = tab
            continue
        if space > prev_space and len(words)>= 1:
            outxml.write(tab*'    ' + body)
            prev_space = space
            words.pop(0)
            tags.pop(0)
            prev_tab = tab
            continue
        if space > prev_space and len(words) < 1:
            outxml.write(tab * '    ' + '<' + tags[0] + '>\n')
            closed_tags.append('</' + tags[0] + '>\n')
            tags.pop(0)
            prev_space = space
            prev_tab = tab
            continue
        if space < prev_space and len(words) >= 1:
            prev_tab -= 1
            for i in range(space_difference):
                outxml.write(prev_tab * '    ' + closed_tags[-1])
                prev_tab -= 1
                closed_tags.pop(-1)
            prev_space = space
            words.pop(0)
            tags.pop(0)
            prev_tab = tab
            continue
        if space < prev_space and len(words) < 1: 
            prev_tab -= 1
            for i in range(space_difference):
                outxml.write(prev_tab * '    ' + closed_tags[-1])
                prev_tab -= 1
                closed_tags.pop(-1)
            outxml.write(tab*'    ' + '<' + tags[0] + '>\n')
            prev_space = space
            closed_tags.append('</' + tags[0] + '>\n')
            prev_tab = tab
            continue
        
    for i in range (len(closed_tags)):
        tab -= 1
        outxml.write(tab * '    ' + closed_tags[-1])
        closed_tags.pop(-1)
    
    outxml.write('</root>')