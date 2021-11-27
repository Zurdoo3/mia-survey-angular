import { MiaModel } from "@agencycoda/mia-core";

export class MiaSurveyQuestion extends MiaModel {
    id: number = 0;
    survey_id: number = 0;
    title: string = '';
    caption: string = '';
    type: number = 0;
    val: any;
    data: any;
    ord: number = 0;

    static cloneObj(question: MiaSurveyQuestion): MiaSurveyQuestion {
        let newItem = new MiaSurveyQuestion();
        newItem.survey_id = question.survey_id;
        newItem.title = question.title;
        newItem.caption = question.caption;
        newItem.type = question.type;
        newItem.val = question.val;
        newItem.data = JSON.parse(JSON.stringify(question.data));
        return newItem;
      }
      
      static getSubtypes(): any[] {
        return [
            { id: 0, title: 'Short answer',  },
            { id: 1, title: 'Paragraph',  },
            { id: 2, title: 'Multiple choice',  },
            { id: 3, title: 'Checkboxes',  },
            { id: 4, title: 'Linear scale',  },
            { id: 5, title: 'Date',  },
        ];
      }
}