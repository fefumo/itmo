import re

#№1
valid_smile = re.compile(r"\[<{\)")
test_string1 = 'asd[[[sd[<{)as]]]]' #valid
test_string2 = '[<{})[<{()]]' #not valid
test_string3 = '<({[<)' #not valid
test_string4 = '[<{}]{[<{)' # valid
test_string5 = ''

strings = [test_string1, test_string2, test_string3, test_string4, test_string5]
for i in range(len(strings)):
    if valid_smile.search(strings[i]):
        print ('the string is ' + strings[i] + '\n the smile is: ' + valid_smile.search(strings[i]).group(0))
    else:
        print('string number',i, 'is not valid')
#done

#№2
print('\n')

valid_word = re.compile(r'\w*[аеёиоуыэюя]{2}\w*(?!\s+(?:[аеёиоуыэюя]*[бвгджзйклмнпрстфхцчшщ]){4,})(?!\s*$)\b', re.I)

test1 = 'Кривошеее существо гуляет по парку'
test2 = 'Кривошеее существо гуляет по парку веет сеном и рдеет снег' 
test3 = 'Кривошеее существо гуляет по парку и синеет'
test4 = 'Кривошеее существо гуляет по парку и синеет Поэтичное утро'
test5 = 'ааа п-ппппп, еее, кк, ее-к прснкптр, к-ее крпктрн'
tests = [test1, test2, test3, test4, test5]

for i in range(len(tests)):
    if valid_word.search(tests[i]) != None:
        print ('the stirng is ' + tests[i])
        for j in valid_word.findall(tests[i]):
            print ('correct word(s): ' + j)
    else:
        print('string number',i, 'is not valid')
   
#done
   
        
#3
print('\n')
valid_mail = re.compile(r'^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@([A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$)')

mail1 = 'stud@ents.spamyandex.ru'
mail2 = 'example@.'
mail3 = '_@mail.ru'
mail4 = 't@ya.ru'
mail5 = 'ABsad@ya..'

mails = [mail1, mail2, mail3, mail4, mail5]

for i in range(len(mails)):
    if valid_mail.search(mails[i]) != None:
        print('the mail is ' + mails[i] + ' the server is: ' + valid_mail.search(mails[i]).group(2))
    else:
        print('mail number ', i, ' is not valid')
#done