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
#set text(size: 10pt)
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
  #text(weight: "bold")[По лабораторной работе N7]
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

#set text(size: 10pt, lang: "ru")
#set par(justify: false, leading: 0.55em, spacing: 0.7em)
#show heading: set block(above: 1em, below: 0.55em)
#show heading.where(level: 1): set text(size: 14pt)
#show heading.where(level: 2): set text(size: 12pt)
#set figure(gap: 4pt)
#show figure.caption: set text(size: 8pt, fill: rgb("505967"))

#let separator() = {
  v(4pt)
  line(length: 100%, stroke: 0.5pt + rgb("c9ced5"))
  v(2pt)
}

// Показываем нужный фрагмент исходного скриншота средствами вёрстки.
#let screenshot(path, caption, height: 26mm, offset: 0mm) = block(breakable: false)[
  #block(width: 100%, height: height, clip: true)[
    #move(dy: -offset)[#image(path, width: 100%)]
  ]
  #text(size: 8pt, fill: rgb("505967"))[#caption]
]

#let assessment(risk, confidence) = block(
  fill: rgb("f1f3f6"),
  inset: (x: 7pt, y: 5pt),
  width: 100%,
)[*Оценка ZAP:* риск — #risk; уверенность — #confidence.]

#outline(title: [Оглавление], depth: 2)
#pagebreak()

= Безопасность браузера и анализ сетевого трафика

*Цель:* изучить настройки конфиденциальности Firefox и передачу данных между браузером и сайтом.
*Среда:* Firefox 157.0, Linux; дата — 19.10.2026.

= Настройка браузера

В Privacy & Security включена Enhanced Tracking Protection в режиме Strict. Отключено предложение сохранять пароли (Ask to save passwords).

#figure(image("images/1-enhanced-tracking.png", width: 100%), caption: [Расширенная защита от отслеживания включена.])

#figure(image("images/2-password-saving.png", width: 100%), caption: [Сохранение паролей отключено.])

#figure(image("images/3-before-clear.png", width: 100%), caption: [Данные браузера до очистки.])

#figure(image("images/4-after-clear.png", width: 100%), caption: [Полная очистка данных браузера.])

Удалены cookies и кэш. Очистка cookies удаляет локальные данные сеансов; очистка кэша удаляет сохранённые копии ресурсов.

= Анализ HTTP-запросов

В Network исследованы запросы учебного сайта `https://the-internet.herokuapp.com/login`.

== GET: загрузка страницы

Запрос `GET /login` получил ответ 200. В списке также присутствуют запросы стилей, JavaScript и изображений. В Request Headers показаны Host (адрес сервера), User-Agent (браузер и ОС), Accept (типы содержимого), Accept-Language (языки), Accept-Encoding (сжатие), Referer (источник перехода) и Cookie (данные сеанса).

#figure(image("images/5-get-headers.png", width: 100%), caption: [GET /login: список запросов и заголовки.])

== POST: отправка формы

В форму введены тестовые значения: логин `asd`, пароль `asd`. При отправке сформирован `POST /authenticate`. Заголовок `Content-Type: application/x-www-form-urlencoded` задаёт формат тела формы; `Content-Length: 25` — его размер в байтах. Origin и Referer указывают источник запроса. В заголовках также присутствует Authorization со схемой Basic; это отдельный механизм HTTP-аутентификации, его не следует смешивать с полями формы. Base64 в Basic является кодированием, а не шифрованием.

#figure(image("images/7-post-headers.png", width: 100%), caption: [POST /authenticate: заголовки запроса.])

Во вкладке Request поля username и password читаются непосредственно. Тело соответствует строке `username=asd&password=asd` (25 байт). Сам метод POST не шифрует данные.

#figure(image("images/8-test-creds.png", width: 100%), caption: [Request: тестовые логин и пароль в Form data.])

== Защита соединения

Во вкладке Security указаны TLSv1.3, набор шифров `TLS_AES_128_GCM_SHA256` и группа обмена ключами `x25519`. Это подтверждает использование TLS для выбранного запроса. Параметр HSTS показан как Disabled; это не отменяет шифрование текущего HTTPS-соединения.

#figure(image("images/9-tls.png", width: 100%), caption: [Security: параметры TLS выбранного POST-запроса.])

= Вывод о передаче данных аутентификации

В приложениях с парольной формой логин и пароль обычно передаются в теле POST-запроса по HTTPS, например как поля формы или JSON. В этой работе поля формы читаются в DevTools, поскольку браузер имеет доступ к данным до шифрования. По сети HTTP-заголовки и тело запроса защищены TLS. Читаемый пароль в DevTools не означает передачу открытым текстом по сети. После проверки данных сервер обычно использует сеансовую cookie или токен; способ хранения пароля на сервере данным опытом не установлен.

= Контрольные вопросы

*Что такое cookies и чем они могут угрожать конфиденциальности?* Cookies — данные, сохраняемые браузером для сайта и отправляемые в подходящих запросах. Они используются для сеансов и настроек, но устойчивые идентификаторы также позволяют отслеживать пользователя. Кража сеансовой cookie может дать доступ к сеансу.

*Почему форма входа должна использовать HTTPS?* TLS обеспечивает конфиденциальность и целостность передаваемых данных и проверку подлинности сервера по сертификату. Без HTTPS данные могут быть перехвачены или изменены в пути.

*Чем опасно сохранение пароля в браузере?* При доступе к разблокированному профилю или заражении устройства сохранённые пароли и автозаполнение могут быть использованы посторонним. Риск зависит от защиты ОС и хранилища. Отключение предложения сохранять пароли не удаляет ранее сохранённые записи.
