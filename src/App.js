import React, {Component} from 'react';
import './App.css';
import * as Survey from 'survey-react';

class App extends Component {
    constructor() {
        super();
        this.surveyJson = {
            pages: [
                {
                    name: "page1",
                    questions: [
                        {
                            type: "text",
                            name: "age",
                            title: "enter age"
                        }
                    ]
                }
            ]
        }
    }

    sendDataToServer(survey) {
       var resultAsString = JSON.stringify(survey.data);
       alert(resultAsString); //send Ajax request to your web server.
    };

  render() {
    return (
        <Survey.Survey json={this.surveyJson} onComplete={this.sendDataToServer} />
    );
  }
}

export default App;