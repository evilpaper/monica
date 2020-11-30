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

export const STANDARD_SWEDSIH = [
  {
    checklists: [
      {
        name: "Daglig kontroll",
        tasks: [
          {
            what: "Rengöring. Kontrollera att all utrustning och alla ytor som kommer i kontakt med mat hel och ren.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Diskning. Kontrollera att diskmaskinen är ren och kommer upp i 80-90°C vid slutsköljning.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Kontrollera att vi kan uppge fullständigt innehåll på våra produkter genom att ta ett stickprov.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Kontrollera att alla frysar håller rätt temperatur.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Kontrollera att alla livsmedel förvaras korrekt dvs. är övertäcka, uppmärkta etc.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Kontrollera att mottagna varor är hela, rena och har rätt temperatur. Skriv temperatur och din signatur på följesedeln.",
            type: "check",
            input: "checkbox"
          },
          {
            what: "Säkerställ förutsättningar för god personlig hygien. Gör rent alla handfat för handtvätt och se till att det finns gott om tvål och engångshanddukar.",
            type: "check",
            input: "checkbox"
          }
  
        ]
      }
    ]
  }
]

export const EXPANDED_SWEDSIH = [
  {
    checklists: [
      {
        name: "Rengöringskontroll",
        tasks: [
          {
            what: "Rengöring. Kontrollera att all utrustning och alla ytor som kommer i kontakt med mat hel och ren.",
            type: "check",
            input: "checkbox"
          }
        ]
      },
      {
        name: "Mathantering",
        tasks: [
          {
            what: "Rengöring. Kontrollera att all utrustning och alla ytor som kommer i kontakt med mat hel och ren.",
            type: "check",
            input: "checkbox"
          }
        ]
      },
      {
        name: "Kylda varor och kylar",
        tasks: [
          {
            what: "Rengöring. Kontrollera att all utrustning och alla ytor som kommer i kontakt med mat hel och ren.",
            type: "check",
            input: "checkbox"
          }
        ]
      },
      {
        name: "Frysta varor och frysar",
        tasks: [
          {
            what: "Rengöring. Kontrollera att all utrustning och alla ytor som kommer i kontakt med mat hel och ren.",
            type: "check",
            input: "checkbox"
          }
        ]
      },
      {
        name: "Varumottagning",
        tasks: [
          {
            what: "Rengöring. Kontrollera att all utrustning och alla ytor som kommer i kontakt med mat hel och ren.",
            type: "check",
            input: "checkbox"
          }
        ]
      },
    ]
  }
]