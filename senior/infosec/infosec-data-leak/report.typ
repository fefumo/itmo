#let markdown-export = sys.inputs.at("x-target", default: "pdf") == "md"
#show: body => {
  if markdown-export {
    body
  } else {
    set page(
      paper: "a4",
      margin: (x: 20mm, y: 18mm),
      footer: align(center)[г. Санкт-Петербург 2026],
    )
    body
  }
}

#show link: set text(fill: rgb("1565c0"))
#show link: underline
#set text(size: 10pt, lang: "ru")
#set par(justify: true, leading: 0.7em)

#let terminal(body) = block(
  width: 100%,
  fill: rgb("e1e5ea"),
  stroke: (left: 2pt + rgb("66788a")),
  inset: (x: 9pt, y: 7pt),
  radius: 3pt,
  breakable: true,
)[#body]
#show raw.where(block: true): set text(size: 8pt)

#let screenshot(path, title, caption) = block(
  width: 100%,
  breakable: false,
  above: 0.4cm,
  below: 0.5cm,
)[
  // Заголовок входит в ту же фигуру, что и уменьшенное изображение.
  #figure(
    block(width: 100%, breakable: false)[
      #align(center, text(weight: "bold", title))
      #v(0.2cm)
      #align(center, image(path, width: 75%))
    ],
    kind: image,
    caption: [#caption],
    placement: none,
  )
]

#v(1.6cm)

#align(center)[
  Федеральное государственное автономное образовательное
  #linebreak()
  учреждение высшего образования
  #linebreak()
  «Национальный исследовательский университет ИТМО»
]

#v(3.7cm)

#align(center)[
  #text(weight: "bold")[Отчёт]
  #linebreak()
  #text(weight: "bold")[По лабораторной работе N8]
  #linebreak()
  по дисциплине Информационная Безопасность
  #linebreak()
  #text(weight: "bold")[Вариант: -]
]

#v(6.9cm)

#align(right)[
  Работу выполнил:
  #linebreak()
  Молчанов Федор Денисович P3413
  #linebreak()
  #linebreak()
  Работу принял:
  #linebreak()
  Маркина Татьяна Анатольевна
]

#v(2cm)

#pagebreak()
#show: body => {
  if markdown-export {
    body
  } else {
    set page(
      footer: context {
        align(center)[#counter(page).display("1")]
      },
    )
    counter(page).update(1)
    body
  }
}
= 1 - Проверка мэйла

В предыдущей лабораторной мною уже был исследован сайт haveibeenpwned. По итогу было выявлено 3 старых утечки, после которых я сменил данные:


#screenshot("images/1-mail.png", "Мой мэйл", "На сайте haveibeenpwned")

#screenshot("images/2-info.png", "Подробная информация об утечках", "Для моего мэйла")

= 2 - Анализ

- AlpineReplay больше не существует, ни приложения, ни самого сайта больше нет.
- CDEK - был изменен пароль и почта для этого сервиса
- Synthient Credential Stuffing Threat Data - они изменили API, почистили базу данных и по моим данным зайти больше нельзя.

= 3 - Проверка username-ов

Так как информацию обо мне нельзя найти в соц сетиях (у меня приватные аккаунты в вк и тг), сделаю поиск по юзернейму с помощью #link("https://github.com/sherlock-project/sherlock")[sherlock]:

```bash
(osint-venv) ➜  ~ sherlock fefumo
[*] Checking username fefumo on:

[+] Codewars: https://www.codewars.com/users/fefumo
[+] Docker Hub: https://hub.docker.com/u/fefumo/
[+] F3.cool: https://f3.cool/fefumo/
[+] GitHub: https://www.github.com/fefumo
```
f3 сейчас не активен (продается). Остальные сайты активно используются мной.

= 4 - Правила цифровой гигиены

1. Использовать уникальный пароль для каждого аккаунта и хранить пароли в менеджере паролей.
2. Включать двухфакторную аутентификацию, предпочтительно через приложение-аутентификатор или ключ безопасности.
3. Проверять настройки конфиденциальности соцсетей раз в полгода и после крупных обновлений.
4. Не публиковать адрес проживания, документы, билеты и другие сведения, раскрывающие личные данные или местоположение.
5. Перед вводом пароля проверять адрес сайта; не переходить по подозрительным ссылкам из сообщений.
6. Своевременно обновлять ОС, браузер и приложения, устанавливать программы из доверенных источников.
7. Раз в полгода проверять свой цифровой след по имени и никнеймам, удалять ненужные аккаунты и публичные данные.

= Ответы на вопросы

1. Старые утечки опасны, поскольку пароли могут использоваться годами и повторяться на разных сайтах, а телефоны, адреса и другие сведения долго остаются актуальными.

2. Данные из соцсетей позволяют создавать убедительные фишинговые сообщения от имени знакомых или организаций, подбирать пароли и ответы на секретные вопросы.

3. Распространённые ошибки: одинаковые и слабые пароли, отсутствие двухфакторной аутентификации, переходы по подозрительным ссылкам, игнорирование обновлений и публикация лишних личных данных.
