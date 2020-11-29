export const TASKS = [
  {
    type: "temperature-control",
    content: "What is the temperature in cooler 1",
    completion: "input",
  },
];

export const SAFER_FOOD_BETTER_BUSINESS = [
  {
    name: "Diary",
    checklists: [
      {
        name: "Opening Checks",
        tasks: [
          {
            what: "Your fridges, chilled display equipment and freezers are working properly.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Your other equipment (e.g. oven) is working properly.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Staff are fit for work and wearing clean work clothes.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Food preparation areas are clean and disinfected, where appropriate (work surfaces, equipment, utensils etc.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "There are plenty of handwashing and cleaning materials (soap, paper towels, cloths etc.)",
            type: "check",
            input: "checkbox"
          }
        ]
      },
      {
        name: "Closing Checks",
        tasks: [
          {
            what: "No food is left out.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Food past its 'use by' date has been thrown away.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Dirty cloths have been removed for cleaning and replaced with clean ones.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Waste has been removed and new bags put into the bins.",
            type: "check",
            input: "checkbox"
          }
        ]
      }
    ]
  }
]
