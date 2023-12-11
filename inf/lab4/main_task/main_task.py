def YamlToXML():
    inyaml = open('in.yaml', 'r', encoding = 'utf-8')
    strings = inyaml.readlines()
    inyaml.close()

    with open ('tester.xml', 'w', encoding = 'utf-8') as outxml:
        outxml.write('<?xml version="1.0" encoding="UTF-8" ?> \n' + '<root> \n')
        ended_tags = [] #закрывающие теги
        tab = 1 #табуляция
        prev_space = 0 #кол-во пробелов в предыдущей строке
        prev_tab = 0 #для вложенных списков. последний if
        
        for yaml_string in strings:
            single_string = '' #одиночная строка с начальным и конечным тегом
            space = 0 #кол-во пробелов в данной строке
            if yaml_string == '---\n': #проверка на вход
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
            if space != 0 and space != 2:
                tab = space//2 + 1
            if space == 2:
                tab = 2

            space_difference = (abs(space - prev_space))//2 #для вложенных списков. последний if
            
            #рассматриваем все возможные случаи табуляции(6) и вывода строк
            if space == prev_space and len(word) >= 1:
                outxml.write(tab * '    ' + single_string)
                prev_tab = tab
                continue
            if space == prev_space and len(word) < 1: #6 строка в файле
                outxml.write(tab * '    ' + start_tag + '\n')
                ended_tags.append(end_tag)
                prev_tab = tab
                continue 
            if space > prev_space and len(word) >= 1:
                outxml.write(tab * '    ' + single_string)
                prev_space = space
                prev_tab = tab
                continue
            if space > prev_space and len(word) < 1: #7 строка в файле
                outxml.write(tab * '    '+ start_tag + '\n')
                ended_tags.append(end_tag)
                prev_space = space
                continue
            if space < prev_space and len(word) >= 1:
                prev_tab -= 1
                for i in range(space_difference):
                    outxml.write(prev_tab * '    ' + ended_tags[-1] + '\n')
                    prev_tab -= 1
                    ended_tags.pop(-1)
                outxml.write(tab * '    ' + single_string)
                prev_space = space
                prev_tab = tab
                continue
            if space < prev_space and len(word) < 1: #13, 19 стркоа в файле
                prev_tab -= 1
                for i in range(space_difference):
                    outxml.write(prev_tab * '    ' + ended_tags[-1] + '\n')
                    prev_tab -= 1
                    ended_tags.pop(-1)
                outxml.write(tab*'    ' + start_tag + '\n')
                prev_space = space
                ended_tags.append(end_tag)
                prev_tab = tab
                continue
        
        #выписать оставшиеся закрывающие теги
        for i in range (len(ended_tags)):
            tab -= 1
            outxml.write(tab * '    ' + ended_tags[-1] + '\n')
            ended_tags.pop(-1)
                
        outxml.write('</root>')

YamlToXML()