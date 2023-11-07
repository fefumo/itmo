yaml_string = open('in.yaml', 'r', encoding = 'utf-8')
outxml = open('test.xml', 'w', encoding = 'utf-8')

def yamltoxml(yaml_string):
    outxml.write('<?xml version="1.0" encoding="UTF-8" ?> \n' + '<root> \n')
    strings = yaml_string.readlines()
    
    while yaml_string:
        single_string = '' #одиночная строка с начальным и конечным тегом
        ended_tags = [] #закрывающие тэги для списков
        
        #проверка на вход
        if yaml_string == '---':
            continue
        
        #ищем тэг
        colon = yaml_string.find(':')
        index_tag = colon + 1
        start_tag = '<' + yaml_string[:index_tag] + '>'
        end_tag =  '</' + start_tag[1:]
        
        #ищем само слово
        word = yaml_string[colon+1:]
        
        #если после двоеточия есть слово, то закрываем тэг и записываем строку
        if word != '':
            single_string = start_tag + word + end_tag
            outxml.write(single_string)
            break
        else:
            ended_tags.append(end_tag)
            break
            
        