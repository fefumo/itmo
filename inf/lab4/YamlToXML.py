inyaml = open('in.yaml', 'r', encoding = 'utf-8')
outxml = open('test.xml', 'w', encoding = 'utf-8')


outxml.write('<?xml version="1.0" encoding="UTF-8" ?> \n' + '<root> \n')
strings = inyaml.readlines()
inyaml.close()
ended_tags = [] #закрывающие теги
tab = 1 #табуляция
prev_space = 0 #кол-во пробелов в предыдущей строке

for yaml_string in strings:
    single_string = '' #одиночная строка с начальным и конечным тегом
    space = 0 #кол-во пробелов в данной строке
    
    #проверка на вход
    if yaml_string == '---\n':
        continue
    
    #ищем тэг
    colon = yaml_string.strip().find(':')
    index_tag = colon
    stripped_string = yaml_string.strip() #нельзя применять strip изначально, иначе сломается логика с пробелами
    start_tag = '<' + stripped_string[:index_tag] + '>'
    end_tag =  '</' + start_tag[1:]
    
    #ищем само слово(выражение)
    word = stripped_string[colon+1:].replace('\n', '').strip()
    
    #считаем количество пробелов перед строкой в ямле
    for i in yaml_string:
        if i == ' ':
            space += 1
        else:
            break
        
    single_string = start_tag + word + end_tag + '\n'
    
    #рассматриваем все возможные случаи табуляции(6) и вывода строк
    if space == prev_space and len(word) >= 1:
        outxml.write(tab * '    ' + single_string)
    if space == prev_space and len(word) < 1: #6 строка в файле
        outxml.write(tab * '    ' + start_tag + '\n')
        tab += 1
        ended_tags.append(end_tag) 
    if space > prev_space and len(word) >= 1:
        tab += 1
        outxml.write(tab * '    ' + single_string)
        prev_space = space
    if space > prev_space and len(word) < 1: #7 строка в файле
        outxml.write(tab * '    '+ start_tag + '\n')
        ended_tags.append(end_tag)
        prev_space = space
    if space < prev_space and len(word) >= 1:
        tab -= 1
        outxml.write(ended_tags[-1] + '\n')
        outxml.write(tab * '    ' + single_string)
        prev_space = space
        ended_tags.pop(-1)
    if space < prev_space and len(word) < 1: #13, 19 стркоа в файле
        tab -= 1
        outxml.write(tab * '    ' + ended_tags[-1] + '\n')
        outxml.write(tab*'    ' + start_tag + '\n')
        prev_space = space
        ended_tags.pop(-1)
        ended_tags.append(end_tag)
    
#выписать оставшиеся закрывающие теги
for i in range (len(ended_tags)):
    tab -= 1
    outxml.write(tab * '    ' + ended_tags[-1] + '\n')
    ended_tags.pop(-1)
        
        
outxml.write('</root>')
outxml.close()
