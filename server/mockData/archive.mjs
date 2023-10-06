export let archiveTasks = [
  {
    id: "41424",
    title: "Задача Архивная 1",
    startDate: "Fri Sep 11 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
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
    id: "12990",
    title: "Задача Архивная 2",
    startDate: "Fri Sep 14 2023 16:36:05 GMT+0300 (Москва, стандартное время)",
    priority: "lower",
    difficult: "common",
    category: "testing",
    desc: "Какая то старая задача",
    executor: "Антон И.",
    checkboxes: [
      {
        id: "1c",
        title: "подпункт 1",
        checked: false
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
]