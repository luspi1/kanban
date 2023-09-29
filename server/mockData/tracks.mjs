export let tracks = [
  {
    title: "трек создание",
    id: "0",
    columns: [
      {
        id: "0",
        tasks: [
          {
            id: "4",
            title: "Задача 4",
            startDate: "Fri Sep 20 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "lower",
            difficult: "common",
            category: "testing",
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit es",
            executor: "Андрей И.",
            checkboxes: [
              {
                id: "1c",
                title: "подпункт 1",
                checked: false
              },
              {
                id: "2c",
                title: "подпункт 2",
                checked: true
              }
            ],
            photos: [],
            parentTask: { id: "5", title: "Задача 5" },
            dependencyTask: [{ id: "5", title: "Задача 5" }, {
              id: "312",
              title: "Задача 123"
            }],
            comments: [
              {
                id: "c1",
                time: "Fri Sep 29 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
                user: {
                  id: "1u",
                  name: "Андрей И."
                },
                text: "Поясните по задаче..."
              },
              {
                id: "c2",
                time: "Fri Sep 23 2023 16:11:05 GMT+0300 (Москва, стандартное время)",
                user: {
                  id: "2u",
                  name: "Антон С."
                },
                text: "тут и так все ясно"
              }
            ]
          },
          {
            id: "5",
            title: "Задача 5",
            startDate: "Fri Sep 21 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "medium",
            difficult: "lower",
            category: "programming",
            desc: "amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
            executor: "Петр К.",
            checkboxes: [
              {
                id: "3c",
                title: "подзадача №123",
                checked: false
              }
            ],
            photos: [],
            parentTask: { id: "12321", title: "Задача 1231" },
            dependencyTask: [{ id: "3322", title: "Задача 124124" }, {
              id: "312",
              title: "Задача 123"
            }],
            comments: [
              {
                id: "c3",
                time: "Fri Sep 21 2022 16:33:05 GMT+0300 (Москва, стандартное время)",
                user: {
                  id: "3u",
                  name: "Светлана И."
                },
                text: "постараюсь сделать сегодня"
              }
            ]
          }
        ]
      },
      {
        id: "1",
        tasks: [
          {
            id: "312",
            title: "Задача 123",
            startDate: "Fri Sep 15 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "tall",
            difficult: "common",
            category: "testing",
            desc: "Какое описание 1",
            executor: "Антон С.",
            checkboxes: [],
            photos: [],
            parentTask: null,
            dependencyTask: [],
            comments: []
          },
          {
            id: "12321",
            startDate: "Fri Sep 11 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            title: "Задача 1231",
            priority: "common",
            difficult: "high",
            category: "programming",
            desc: "Описание задачи.",
            executor: "Игорь И.",
            checkboxes: [
              {
                id: "4c",
                title: "еще какая то подзадача",
                checked: false
              }
            ],
            photos: [],
            parentTask: null,
            dependencyTask: [],
            comments: [
              {
                id: "c4",
                time: "Fri Sep 21 2022 16:33:05 GMT+0300 (Москва, стандартное время)",
                user: {
                  id: "4u",
                  name: "Ксения Н."
                },
                text: "ок"
              }
            ]
          }
        ]
      },
      {
        id: "2",
        tasks: [
          {
            id: "3322",
            title: "Задача 124124",
            startDate: "Fri Sep 23 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "medium",
            difficult: "common",
            category: "layout",
            desc: "СДЕЛАТЬ ЗАДАЧУ!",
            executor: "Светлана И.",
            checkboxes: [],
            photos: [],
            parentTask: { id: "12321", title: "Задача 1231" },
            dependencyTask: [],
            comments: [
              {
                id: "c5",
                time: "Fri Sep 21 2022 16:33:05 GMT+0300 (Москва, стандартное время)",
                user: {
                  id: "5u",
                  name: "Сергей С."
                },
                text: "отдайте задачу дизайнеру на доработку"
              }
            ]
          }
        ]
      },
      {
        id: "3",
        tasks: [
          {
            id: "1",
            title: "Задача 1",
            startDate: "Fri Sep 19 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "high",
            difficult: "lower",
            category: "programming",
            desc: "Excepteur sint occaecat cupidatat",
            executor: "Ксения Н.",
            checkboxes: [
              {
                id: "5c",
                title: "выполненная подзадача",
                checked: true
              }
            ],
            photos: [],
            parentTask: { id: "56", title: "Задача 4" },
            dependencyTask: [{ id: "56", title: "Задача 4" }, {
              id: "1",
              title: "Задача 1"
            }],
            comments: []
          }
        ]
      }]
  },
  {
    title: "трек доработка",
    id: "1",
    columns: [
      {
        id: "4",
        tasks: [
          {
            id: "56",
            title: "Задача 4",
            startDate: "Fri Sep 10 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "lower",
            difficult: "common",
            category: "testing",
            desc: "majority have suffered alteration in some form, by injected humour, or randomised wo adw daw daw daw daw ddawd",
            executor: "Сергей С.",
            checkboxes: [],
            photos: [],
            parentTask: null,
            dependencyTask: [{ id: "1", title: "Задача 1" }],
            comments: []
          },
          {
            id: "59",
            title: "Интересная задача",
            startDate: "Fri Sep 20 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "medium",
            difficult: "high",
            category: "layout",
            desc: "It is a long established fact that a reader will be distracted by the readable",
            executor: "Сергей А.",
            checkboxes: [
              {
                id: "6c",
                title: "подзадача distracted by the read",
                checked: true
              },
              {
                id: "7c",
                title: "подзадача established fact that a ",
                checked: false
              }
            ],
            photos: [],
            parentTask: { id: "5", title: "Задача 5" },
            dependencyTask: [{ id: "5", title: "Задача 5" }, {
              id: "87",
              title: "Задача 124124"
            }],
            comments: [
              {
                id: "c6",
                time: "Fri Sep 21 2022 16:31:05 GMT+0300 (Москва, стандартное время)",
                user: {
                  id: "7u",
                  name: "Сергей Т."
                },
                text: "quis nostrud exercitation ullamco"
              },
              {
                id: "c7",
                time: "Fri Sep 21 2022 16:34:05 GMT+0300 (Москва, стандартное время)",
                user: {
                  id: "8u",
                  name: "Игорь И."
                },
                text: "Lorem ipsum dolor sit amet, consectetur"
              },
              {
                id: "c8",
                time: "Fri Sep 21 2022 16:38:05 GMT+0300 (Москва, стандартное время)",
                user: {
                  id: "8u",
                  name: "Игорь И."
                },
                text: " Excepteur sint occaecat"
              }
            ]
          }
        ]
      },
      {
        id: "5",
        tasks: [
          {
            id: "66",
            title: "Задача 6",
            startDate: "Fri Sep 24 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "common",
            difficult: "common",
            category: "programming",
            desc: " quis nostrud exercitation ullamco",
            executor: "Сергей Т.",
            checkboxes: [],
            photos: [],
            parentTask: { id: "87", title: "Задача 124124" },
            dependencyTask: [],
            comments: []
          }
        ]
      },
      {
        id: "6",
        tasks: [
          {
            id: "87",
            title: "Задача 124124",
            startDate: "Fri Sep 23 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "medium",
            difficult: "lower",
            category: "layout",
            desc: "Снова описание",
            executor: "Дмитрий А.",
            checkboxes: [],
            photos: [],
            parentTask: null,
            dependencyTask: [],
            comments: []
          }
        ]
      },
      {
        id: "7",
        tasks: [
          {
            id: "96",
            title: "Задача 1",
            startDate: "Fri Sep 27 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
            priority: "high",
            difficult: "common",
            category: "programming",
            desc: "Еще одно описание",
            executor: "Дмитрий А.",
            checkboxes: [
              {
                id: "8c",
                title: "dwada da  established fact that a",
                checked: false
              }
            ],
            photos: [],
            parentTask: null,
            dependencyTask: [{ id: "87", title: "Задача 124124" }],
            comments: []
          }
        ]
      }]
  }

];